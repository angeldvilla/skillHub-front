'use client'

import { useActionState, useState } from 'react'

import { capitalizeFirstLetter, slugify } from '@/lib/utils'
import { FormControl } from '@/modules/auth/components/form-control'
import { SubmitFormButton } from '@/modules/auth/components/submit-form-button'
import { createJob } from '@/modules/job/actions/actions'

interface Props {
  categories: string[]
}

const initialState = {
  id: 0,
  category: '',
  description: '',
  image: '',
  location: '',
  title: '',
  wage: 0
  // TODO: Add userId
}

export default function NewJobForm({ categories }: Props) {
  const [_state, formAction] = useActionState(createJob, initialState)
  const [category, setCategory] = useState('')

  return (
    <form action={formAction} className="card-body">
      <FormControl label="Title" placeholder="Web Developer" type="text" />
      <FormControl
        label="Description"
        placeholder="Looking for an experienced web developer to join our team."
        type="text"
      />
      <FormControl label="Location" placeholder="Shenzhen" type="text" />
      <div className="form-control">
        <label className="label" htmlFor="Category">
          <span className="label-text">Category</span>
        </label>
        <select
          className="select select-bordered w-full"
          name="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {capitalizeFirstLetter(slugify(category))}
            </option>
          ))}
        </select>
      </div>
      <FormControl label="Wage" placeholder="100" type="text" />
      <FormControl
        label="Image"
        placeholder="https://via.placeholder.com/150"
        type="text"
      />
      <div className="form-control mt-6">
        <SubmitFormButton label="Post job" />
      </div>
    </form>
  )
}
