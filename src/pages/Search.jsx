import { useState, useEffect } from "react";
import APIArticle from "../services/article.service";
import useQuery from "../hooks/useQuery";
import SearchCard from "../partials/Search/SearchCard";
import { useSearchParams } from "react-router-dom";
import SearchButton from "../partials/Search/SearchButton";

export default function Search() {
  const [page, setPage] = useState(1);
  const pageSize = 6;
  const sort = "desc";
  const [totalPages, setTotalPages] = useState(1);

    // Menggunakan useSearchParams untuk mendapatkan query dari URL
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");

  // Menggunakan useQuery untuk mendapatkan data artikel
  const { data, meta, refetch } = useQuery(() =>
    APIArticle.findArticlesByTitle(sort, page, pageSize, query)
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
      <SearchCard data={data} />
      <SearchButton
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
