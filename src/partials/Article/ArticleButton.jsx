// ArticleButton.js
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import PropTypes from "prop-types";
import { 
  IoIosArrowForward,
  IoIosArrowBack, 
} from "react-icons/io";

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
    <div className="bg-gray-100 flex justify-center py-2 px-4 sm:px-6">
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            onClick={handlePrevPage}
            className="flex items-center bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 cursor-pointer mx-1"
          >
            <IoIosArrowBack className="mr-1" /> Sebelumnya
          </button>
          <button
            onClick={handleNextPage}
            className="flex items-center bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 cursor-pointer"
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
