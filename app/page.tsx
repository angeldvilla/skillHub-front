import ButtonDefault from '@/modules/core/components/button'
import NavBar from '@/modules/core/components/navbar'

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-3xl font-bold">WELCOME TO SKILLHUB!!!</h1>
        <ButtonDefault />
      </div>
    </div>
  )
}
