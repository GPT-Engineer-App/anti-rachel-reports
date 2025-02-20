import { useQuery } from '@tanstack/react-query';

const BBC_API_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = import.meta.env.VITE_NEWS_API_KEY; // Use environment variable

const fetchBBCNews = async () => {
  const response = await fetch(`${BBC_API_URL}?sources=bbc-news&apiKey=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  return response.json();
};

export const useBBCNewsApi = () => {
  return useQuery({
    queryKey: ['bbcNews'],
    queryFn: fetchBBCNews,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};