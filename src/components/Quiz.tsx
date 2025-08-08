import React, { useState } from 'react';
import { Category } from '../types';

interface QuizProps {
  category: Category;
  onComplete: (score: number) => void;
}

export const Quiz: React.FC<QuizProps> = ({ category, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const currentQuestion = category.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === category.questions.length - 1;

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      const points = currentQuestion.points[selectedOption];
      const newScore = score + points;
      setScore(newScore);

      if (isLastQuestion) {
        onComplete(newScore);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      }
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${category.gradient} flex items-center justify-center p-4`}>
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{category.emoji}</div>
          <h2 className="text-3xl font-bold text-white mb-2">
            {category.name}
          </h2>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
            <span className="text-white font-semibold">
              Question {currentQuestionIndex + 1} of {category.questions.length}
            </span>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center leading-relaxed">
            {currentQuestion.question}
          </h3>

          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full p-6 rounded-xl text-left transition-all duration-200 ${
                  selectedOption === index
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg transform scale-105`
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800 hover:shadow-md'
                }`}
              >
                <div className="flex items-center">
                  <span className="text-lg font-medium mr-4">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span className="text-lg">{option}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                selectedOption !== null
                  ? `bg-gradient-to-r ${category.gradient} text-white hover:shadow-lg transform hover:-translate-y-0.5`
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isLastQuestion ? 'Find My Match! 💫' : 'Next Question →'}
            </button>
          </div>
        </div>

        <div className="text-center mt-6">
          <div className="flex justify-center space-x-2">
            {category.questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index <= currentQuestionIndex 
                    ? 'bg-white' 
                    : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};