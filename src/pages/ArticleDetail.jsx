import ArticleDetailCard from "../partials/ArticleDetail/ArticleDetailCard";
import { useParams } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import APIArticle from "../services/article.service";

export default function ArticleDetail() {
    // Menggunakan useParams untuk mendapatkan id artikel
    const { id } = useParams();

    // Menggunakan useQuery untuk mendapatkan data artikel berdasarkan id
    const article = useQuery(() => APIArticle.findArticleById(id));
  
    // Destructuring data dari useQuery
    const { data } = article;
  return (
    <>
      <ArticleDetailCard data={data} />
    </>
  );
}
