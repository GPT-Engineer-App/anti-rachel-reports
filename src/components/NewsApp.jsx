import React, { useState } from 'react';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import { useNewsApi } from '../hooks/useNewsApi';

const NewsApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { articles, isLoading, error } = useNewsApi('Anti Rachel Reeves');

  const filteredArticles = articles?.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Top 100 "Anti Rachel Reeves" Articles</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {isLoading ? (
        <div className="mt-8">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="animate-pulse bg-gray-200 h-24 mb-4 rounded"></div>
          ))}
        </div>
      ) : error ? (
        <p className="text-red-500 text-center mt-8">Error loading articles: {error}</p>
      ) : (
        <ArticleList articles={filteredArticles} />
      )}
    </div>
  );
};

export default NewsApp;