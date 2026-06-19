"use client"
export default function Error({error,reset}) {
  return (
    <div className="h-screen flex flex-col items-center justify-center dark:bg-bg-dark bg-bg-light">
      <div className="max-w-2xl mx-auto text-center space-y-7">

        <h1 className="font-semibold text-3xl dark:text-white">Something went Wrong!</h1>
        <p className="text-lg dark:text-gray-200">{error.message}</p>

        <button   className="inline-block dark:bg-primary-dark dark:hover:bg-primary-dark-hover text-blue-100 bg-primary hover:bg-primary-hover cursor-pointer px-6 py-3 text-lg"
        onClick={reset}>
            Try againg
        </button>
          </div>
    </div>
  )
}
