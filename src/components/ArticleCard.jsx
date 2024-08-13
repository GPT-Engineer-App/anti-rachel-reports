import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

const ArticleCard = ({ article }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">{article.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-500">{article.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex space-x-2">
          <span className="flex items-center text-sm text-gray-500">
            <ThumbsUp className="w-4 h-4 mr-1" /> {Math.floor(Math.random() * 1000)}
          </span>
          <span className="flex items-center text-sm text-gray-500">
            <MessageSquare className="w-4 h-4 mr-1" /> {Math.floor(Math.random() * 100)}
          </span>
          <span className="flex items-center text-sm text-gray-500">
            <Share2 className="w-4 h-4 mr-1" /> {Math.floor(Math.random() * 50)}
          </span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(article.url, '_blank')}
        >
          Read more
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;