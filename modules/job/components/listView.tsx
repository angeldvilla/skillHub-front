import Image from 'next/image'

interface ListViewProps {
  view: 'list' | 'gallery'
  setView: (view: 'list' | 'gallery') => void
}

export default function ListView({ view, setView }: ListViewProps) {
  return (
    <details className="dropdown">
      <summary className="btn m-1">
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
        {view === 'gallery' ? (
          <li>
            <button
              className="flex w-full items-center gap-2 p-2 text-left"
              type="button"
              onClick={() => setView('list')}
            >
              <Image
                alt="List View"
                height={20}
                src="https://img.icons8.com/?size=256w&id=raFn8KbCTv2B&format=png"
                width={20}
              />
              List View
            </button>
          </li>
        ) : (
          <li>
            <button
              className="flex w-full items-center gap-2 p-2 text-left"
              type="button"
              onClick={() => setView('gallery')}
            >
              <Image
                alt="Gallery View"
                height={20}
                src="https://img.icons8.com/?size=256w&id=88166&format=png"
                width={20}
              />
              Gallery View
            </button>
          </li>
        )}
      </ul>
    </details>
  )
}
