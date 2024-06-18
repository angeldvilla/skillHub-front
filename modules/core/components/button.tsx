'use client'

import Link from 'next/link'

export default function ButtonDefault() {
  return (
    <Link href="/jobs">
      <button className="btn btn-outline btn-info" type="button">
        Start
      </button>
    </Link>
  )
}
