import React, { useState } from 'react';
import { InstagramInput } from './components/InstagramInput';
import { CategorySelection } from './components/CategorySelection';
import { Quiz } from './components/Quiz';
import { MatchResult } from './components/MatchResult';
import { categories, matchPool } from './data/questions';
import { insertUserData, getRandomMatch } from './lib/supabase';
import { Category } from './types';

type AppState = 'instagram' | 'category' | 'quiz' | 'result';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('instagram');
  const [userInstagram, setUserInstagram] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [userScore, setUserScore] = useState(0);
  const [matchInstagram, setMatchInstagram] = useState('');

  const handleInstagramSubmit = (instagram: string) => {
    setUserInstagram(instagram);
    setCurrentState('category');
  };

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setCurrentState('quiz');
  };

  const handleQuizComplete = async (score: number) => {
    setUserScore(score);
    
    try {
      // Store user data in Supabase first
      await insertUserData({
        instagram_id: userInstagram,
        chosen_category: selectedCategory?.id || '',
        score: score
      });

      // Get a real match from existing users
      const match = await getRandomMatch(userInstagram, selectedCategory?.id);
      
      if (match) {
        setMatchInstagram(match.insta_id);
      } else {
        // Fallback to preset list if no real users exist yet
        const fallbackMatch = matchPool[Math.floor(Math.random() * matchPool.length)];
        setMatchInstagram(fallbackMatch);
      }
      
    } catch (error) {
      console.error('Failed to store user data:', error);
      // Fallback to preset list if database fails
      const fallbackMatch = matchPool[Math.floor(Math.random() * matchPool.length)];
      setMatchInstagram(fallbackMatch);
    }

    setCurrentState('result');
  };

  const handleRestart = () => {
    setCurrentState('instagram');
    setUserInstagram('');
    setSelectedCategory(null);
    setUserScore(0);
    setMatchInstagram('');
  };

  return (
    <div>
      {currentState === 'instagram' && (
        <InstagramInput onNext={handleInstagramSubmit} />
      )}
      
      {currentState === 'category' && (
        <CategorySelection 
          categories={categories} 
          onSelect={handleCategorySelect} 
        />
      )}
      
      {currentState === 'quiz' && selectedCategory && (
        <Quiz 
          category={selectedCategory} 
          onComplete={handleQuizComplete} 
        />
      )}
      
      {currentState === 'result' && (
        <MatchResult
          userInstagram={userInstagram}
          matchInstagram={matchInstagram}
          category={selectedCategory?.id || ''}
          score={userScore}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;