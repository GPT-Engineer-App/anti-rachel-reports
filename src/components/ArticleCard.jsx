import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink } from 'lucide-react';

const ArticleCard = ({ article }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">{article.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-500 mb-2">{article.description}</p>
        <p className="text-xs text-gray-400 flex items-center">
          <Calendar className="w-3 h-3 mr-1" />
          {new Date(article.publishedAt).toLocaleDateString()}
        </p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(article.url, '_blank')}
          className="flex items-center"
        >
          Read more <ExternalLink className="w-3 h-3 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;