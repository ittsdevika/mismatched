import React, { useEffect, useState } from 'react';
import { Heart, Instagram, RefreshCw, Users } from 'lucide-react';
import { getTotalUsers } from '../lib/supabase';

interface MatchResultProps {
  userInstagram: string;
  matchInstagram: string;
  category: string;
  score: number;
  onRestart: () => void;
}

export const MatchResult: React.FC<MatchResultProps> = ({
  userInstagram,
  matchInstagram,
  category,
  score,
  onRestart,
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 1000);

    // Fetch total users count
    getTotalUsers().then(count => setTotalUsers(count));

    return () => clearTimeout(timer);
  }, []);

  const getMatchMessage = () => {
    if (score >= 10) return "OMG! This is meant to be! 🔥";
    if (score >= 8) return "High compatibility detected! ✨";
    if (score >= 6) return "Interesting match potential! 🎯";
    return "Opposites attract, right? 😏";
  };

  const getCategoryEmoji = () => {
    switch (category) {
      case 'engeyum-kadhal': return '💕';
      case 'haslo-bhai': return '😂';
      case 'adrenaline-rush': return '⚡';
      case 'plot-twist': return '🎭';
      default: return '✨';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Your Mismatched Match! 
          </h2>
          <p className="text-white/90 text-lg">
            {getMatchMessage()}
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-full p-4">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <Heart className={`w-12 h-12 text-red-500 transition-all duration-1000 ${
                isRevealed ? 'animate-pulse' : 'opacity-0'
              }`} />
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full p-4">
                <Instagram className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-gray-600 text-sm mb-1">You</p>
                <p className="text-xl font-bold text-gray-800">@{userInstagram}</p>
              </div>

              <div className="text-4xl">{getCategoryEmoji()}</div>

              <div>
                <p className="text-gray-600 text-sm mb-1">Your Match</p>
                <p className={`text-xl font-bold text-gray-800 transition-all duration-1000 ${
                  isRevealed ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}>
                  @{matchInstagram}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Match Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Category:</span>
                <span className="font-semibold text-gray-800 capitalize">
                  {category.replace('-', ' ')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Compatibility Score:</span>
                <span className="font-semibold text-gray-800">{score}/12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Match Quality:</span>
                <span className="font-semibold text-gray-800">
                  {score >= 10 ? 'Excellent' : score >= 8 ? 'Great' : score >= 6 ? 'Good' : 'Interesting'}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-gray-600 text-sm">
              This is a real user who took the quiz! Why not slide into their DMs? 💫
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs">
              <Users className="w-4 h-4" />
              <span>{totalUsers} people have joined Mismatched so far!</span>
            </div>
            
            <button
              onClick={onRestart}
              className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Find Another Match</span>
            </button>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-white/80 text-xs">
            Remember: The best matches are beautifully mismatched! 💫
          </p>
        </div>
      </div>
    </div>
  );
};