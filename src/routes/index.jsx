import { useEffect } from "react";
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Article from "../pages/Article";
import ArticleDetail from "../pages/ArticleDetail";
import PageNotFound from "../pages/PageNotFound";
import Search from "../pages/Search";
import Author from "../pages/Author";

export default function SetupRoutes() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title =
          "SalamKoding.com - Website Belajar Coding Bahasa Indonesia Terstruktur.";
        break;
      case "/article":
        document.title = "Artikel - SalamKoding.com";
        break;
      case "/search":
        document.title = "Pencarian - SalamKoding.com";
        break;
      default:
        if (location.pathname.startsWith("/article/")) {
          document.title = "Detail Artikel - SalamKoding.com";
        } else if (location.pathname.startsWith("/author/")) {
          document.title = "Penulis - SalamKoding.com";
        } else {
          document.title = "Halaman Tidak Ditemukan - SalamKoding.com";
        }
        break;
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="article" element={<Article />} />
        <Route path="article/:id" element={<ArticleDetail />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="author/:id" element={<Author />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

function SearchPage() {
  const { query } = useParams();

  // You can now use the `query` parameter in your component
  return <Search query={query} />;
}
