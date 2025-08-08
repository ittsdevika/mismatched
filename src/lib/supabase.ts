import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Insert user data
export const insertUserData = async (userData: {
  instagram_id: string;
  chosen_category: string;
  score: number;
}) => {
  const { data, error } = await supabase
    .from('mismatched_users')
    .insert([{
      insta_id: userData.instagram_id,
      category: userData.chosen_category,
      score: userData.score
    }])
    .select();

  if (error) {
    console.error('Error inserting user data:', error);
    throw error;
  }

  return data;
}

// Get a random match from existing users (excluding current user)
export const getRandomMatch = async (currentUserInstagram: string, preferredCategory?: string) => {
  let query = supabase
    .from('mismatched_users')
    .select('insta_id, category, score')
    .neq('insta_id', currentUserInstagram); // Exclude current user

  // Optionally filter by category for better matches
  if (preferredCategory) {
    query = query.eq('category', preferredCategory);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching matches:', error);
    throw error;
  }

  // If no matches found in preferred category, try any category
  if (!data || data.length === 0) {
    const { data: fallbackData, error: fallbackError } = await supabase
      .from('mismatched_users')
      .select('insta_id, category, score')
      .neq('insta_id', currentUserInstagram);

    if (fallbackError) {
      console.error('Error fetching fallback matches:', fallbackError);
      throw fallbackError;
    }

    if (!fallbackData || fallbackData.length === 0) {
      // If still no matches, return null to indicate no matches available
      return null;
    }

    // Return random match from all users
    const randomIndex = Math.floor(Math.random() * fallbackData.length);
    return fallbackData[randomIndex];
  }

  // Return random match from preferred category
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
};

// Get total number of users for display purposes
export const getTotalUsers = async () => {
  const { count, error } = await supabase
    .from('mismatched_users')
    .select('*', { count: 'exact', head: true });

  if (error) {
    console.error('Error getting user count:', error);
    return 0;
  }

  return count || 0;
};