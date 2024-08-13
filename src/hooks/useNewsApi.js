import { useState, useEffect } from 'react';

const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual NewsAPI key
const BASE_URL = 'https://newsapi.org/v2/everything';

export const useNewsApi = (query) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${BASE_URL}?q=${encodeURIComponent(query)}&language=en&sortBy=relevancy&pageSize=100&apiKey=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [query]);

  return { articles, isLoading, error };
};