import { getCategories, getJobs } from '@/modules/job/actions/actions'
import List from '@/modules/job/components/list'
import Menu from '@/modules/job/components/menu'
import Search from '@/modules/job/components/search'

interface Props {
  searchParams: { title?: string; category?: string }
}

export default async function JobsPage({
  searchParams: { title, category }
}: Props) {
  const jobsData = getJobs(title, category)
  const categoriesData = getCategories()

  const [jobs, categories] = await Promise.all([jobsData, categoriesData])

  return (
    <>
      <div className="mx-auto flex max-w-5xl items-center justify-around">
        <Menu categories={categories} />
        <Search />
      </div>
      {jobs.length ? (
        <List jobs={jobs} />
      ) : (
        <p className="my-48 text-center text-xl">
          No jobs found with that title
        </p>
      )}
    </>
  )
}
