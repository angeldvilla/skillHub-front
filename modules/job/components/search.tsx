'use client'

import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

import ChangeView from './changeView'

interface SearchProps {
  setView: (view: 'list' | 'gallery') => void
  view: 'list' | 'gallery'
}

export default function Search({ setView, view }: SearchProps) {
  const pathname = usePathname()
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) params.set('title', term)
    else params.delete('title')

    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className="flex flex-col gap-4">
      <h1 className="m-2 text-center text-3xl">Explore Jobs</h1>
      <div className="flex items-center justify-around">
        <label className="input input-md input-bordered my-4 flex max-w-xs items-center gap-2">
          <input
            className="w-full grow md:w-96"
            defaultValue={searchParams.get('title')?.toString()}
            placeholder="Search jobs"
            type="text"
            onChange={(event) => handleSearch(event.target.value)}
          />
          <kbd className="kbd kbd-md">
            <Image
              alt="search"
              height={18}
              src="https://img.icons8.com/?size=256w&id=41615&format=png"
              width={18}
            />
          </kbd>
        </label>
        <div className="flex w-full flex-col items-center gap-2 p-2 md:w-auto md:flex-row md:gap-20">
          <ChangeView setView={setView} view={view} />
        </div>
      </div>
    </div>
  )
}
