import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Select, Option } from '@material-tailwind/react'

import {
  filterName,
  filterPrice,
  filterTypeWork,
  setCurrentPage,
  resetFilters
} from '../../toolkit/slice'
import SearchBar from '../SearchBar/SearchBar'
import { getTypes } from '../../toolkit/ActionsworkPublications'

export default function Filters() {
  const dispatch = useDispatch()
  const [selectKey, setSelectKey] = useState(0)

  const categories = useSelector((state) => state.formwork.allWorkTypes)

  useEffect(() => {
    dispatch(getTypes())
  }, [dispatch])

  const handleOrdertitle = (value) => {
    dispatch(filterName(value))
    dispatch(setCurrentPage(1))
  }

  const handleFilterPrice = (value) => {
    dispatch(filterPrice(value))
    dispatch(setCurrentPage(1))
  }

  const handleFilterTypeWork = (value) => {
    dispatch(filterTypeWork(value))
    dispatch(setCurrentPage(1))
  }

  const handleReset = () => {
    setSelectKey((prevKey) => prevKey + 1)
    dispatch(resetFilters())
    dispatch(setCurrentPage(1))
  }

  return (
    <div className="flex justify-between items-center w-full py-5 px-10 border-b-2 bg-gray-900">
      <div className="flex items-center gap-4 px-8">
        <div className="w-60">
          <Select
            key={selectKey}
            label="Ordenar"
            labelProps={{
              className: 'text-gray-200'
            }}
            onChange={handleOrdertitle}
          >
            <Option
              className="text-gray-800 hover:bg-gray-300 transition duration-150"
              value="A-Z"
            >
              Ascendente
            </Option>
            <Option
              className="text-gray-800 hover:bg-gray-300 transition duration-150"
              value="Z-A"
            >
              Descendente
            </Option>
          </Select>
        </div>
        <div className="w-60">
          <Select
            key={selectKey}
            label="Precio"
            labelProps={{
              className: 'text-gray-200'
            }}
            onChange={handleFilterPrice}
          >
            <Option className="text-gray-800 hover:bg-gray-300 transition duration-150">
              Todos
            </Option>
            <Option
              className="text-gray-800 hover:bg-gray-300 transition duration-150"
              value="menos de 200$"
            >
              Menor 200
            </Option>
            <Option
              className="text-gray-800 hover:bg-gray-300 transition duration-150"
              value="200$-400$"
            >
              200-400
            </Option>
            <Option
              className="text-gray-800 hover:bg-gray-300 transition duration-150"
              value="400$-600$"
            >
              400-600
            </Option>
            <Option
              className="text-gray-800 hover:bg-gray-300 transition duration-150"
              value="600$-mas"
            >
              Mayor a 600
            </Option>
          </Select>
        </div>
        <div className="w-60">
          <Select
            key={selectKey}
            label="Categoría"
            labelProps={{
              className: 'text-gray-200'
            }}
            onChange={handleFilterTypeWork}
          >
            {categories.map((element, index) => (
              <Option
                key={index}
                className="text-gray-800 hover:bg-gray-300 transition duration-150"
                value={element.category}
              >
                {element.category}
              </Option>
            ))}
          </Select>
        </div>
        <Button
          className="text-white bg-blue-600 hover:bg-blue-500 transition duration-150 ml-10"
          color="gray"
          onClick={handleReset}
        >
          Limpiar filtros
        </Button>
      </div>
      <div className="flex">
        <SearchBar />
      </div>
    </div>
  )
}
