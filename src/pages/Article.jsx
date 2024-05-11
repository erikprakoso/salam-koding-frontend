import { useState, useEffect } from "react";
import ArticleButton from "../partials/Article/ArticleButton";
import ArticleCard from "../partials/Article/ArticleCard";
import APIArticle from "../services/article.service";
import useQuery from "../hooks/useQuery";

export default function Article() {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const sort = "desc";
  const [totalPages, setTotalPages] = useState(1);

  const articles = useQuery(() =>
    APIArticle.findArticles(sort, page, pageSize)
  );
  const { data, meta } = articles;

  useEffect(() => {
    if (meta) {
      setTotalPages(meta.pagination.pageCount);
    }
  }, [meta]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <ArticleCard data={data} />
      <ArticleButton
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
