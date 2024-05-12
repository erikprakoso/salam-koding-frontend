import axiosInstance from "../networks/axiosInstance";
import ApiError from "../utils/ApiError";

const APICategory = {
  async findCategories() {
    try {
      const response = await axiosInstance.get(`/categories?populate=thumbnail`);
      return response.data;
    } catch (err) {
      const { status, statusText } = err.response;
      const { message } = err.response.data.error;
      const { stack } = err;
      throw new ApiError(status, statusText, message, true, stack);
    }
  }
};

export default APICategory;