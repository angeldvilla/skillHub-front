'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { capitalizeFirstLetter, slugify } from '@/lib/utils'

interface Props {
  filters: string[]
  label: string
}

export default function Filter({ filters, label }: Props) {
  const pathname = usePathname()
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const normalizedLabel = label.toLowerCase()

  const handleChange = (filter: string) => {
    const params = new URLSearchParams(searchParams)

    if (filter !== label) params.set(normalizedLabel, filter)
    else params.delete(normalizedLabel)

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <select
      className="select select-bordered w-52"
      defaultValue={searchParams.get(normalizedLabel)?.toString() ?? ''}
      onChange={(event) => handleChange(event.target.value)}
    >
      <option value={label}>{label}</option>
      {filters.map((filter) => (
        <option key={filter} value={filter}>
          {capitalizeFirstLetter(slugify(filter))}
        </option>
      ))}
    </select>
  )
}
