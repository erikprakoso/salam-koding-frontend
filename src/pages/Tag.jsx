import { useState, useEffect } from "react";
import APIArticle from "../services/article.service";
import useQuery from "../hooks/useQuery";
import TagCard from "../partials/Tag/TagCard";
import { useSearchParams } from "react-router-dom";
import TagButton from "../partials/Tag/TagButton";

export default function Search() {
  const [page, setPage] = useState(1);
  const pageSize = 6;
  const sort = "desc";
  const [totalPages, setTotalPages] = useState(1);

    // Menggunakan useSearchParams untuk mendapatkan query dari URL
    const [searchParams] = useSearchParams();
    const tag = searchParams.get("tag");

  // Menggunakan useQuery untuk mendapatkan data artikel
  const { data, meta, refetch } = useQuery(() =>
    APIArticle.findArticlesByTag(sort, page, pageSize, tag)
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
      <TagCard data={data} />
      {/* Menampilkan TagButton */}
      {totalPages > 1 && (
      <TagButton
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      )}
    </>
  );
}
