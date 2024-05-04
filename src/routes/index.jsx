import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";

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
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}