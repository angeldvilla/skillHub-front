import { slugify } from '@/lib/utils'

interface Props {
  label: string
  placeholder: string
  type: 'text' | 'email' | 'password'
}

export function FormControl({ label, placeholder, type }: Props) {
  const normalizedLabel = slugify(label)

  return (
    <div className="form-control">
      <label className="label" htmlFor={normalizedLabel}>
        <span className="label-text">{label}</span>
      </label>
      <input
        required
        className="input input-bordered placeholder-gray-500"
        name={normalizedLabel}
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}
