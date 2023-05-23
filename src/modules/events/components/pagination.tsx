import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalData, totalPage, onPageChange }) => {
  const renderPageButtons = () => {
    const buttons = [];
    const totalPages = Math.ceil(totalData / totalPage);

    // hanya menampilkan tombol halaman yang diperlukan
    for (let i = 1; i < totalPages; i++) {
      if (i === currentPage) {
        buttons.push(
          <button key={i} className="bg-[#5885E9] text-white font-bold py-2 px-4 rounded-full mr-2">
            {i}
          </button>
        );
      } else {
        buttons.push(
          <button
            key={i}
            className="text-[#5885E9] font-bold py-2 px-4 rounded mr-2 hover:bg-gray-400"
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }
    }

    return buttons;
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        className={`${
          currentPage === 1 ? ' text-gray-300 cursor-not-allowed' : ' text-gray-700 hover:bg-gray-400'
        } font-bold py-2 px-4 rounded-l mr-2`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {'<'}
      </button>
      {renderPageButtons()}
      <button
        className={`${
          currentPage === totalPage ? ' text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-400'
        } font-bold py-2 px-4 rounded-r ml-2`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
