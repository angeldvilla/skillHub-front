import NavBar from '@/modules/core/components/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      <div>
        <NavBar />
      </div>
      {children}
    </div>
  )
}
