'use client'

import Image from 'next/image'

import { useJobsView } from '@/store/use-jobs-view'

export function View() {
  const { view, setView } = useJobsView()

  return (
    <details className="dropdown">
      <summary className="btn m-1 bg-gray-700 hover:bg-gray-700">
        <Image
          alt="Change View"
          height={20}
          src={
            view === 'list'
              ? 'https://img.icons8.com/?size=256w&id=raFn8KbCTv2B&format=png'
              : 'https://img.icons8.com/?size=256w&id=88166&format=png'
          }
          width={20}
        />
      </summary>
      <ul className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
        <li>
          <button
            className={`flex w-full items-center gap-2 p-2 text-left ${view === 'grid' ? 'bg-gray-200' : ''}`}
            type="button"
            onClick={() => setView('grid')}
          >
            <Image
              alt="Grid View"
              height={20}
              src="https://img.icons8.com/?size=256w&id=88166&format=png"
              width={20}
            />
            Grid
          </button>
        </li>
        <li>
          <button
            className={`flex w-full items-center gap-2 p-2 text-left ${view === 'list' ? 'bg-gray-200' : ''}`}
            type="button"
            onClick={() => setView('list')}
          >
            <Image
              alt="List View"
              height={20}
              src="https://img.icons8.com/?size=256w&id=raFn8KbCTv2B&format=png"
              width={20}
            />
            List
          </button>
        </li>
      </ul>
    </details>
  )
}
