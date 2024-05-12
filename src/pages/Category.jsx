import { useState, useEffect } from "react";
import APIArticle from "../services/article.service";
import useQuery from "../hooks/useQuery";
import CategoryCard from "../partials/Category/CategoryCard";
import { useSearchParams } from "react-router-dom";
import CategoryButton from "../partials/Category/CategoryButton";

export default function Category() {
  const [page, setPage] = useState(1);
  const pageSize = 6;
  const sort = "desc";
  const [totalPages, setTotalPages] = useState(1);

    // Menggunakan useSearchParams untuk mendapatkan query dari URL
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");

  // Menggunakan useQuery untuk mendapatkan data artikel
  const { data, meta, refetch } = useQuery(() =>
    APIArticle.findArticlesByCategory(sort, page, pageSize, category)
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
      <CategoryCard data={data} />
      {/* Menampilkan CategoryButton */}
      {totalPages > 1 && (
      <CategoryButton
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      )}
    </>
  );
}
