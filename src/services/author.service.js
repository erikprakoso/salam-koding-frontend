import axiosInstance from "../networks/axiosInstance";
import ApiError from "../utils/ApiError";

const APIAuthor = {
  async findAuthorById(id) {
    try {
      const response = await axiosInstance.get(`/authors/${id}?populate=thumbnail`);
      return response.data;
    } catch (err) {
      const { status, statusText } = err.response;
      const { message } = err.response.data.error;
      const { stack } = err;
      throw new ApiError(status, statusText, message, true, stack);
    }
  }
};

export default APIAuthor;