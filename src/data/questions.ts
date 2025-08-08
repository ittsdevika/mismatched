import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'engeyum-kadhal',
    name: 'Engeyum Kadhal',
    description: 'Romance & Love',
    emoji: '💕',
    gradient: 'from-pink-400 to-red-400',
    questions: [
      {
        id: 1,
        question: "Your ideal first date would be:",
        options: [
          "A cozy coffee shop with deep conversations",
          "Dancing under the stars",
          "Adventure hiking with scenic views",
          "Home-cooked dinner and Netflix"
        ],
        points: [3, 4, 2, 1]
      },
      {
        id: 2,
        question: "Love at first sight is:",
        options: [
          "Totally real and magical ✨",
          "A beautiful myth",
          "Possible but rare",
          "Just strong attraction"
        ],
        points: [4, 2, 3, 1]
      },
      {
        id: 3,
        question: "The most romantic gesture is:",
        options: [
          "Surprise weekend getaway",
          "Handwritten love letters",
          "Remembering small details",
          "Grand public declarations"
        ],
        points: [3, 4, 2, 1]
      }
    ]
  },
  {
    id: 'haslo-bhai',
    name: 'Haslo Bhai',
    description: 'Desi Humor',
    emoji: '😂',
    gradient: 'from-yellow-400 to-orange-400',
    questions: [
      {
        id: 1,
        question: "Your reaction when mom calls during a date:",
        options: [
          "Pick up immediately - 'Haan mummy!'",
          "Text back 'Call you later'",
          "Let it ring and call back",
          "Panic and make weird excuses"
        ],
        points: [4, 2, 1, 3]
      },
      {
        id: 2,
        question: "Best way to impress someone's parents:",
        options: [
          "Compliment their cooking skills",
          "Ask about their hometown",
          "Show interest in family photos",
          "Offer to help with dishes"
        ],
        points: [4, 3, 2, 1]
      },
      {
        id: 3,
        question: "Your go-to conversation starter:",
        options: [
          "Share a funny meme",
          "Ask about their favorite food",
          "Tell a dad joke",
          "Comment on the weather"
        ],
        points: [3, 4, 2, 1]
      }
    ]
  },
  {
    id: 'adrenaline-rush',
    name: 'Adrenaline Rush',
    description: 'Spontaneous & Dramatic',
    emoji: '⚡',
    gradient: 'from-purple-400 to-indigo-400',
    questions: [
      {
        id: 1,
        question: "Perfect weekend adventure:",
        options: [
          "Skydiving or bungee jumping",
          "Exploring a new city spontaneously",
          "Rock climbing or hiking",
          "Trying extreme sports"
        ],
        points: [4, 3, 2, 1]
      },
      {
        id: 2,
        question: "When plans get cancelled last minute:",
        options: [
          "Make completely new exciting plans",
          "Find something even better to do",
          "Go with the flow and improvise",
          "Use it as motivation for adventure"
        ],
        points: [4, 3, 2, 1]
      },
      {
        id: 3,
        question: "Your ideal vacation style:",
        options: [
          "Backpacking with no fixed itinerary",
          "Adventure sports and activities",
          "Exploring off-the-beaten-path places",
          "Mixing planned and spontaneous activities"
        ],
        points: [4, 3, 2, 1]
      }
    ]
  },
  {
    id: 'plot-twist',
    name: 'The Plot Twist',
    description: 'Unexpected Situations',
    emoji: '🎭',
    gradient: 'from-green-400 to-blue-400',
    questions: [
      {
        id: 1,
        question: "You find out your date is your friend's ex:",
        options: [
          "Talk to your friend first",
          "Be upfront about the situation",
          "See where things naturally go",
          "Create some distance initially"
        ],
        points: [4, 3, 2, 1]
      },
      {
        id: 2,
        question: "Your biggest fear in relationships:",
        options: [
          "Being too predictable",
          "Running out of things to talk about",
          "Not being exciting enough",
          "Getting too comfortable too fast"
        ],
        points: [3, 2, 4, 1]
      },
      {
        id: 3,
        question: "Best way to keep things interesting:",
        options: [
          "Plan surprise dates regularly",
          "Try new activities together",
          "Share random thoughts and ideas",
          "Create inside jokes and memories"
        ],
        points: [3, 2, 4, 1]
      }
    ]
  }
];

// Preset Instagram IDs for random matching
export const matchPool = [
  'wandering_soul_23',
  'coffee_and_dreams',
  'midnight_philosopher',
  'sunshine_vibes_only',
  'adventure_awaits_me',
  'bookish_romantic',
  'music_lover_95',
  'spontaneous_spirit',
  'chai_and_conversations',
  'dreamy_explorer',
  'creative_chaos_99',
  'stargazer_nights',
  'ocean_heart_beats',
  'mountain_seeker',
  'city_lights_lover',
  'vintage_soul_collector',
  'rainy_day_reader',
  'sunset_chaser_21',
  'playlist_curator',
  'weekend_warrior_x'
];