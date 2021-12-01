import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

import React from "react";

export default function ArticleList({ articles }) {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article, index) => (
        <ArticleItem article={article} key={index} />
      ))}
    </div>
  );
}
