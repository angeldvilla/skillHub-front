export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-blue-800">
      <div className="flex flex-row">
        <span className="loading loading-ball loading-xs"> </span>
        <span className="loading loading-ball loading-sm"> </span>
        <span className="loading loading-ball loading-md"> </span>
      </div>
      <h1 className="m-4 text-xl font-bold">Loading</h1>
    </div>
  )
}
