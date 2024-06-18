'use client'

import Link from 'next/link'

export default function ButtonDefault() {
  return (
    <div className="flex flex-col items-center">
      <Link href="/jobs">
        <button className="btn btn-outline btn-info">Start</button>
      </Link>
    </div>
  )
}
