import Menu from '@/modules/job/components/menu'
import Search from '@/modules/job/components/search'
import { View } from '@/modules/job/components/view'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:flex lg:gap-x-10">
      <Menu />
      <div>
        <h1 className="my-4 text-center text-3xl">Explore Jobs</h1>
        <div className="flex items-center justify-center gap-x-6">
          <Search />
          <View />
        </div>
        {children}
      </div>
    </div>
  )
}
