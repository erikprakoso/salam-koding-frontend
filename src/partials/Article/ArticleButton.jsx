import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import PropTypes from "prop-types";

export default function ArticleButton({ currentPage, totalPages, onPageChange }) {
  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5; // Jumlah maksimal halaman yang ditampilkan sekaligus
    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);
    let startPage = currentPage - halfMaxVisiblePages;
    let endPage = currentPage + halfMaxVisiblePages;

    if (startPage <= 0) {
      startPage = 1;
      endPage = Math.min(totalPages, maxVisiblePages);
    }
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, totalPages - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pages.push(
        <span key={1} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 bg-white">
          1
        </span>
      );
      if (startPage > 2) {
        pages.push(
          <span key={'ellipsis-start'} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 bg-white">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <a
          key={i}
          href="#"
          onClick={() => onPageChange(i)}
          className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
            i === currentPage ? 'bg-gray-600 text-gray-400' : 'text-gray-900'
          } hover:bg-gray-50 focus:z-20 focus:outline-offset-0 bg-white`}
        >
          {i}
        </a>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key={'ellipsis-end'} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 bg-white">
            ...
          </span>
        );
      }
      pages.push(
        <span key={totalPages} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 bg-white">
          {totalPages}
        </span>
      );
    }

    return pages;
  };

  return (
    <div className="bg-gray-100 flex justify-center py-2 border-t border-gray-200 px-4 sm:px-6">
      <div>
        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <a
            href="#"
            onClick={handlePrevPage}
            className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 bg-white ${currentPage === 1 && 'pointer-events-none'}`}
          >
            <span className="sr-only">Previous</span>
            <FaAngleLeft className="h-5 w-5" aria-hidden="true" />
          </a>
          {renderPageNumbers()}
          <a
            href="#"
            onClick={handleNextPage}
            className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 bg-white ${currentPage === totalPages && 'pointer-events-none'}`}
          >
            <span className="sr-only">Next</span>
            <FaAngleRight className="h-5 w-5" aria-hidden="true" />
          </a>
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