import SkeletonCard from './skeleton-card'

export function SkeletonList() {
  const skeletonJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className="mx-auto mb-4 grid max-w-lg grid-cols-1 gap-5 rounded-3xl border-2 border-neutral-700 p-4 text-neutral-500 xl:max-w-7xl xl:grid-cols-2 xl:gap-8 xl:p-6 2xl:grid-cols-3">
      {skeletonJobs.map(() => (
        <SkeletonCard key={Math.random()} />
      ))}
    </div>
  )
}
