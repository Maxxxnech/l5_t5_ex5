import React from "react";
import Article from "./Article";

import "./css/ArticleList.css"

export default function ArticleList({ articles }) {
  const articleElements = articles.map((article, index) => (
    <li key={article.id} className="articleListItem">
      <Article article={article} defaultOpen={index === 0} />
    </li>
  ));
  return <ul>{articleElements}</ul>;
}
