import { useEffect } from "react";
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Article from "../pages/Article";
import ArticleDetail from "../pages/ArticleDetail";
import PageNotFound from "../pages/PageNotFound";
import Search from "../pages/Search";

export default function SetupRoutes() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Salam Koding";
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
