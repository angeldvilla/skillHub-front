/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux'
import { Button, IconButton } from '@material-tailwind/react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

import { setCurrentPage } from '../../toolkit/slice'

export default function Paginate({ totalPages }) {
  const { currentPage } = useSelector((state) => state.work)
  const dispatch = useDispatch()

  const handlePageChange = (currentPage) => {
    if (currentPage >= 1 && currentPage <= totalPages) {
      dispatch(setCurrentPage(currentPage))
    }
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    const visiblePageCount = 5
    const startPage = Math.max(
      1,
      currentPage - Math.floor(visiblePageCount / 2)
    )
    const endPage = Math.min(totalPages, startPage + visiblePageCount - 1)

    for (let page = startPage; page <= endPage; page++) {
      const isActive = currentPage === page ? 'active' : ''

      pageNumbers.push(
        <IconButton
          key={page}
          className={`${
            isActive
              ? 'bg-black text-white transition-all duration-200'
              : 'text-black hover:bg-gray-300 transition-all duration-200'
          }`}
          color={isActive ? 'blue-gray' : 'gray'}
          variant={isActive ? 'filled' : 'text'}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </IconButton>
      )
    }

    return pageNumbers
  }

  return (
    <div className="flex justify-center py-6 bg-gray-100 w-full">
      <Button
        className="flex items-center gap-2 text-black hover:bg-gray-300"
        color="gray"
        disabled={currentPage === 1}
        variant="text"
        onClick={() => handlePageChange(1)}
      >
        <ArrowLeftIcon className="h-4 w-4" strokeWidth={2} />
        First
      </Button>
      <Button
        className="flex items-center gap-2 text-black hover:bg-gray-300"
        color="gray"
        disabled={currentPage === 1}
        variant="text"
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </Button>
      {renderPageNumbers()}
      <Button
        className="flex items-center gap-2 text-black hover:bg-gray-300"
        color="gray"
        disabled={totalPages === currentPage}
        variant="text"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </Button>
      <Button
        className="flex items-center gap-2 text-black hover:bg-gray-300"
        color="gray"
        disabled={totalPages === currentPage}
        variant="text"
        onClick={() => handlePageChange(totalPages)}
      >
        Last
        <ArrowRightIcon className="h-4 w-4" strokeWidth={2} />
      </Button>
    </div>
  )
}
