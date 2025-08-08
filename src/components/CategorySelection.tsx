import React from 'react';
import { Category } from '../types';

interface CategorySelectionProps {
  categories: Category[];
  onSelect: (category: Category) => void;
}

export const CategorySelection: React.FC<CategorySelectionProps> = ({
  categories,
  onSelect,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Pick Your Vibe ✨
          </h2>
          <p className="text-white/90 text-lg">
            Choose the category that speaks to your chaotic soul
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelect(category)}
              className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${category.gradient} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300`}>
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:animate-bounce">
                    {category.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/90 text-lg mb-4">
                    {category.description}
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <p className="text-white/90 text-sm">
                      {category.id === 'engeyum-kadhal' && "For hopeless romantics who believe in fairytales 💕"}
                      {category.id === 'haslo-bhai' && "For those who find humor in the most desi situations 😂"}
                      {category.id === 'adrenaline-rush' && "For thrill-seekers who live for the moment ⚡"}
                      {category.id === 'plot-twist' && "For those who love unexpected turns in life 🎭"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-white/80 text-sm">
            Don't overthink it - your first instinct is probably right! 🎯
          </p>
        </div>
      </div>
    </div>
  );
};