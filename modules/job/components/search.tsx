'use client'

import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { useState } from 'react'

import ListView from './listView'

export default function Search() {
  const pathname = usePathname()
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const [view, setView] = useState<'list' | 'gallery'>('gallery')

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
            className="w-96 grow"
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
            {/*  ⌘ */}
          </kbd>
          {/* <kbd className="kbd kbd-sm">K</kbd> */}
        </label>
        <div className="flex items-center gap-2">
          <ListView setView={setView} view={view} />
        </div>
      </div>
    </div>
  )
}
