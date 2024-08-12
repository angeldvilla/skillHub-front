export default function SkeletonCard() {
  return (
    <div className="mx-auto w-[28rem] rounded-3xl bg-gray-700 xl:h-[24rem] xl:w-[24rem]">
      <figure className="skeleton h-56 w-96 bg-gray-700"> </figure>
      <div className="card-body text-base-content">
        <h2 className="card-title skeleton mt-2 h-5 w-3/4"> </h2>
        <p className="skeleton my-2 h-4 w-full"> </p>
        <div className="card-actions mt-4 justify-end">
          <div className="badge badge-outline skeleton h-6 w-16"> </div>
          <div className="badge badge-outline skeleton h-6 w-24"> </div>
        </div>
      </div>
    </div>
  )
}
