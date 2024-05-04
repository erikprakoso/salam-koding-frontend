import axiosInstance from "../networks/axiosInstance";
import ApiError from "../utils/ApiError";

const APIArticle = {
  async findArticles() {
    try {
      const response = await axiosInstance.get("/articles/view/all");
      return response.data;
    } catch (err) {
      const { status, statusText } = err.response;
      const { message } = err.response.data.error;
      const { stack } = err;
      throw new ApiError(status, statusText, message, true, stack);
    }
  },

  async findArticlesPaginate(page, pageSize) {
    try {
      const response = await axiosInstance.get(
        `/articles/view/all/paginate?page=${page}&pageSize=${pageSize}`
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
