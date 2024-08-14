import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/nextjs'
import { Loader } from 'lucide-react'

export function Login() {
  return (
    <div>
      <ClerkLoading>
        <div className="btn btn-outline hidden w-24 items-center justify-center border-blue-500 hover:border-gray-100 hover:bg-blue-500 hover:text-white hover:duration-300 hover:ease-linear lg:flex">
          <Loader className="h-5 w-5 animate-spin text-blue-500" />
        </div>
      </ClerkLoading>
      <ClerkLoaded>
        <SignedOut>
          <div className="btn btn-outline hidden w-24 items-center justify-center border-blue-500 hover:border-gray-100 hover:bg-blue-500 hover:text-white hover:duration-300 hover:ease-linear lg:flex">
            <SignInButton mode="modal" />
          </div>
        </SignedOut>
        <SignedIn>
          <div className="btn btn-ghost w-24">
            <UserButton />
          </div>
        </SignedIn>
      </ClerkLoaded>
    </div>
  )
}
