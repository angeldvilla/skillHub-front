/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../toolkit/slice";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Paginate({ totalPages }) {
  const { currentPage } = useSelector((state) => state.work);
  const dispatch = useDispatch();

  const handlePageChange = (currentPage) => {
    if (currentPage >= 1 && currentPage <= totalPages) {
      dispatch(setCurrentPage(currentPage));
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const visiblePageCount = 5;
    const startPage = Math.max(
      1,
      currentPage - Math.floor(visiblePageCount / 2)
    );
    const endPage = Math.min(totalPages, startPage + visiblePageCount - 1);

    for (let page = startPage; page <= endPage; page++) {
      const isActive = currentPage === page ? "active" : "";
      pageNumbers.push(
        <IconButton
          key={page}
          variant={isActive ? "filled" : "text"}
          color={isActive ? "blue-gray" : "gray"}
          onClick={() => handlePageChange(page)}
          className={`${
            isActive
              ? "bg-black text-white transition-all duration-200"
              : "text-black hover:bg-gray-300 transition-all duration-200"
          }`}
        >
          {page}
        </IconButton>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center py-6 bg-gray-100 w-full">
      <Button
        variant="text"
        color="gray"
        disabled={currentPage === 1}
        className="flex items-center gap-2 text-black hover:bg-gray-300"
        onClick={() => handlePageChange(1)}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        First
      </Button>
      <Button
        variant="text"
        color="gray"
        disabled={currentPage === 1}
        className="flex items-center gap-2 text-black hover:bg-gray-300"
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </Button>
      {renderPageNumbers()}
      <Button
        variant="text"
        color="gray"
        disabled={totalPages === currentPage}
        className="flex items-center gap-2 text-black hover:bg-gray-300"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </Button>
      <Button
        variant="text"
        color="gray"
        disabled={totalPages === currentPage}
        className="flex items-center gap-2 text-black hover:bg-gray-300"
        onClick={() => handlePageChange(totalPages)}
      >
        Last
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
