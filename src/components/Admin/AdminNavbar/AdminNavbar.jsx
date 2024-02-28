import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Button, Input } from '@material-tailwind/react'
import { toast } from 'sonner'
import { useEffect } from 'react'

import { clearError } from '../../../toolkit/Users/usersSlice'
import { getUsersByName } from '../../../toolkit/Users/usersHandler'

export default function AdminNavbar() {
  const dispatch = useDispatch()
  const { error } = useSelector((state) => state.users)
  const [name, setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSearch = () => {
    dispatch(getUsersByName(name))
    setName('')
  }

  useEffect(() => {
    if (error) {
      toast.message('Error', {
        description: 'No se encontraron resultados'
      })
      dispatch(clearError())
    }
  })

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch(e)
  }

  return (
    <div>
      <Navbar className="mx-auto max-w-screen-xl px-4 py-3 mt-2 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-gray-900">
          <div className="relative flex w-full gap-2">
            <Input
              containerProps={{
                className: 'min-w-[288px]'
              }}
              label="Busca un usuario..."
              name="search"
              type="search"
              value={name}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <Button ripple size="sm" onClick={handleSearch}>
              Buscar
            </Button>
          </div>
        </div>
      </Navbar>
    </div>
  )
}
