import axiosInstance from "../networks/axiosInstance";
import ApiError from "../utils/ApiError";

const APIArticle = {
  async findArticles(sort, page, pageSize) {
    try {
      const response = await axiosInstance.get(
        `/articles?sort=publishedAt:${sort}&pagination[withCount]=true&pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=thumbnail&populate=categories&populate=author.thumbnail`
      );
      return response.data;
    } catch (err) {
      const { status, statusText } = err.response;
      const { message } = err.response.data.error;
      const { stack } = err;
      throw new ApiError(status, statusText, message, true, stack);
    }
  },

  async findArticlesById(id) {
    try {
      const response = await axiosInstance.get(`/articles/${id}?populate=categories&populate=thumbnail&populate=author.thumbnail`);
      return response.data;
    } catch (err) {
      const { status, statusText } = err.response;
      const { message } = err.response.data.error;
      const { stack } = err;
      throw new ApiError(status, statusText, message, true, stack);
    }
  },

  async findArticlesByTitle(sort, page, pageSize, title) {
    try {
      const response = await axiosInstance.get(
        `/articles?sort=publishedAt:${sort}&pagination[withCount]=true&pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=thumbnail&populate=categories&populate=author.thumbnail&filters[title][$containsi]=${title}`
      );
      return response.data;
    } catch (err) {
      const { status, statusText } = err.response;
      const { message } = err.response.data.error;
      const { stack } = err;
      throw new ApiError(status, statusText, message, true, stack);
    }
  },

  async findArticlesByCategory(sort, page, pageSize, category) {
    try {
      const response = await axiosInstance.get(
        `/articles?sort=publishedAt:${sort}&pagination[withCount]=true&pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=thumbnail&populate=categories&populate=author.thumbnail&filters[categories][name][$containsi]=${category}`
      );
      return response.data;
    } catch (err) {
      const { status, statusText } = err.response;
      const { message } = err.response.data.error;
      const { stack } = err;
      throw new ApiError(status, statusText, message, true, stack);
    }
  }
};

export default APIArticle;
