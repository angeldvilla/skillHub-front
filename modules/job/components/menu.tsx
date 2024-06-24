'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { capitalizeFirstLetter, slugify } from '@/lib/utils'

interface Props {
  categories: string[]
}

export default function Menu({ categories }: Props) {
  const pathname = usePathname()
  const { replace } = useRouter()
  const searchParams = useSearchParams()

  const handleChange = (category: string) => {
    const params = new URLSearchParams(searchParams)

    if (category && category !== 'Categories') params.set('category', category)
    else params.delete('category')

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <select
      className="select select-bordered w-40"
      defaultValue={searchParams.get('category')?.toString() ?? ''}
      onChange={(event) => handleChange(event.target.value)}
    >
      <option>Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {capitalizeFirstLetter(slugify(category))}
        </option>
      ))}
    </select>
  )
}
