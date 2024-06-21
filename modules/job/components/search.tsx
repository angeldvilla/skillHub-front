'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function Search() {
  const pathname = usePathname()
  const { replace } = useRouter()
  const searchParams = useSearchParams()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) params.set('title', term)
    else params.delete('title')

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <label className="input input-md input-bordered mx-auto my-4 flex max-w-xs items-center gap-2">
      <input
        className="grow"
        defaultValue={searchParams.get('title')?.toString()}
        placeholder="Search jobs"
        type="text"
        onChange={(event) => handleSearch(event.target.value)}
      />
      <kbd className="kbd kbd-sm">⌘</kbd>
      <kbd className="kbd kbd-sm">K</kbd>
    </label>
  )
}
