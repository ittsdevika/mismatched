import React, { useState } from 'react';
import { Instagram } from 'lucide-react';

interface InstagramInputProps {
  onNext: (instagramId: string) => void;
}

export const InstagramInput: React.FC<InstagramInputProps> = ({ onNext }) => {
  const [instagramId, setInstagramId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!instagramId.trim()) {
      setError('Please enter your Instagram ID');
      return;
    }
    if (instagramId.includes('@') || instagramId.includes(' ')) {
      setError('Just the username, no @ or spaces needed!');
      return;
    }
    onNext(instagramId.trim());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Mismatched
          </h1>
          <p className="text-white/90 text-lg">
            Where perfect matches come from imperfect algorithms! 🎲
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mb-4">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Let's Get Started!
            </h2>
            <p className="text-gray-600">
              Drop your Instagram ID and let's find your wonderfully weird match
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="your_instagram_id"
                value={instagramId}
                onChange={(e) => {
                  setInstagramId(e.target.value);
                  setError('');
                }}
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-pink-400 focus:outline-none transition-colors text-lg"
              />
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Start My Mismatched Journey! 🚀
            </button>
          </form>
        </div>

        <div className="text-center mt-6">
          <p className="text-white/80 text-sm">
            Ready to embrace the chaos of connection?
          </p>
        </div>
      </div>
    </div>
  );
};