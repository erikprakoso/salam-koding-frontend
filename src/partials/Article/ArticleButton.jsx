import PropTypes from "prop-types";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function ArticleButton({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  const handlePrevPage = () => {
    if (!isPrevDisabled) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (!isNextDisabled) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center py-2 px-4 sm:px-6">
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            onClick={handlePrevPage}
            className={`flex items-center bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 cursor-pointer mx-1 ${
              isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isPrevDisabled}
          >
            <IoIosArrowBack className="mr-1" /> Sebelumnya
          </button>
          <button
            onClick={handleNextPage}
            className={`flex items-center bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 cursor-pointer ${
              isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isNextDisabled}
          >
            Selanjutnya <IoIosArrowForward className="ml-1" />
          </button>
        </nav>
      </div>
    </div>
  );
}

ArticleButton.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
