import React, { useEffect, useState } from "react";

interface Article {
  id: number;
  documentId: string;
  title: string;
  content: string;
  author: string;
  views: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ArticleResponse {
  data: Article[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const App: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setArticles(data.data));
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p>
              <strong>Author:</strong> {article.author}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
