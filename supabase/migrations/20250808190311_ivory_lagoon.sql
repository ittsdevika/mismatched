/*
  # Create mismatched_users table for quiz data

  1. New Tables
    - `mismatched_users`
      - `id` (uuid, primary key)
      - `instagram_id` (text, not null) - User's Instagram ID
      - `chosen_category` (text, not null) - Category they selected for the quiz
      - `score` (integer, not null) - Their quiz score
      - `timestamp` (timestamptz, default now()) - When they took the quiz

  2. Security
    - Enable RLS on `mismatched_users` table
    - Add policy for public insert access (for quiz submissions)
    - Add policy for authenticated read access (for potential admin features)
*/

CREATE TABLE IF NOT EXISTS mismatched_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  instagram_id text NOT NULL,
  chosen_category text NOT NULL,
  score integer NOT NULL DEFAULT 0,
  timestamp timestamptz DEFAULT now()
);

ALTER TABLE mismatched_users ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert their quiz results
CREATE POLICY "Anyone can insert quiz results"
  ON mismatched_users
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read data (for potential admin features)
CREATE POLICY "Authenticated users can read quiz data"
  ON mismatched_users
  FOR SELECT
  TO authenticated
  USING (true);