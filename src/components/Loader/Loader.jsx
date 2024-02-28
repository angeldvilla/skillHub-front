import React from 'react'
import { Spinner } from '@material-tailwind/react'

export default function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-transparent bg-opacity-75 flex justify-center items-center z-50">
      <Spinner className="h-16 w-16 text-blue-500" />
    </div>
  )
}
