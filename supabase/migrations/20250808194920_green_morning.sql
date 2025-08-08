/*
  # Fix RLS policy for anonymous users

  1. Policy Updates
    - Drop existing restrictive policies
    - Create new policy allowing anonymous users to insert quiz results
    - Allow anonymous users to read data for matching purposes

  2. Security
    - Enable RLS on mismatched_users table
    - Allow INSERT operations for anonymous (anon) role
    - Allow SELECT operations for anonymous (anon) role for matching functionality
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can insert quiz results" ON mismatched_users;
DROP POLICY IF EXISTS "Authenticated users can read quiz data" ON mismatched_users;

-- Ensure RLS is enabled
ALTER TABLE mismatched_users ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous users to insert quiz results
CREATE POLICY "Allow anonymous insert quiz results"
  ON mismatched_users
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow anonymous users to read data for matching
CREATE POLICY "Allow anonymous read for matching"
  ON mismatched_users
  FOR SELECT
  TO anon
  USING (true);

-- Also allow authenticated users full access
CREATE POLICY "Allow authenticated users full access"
  ON mismatched_users
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);