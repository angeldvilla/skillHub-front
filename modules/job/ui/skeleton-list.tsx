import SkeletonCard from './skeleton-card'

export function SkeletonList() {
  const skeletonJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className="mx-auto mb-4 grid w-full max-w-lg grid-cols-1 gap-5 rounded-3xl border-2 border-neutral-700 p-8 text-neutral-500 md:max-w-4xl md:grid-cols-2 xl:max-w-7xl xl:grid-cols-3 xl:gap-6">
      {skeletonJobs.map(() => (
        <SkeletonCard key={Math.random()} />
      ))}
    </div>
  )
}
