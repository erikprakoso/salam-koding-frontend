// ArticleButton.js
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import PropTypes from "prop-types";

export default function ArticleButton({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const handlePrevPage = () => {
    console.log("Current page:", currentPage);
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    console.log("Current page:", currentPage);
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center py-2 border-t border-gray-200 px-4 sm:px-6">
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            onClick={handlePrevPage}
            className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 bg-white`}
          >
            <span className="sr-only">Previous</span>
            <FaAngleLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            onClick={handleNextPage}
            className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 bg-white`}
          >
            <span className="sr-only">Next</span>
            <FaAngleRight className="h-5 w-5" aria-hidden="true" />
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
