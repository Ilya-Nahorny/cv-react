import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPages = () => {
    let pages = [];

    if (currentPage > 3) {
      pages.push(
        <li key={1}>
          <button
            onClick={() => handleClick(1)}
            className={`flex h-10 min-w-10 items-center justify-center rounded-lg border px-2 text-base font-medium ${
              currentPage === 1
                ? " text-white dark:border-darkBorder dark:text-darkTextMain dark:bg-darkBgChild"
                : "text-dark hover:bg-gray-2 dark:border-darkBorder dark:text-darkTextMain"
            }`}
          >
            1
          </button>
        </li>
      );

      if (currentPage > 4) {
        pages.push(
          <li
            key="start-ellipsis"
            className="flex h-10 min-w-10 items-center justify-center"
          >
            <span className="text-dark dark:text-darkTextMain">...</span>
          </li>
        );
      }
    }

    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(currentPage + 2, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li key={i}>
          <button
            onClick={() => handleClick(i)}
            className={`flex h-10 min-w-10 items-center justify-center rounded-lg border px-2 text-base font-medium ${
              currentPage === i
                ? "bg-lightBg text-white dark:border-darkBorder dark:text-darkTextMain dark:bg-darkBgChild"
                : "text-dark hover:bg-gray-2 dark:border-darkBorder dark:text-darkTextMain"
            }`}
          >
            {i}
          </button>
        </li>
      );
    }

    if (currentPage < totalPages - 2) {
      if (currentPage < totalPages - 3) {
        pages.push(
          <li
            key="end-ellipsis"
            className="flex h-10 min-w-10 items-center justify-center"
          >
            <span className="text-dark dark:text-darkTextMain">...</span>
          </li>
        );
      }

      pages.push(
        <li key={totalPages}>
          <button
            onClick={() => handleClick(totalPages)}
            className={`flex h-10 min-w-10 items-center justify-center rounded-lg border px-2 text-base font-medium ${
              currentPage === totalPages
                ? "bg-lightBg text-white dark:border-darkBorder dark:text-darkTextMain dark:bg-darkBgChild"
                : "text-dark hover:bg-gray-2 dark:border-darkBorder dark:text-darkTextMain"
            }`}
          >
            {totalPages}
          </button>
        </li>
      );
    }

    return pages;
  };

  return (
    <div className="bg-transparent py-5 text-center">
      <ul className="inline-flex items-center justify-center gap-1 rounded-xl border border-stroke bg-white p-2 dark:bg-darkBgMain dark:border-darkBorder">
        <li>
          <button
            onClick={() => handleClick(currentPage - 1)}
            className={`flex h-10 min-w-10 items-center justify-center rounded-lg border px-2 text-base font-medium ${
              currentPage === 1
                ? "bg-gray-200 cursor-not-allowed dark:bg-darkBgChild dark:text-darkTextMain dark:border-darkBorder"
                : "text-black hover:bg-gray-2 dark:bg-darkBgChild dark:text-darkTextMain dark:border-darkBorder"
            }`}
            disabled={currentPage === 1}
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 9.8125H4.15625L9.46875 4.40625C9.75 4.125 9.75 3.6875 9.46875 3.40625C9.1875 3.125 8.75 3.125 8.46875 3.40625L2 9.96875C1.71875 10.25 1.71875 10.6875 2 10.9688L8.46875 17.5312C8.59375 17.6562 8.78125 17.75 8.96875 17.75C9.15625 17.75 9.3125 17.6875 9.46875 17.5625C9.75 17.2812 9.75 16.8438 9.46875 16.5625L4.1875 11.2188H17.5C17.875 11.2188 18.1875 10.9062 18.1875 10.5312C18.1875 10.125 17.875 9.8125 17.5 9.8125Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </li>
        {renderPages()}
        <li>
          <button
            onClick={() => handleClick(currentPage + 1)}
            className={`flex h-10 min-w-10 items-center justify-center rounded-lg border px-2 text-base font-medium ${
              currentPage === totalPages
                ? "bg-gray-200 cursor-not-allowed dark:bg-darkBgChild dark:text-darkTextMain dark:border-darkBorder"
                : "text-dark hover:bg-gray-2 dark:bg-darkBgChild dark:text-darkTextMain dark:border-darkBorder"
            }`}
            disabled={currentPage === totalPages}
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 10L11.5312 3.4375C11.25 3.15625 10.8125 3.15625 10.5312 3.4375C10.25 3.71875 10.25 4.15625 10.5312 4.4375L15.7812 9.78125H2.5C2.125 9.78125 1.8125 10.0937 1.8125 10.4688C1.8125 10.8438 2.125 11.1875 2.5 11.1875H15.8437L10.5312 16.5938C10.25 16.875 10.25 17.3125 10.5312 17.5938C10.6562 17.7188 10.8437 17.7812 11.0312 17.7812C11.2187 17.7812 11.4062 17.7188 11.5312 17.5625L18 11C18.2812 10.7187 18.2812 10.2812 18 10Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
