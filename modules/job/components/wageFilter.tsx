'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function WageFilter() {
  const pathname = usePathname()
  const { replace } = useRouter()
  const searchParams = useSearchParams()

  const handleOperatorChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const params = new URLSearchParams(searchParams)
    const value = event.target.value

    if (value) params.set('wageOperator', value)
    else params.delete('wageOperator')

    replace(`${pathname}?${params.toString()}`)
  }

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)
    const value = event.target.value

    if (value) params.set('wageValue', value)
    else params.delete('wageValue')

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex flex-col items-center gap-10">
      <select
        className="select select-bordered w-52"
        id="wageOperator"
        onChange={handleOperatorChange}
      >
        <option value="">Wage Operator</option>
        <option value="gt">Greater than</option>
        <option value="lt">Less than</option>
        <option value="gte">Greater than or equal</option>
        <option value="lte">Less than or equal</option>
        <option value="eq">Equal</option>
      </select>

      <input
        className="input input-bordered w-52"
        defaultValue={searchParams.get('wageValue') ?? ''}
        id="wageValue"
        placeholder="Wage Value"
        type="number"
        onChange={handleValueChange}
      />
    </div>
  )
}
