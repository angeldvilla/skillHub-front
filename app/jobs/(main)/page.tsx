import { getJobs } from '@/modules/job/actions/actions'
import List from '@/modules/job/components/list'

interface Props {
  searchParams: {
    title?: string
    category?: string
    location?: string
    wageOperator?: string
    wageValue?: number
  }
}

export default async function Page({
  searchParams: { title, category, location, wageOperator, wageValue }
}: Props) {
  const jobs = await getJobs(title, category, location, wageOperator, wageValue)

  return <List jobs={jobs} />
}
