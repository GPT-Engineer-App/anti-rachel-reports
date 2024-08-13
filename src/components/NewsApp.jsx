import React, { useState } from 'react';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import { useBBCNewsApi } from '../hooks/useBBCNewsApi';

const NewsApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, error } = useBBCNewsApi();

  const filteredArticles = data?.articles?.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Latest BBC News</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {isLoading ? (
        <div className="mt-8">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="animate-pulse bg-gray-200 h-24 mb-4 rounded"></div>
          ))}
        </div>
      ) : error ? (
        <p className="text-red-500 text-center mt-8">Error loading articles: {error.message}</p>
      ) : (
        <ArticleList articles={filteredArticles} />
      )}
    </div>
  );
};

export default NewsApp;