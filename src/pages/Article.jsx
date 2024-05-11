import { useState, useEffect } from "react";
import ArticleButton from "../partials/Article/ArticleButton";
import ArticleCard from "../partials/Article/ArticleCard";
import APIArticle from "../services/article.service";
import useQuery from "../hooks/useQuery";

export default function Article() {
  const [page, setPage] = useState(1);
  const pageSize = 6;
  const sort = "desc";
  const [totalPages, setTotalPages] = useState(1);

  // Menggunakan useQuery untuk mendapatkan data artikel
  const { data, meta, refetch } = useQuery(() =>
    APIArticle.findArticles(sort, page, pageSize)
  );

  // Menggunakan useEffect untuk mengupdate total halaman
  useEffect(() => {
    if (meta) {
      setTotalPages(meta.pagination.pageCount);
    }
  }, [meta]);

  // Fungsi untuk mengubah halaman
  const handlePageChange = (newPage) => {
    setPage(newPage);
    refetch(); // Memanggil refetch untuk memperbarui data
  };

  return (
    <>
      {data && (
        <>
          <ArticleCard data={data} />
          <ArticleButton
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
}
