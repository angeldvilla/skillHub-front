import { capitalizeFirstLetter, slugify } from '@/lib/utils'

interface Props {
  categories: string[]
}

export default async function Menu({ categories }: Props) {
  return (
    <select className="select select-bordered w-40">
      <option disabled defaultValue="All">
        Categories
      </option>
      <option>All</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {capitalizeFirstLetter(slugify(category))}
        </option>
      ))}
    </select>
  )
}
