export interface User {
  id?: string;
  instagram_id: string;
  chosen_category: string;
  score: number;
  timestamp: string;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  points: number[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  emoji: string;
  gradient: string;
  questions: Question[];
}