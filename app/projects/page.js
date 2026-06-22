import ProjectCart from "../_components/ProjectCart";

export const metadata ="Project"
export default function page( ) {
  return (
    <>
    <div className="w-full text-center">
      <div className="inline-block px-4 py-1.5 mt-4 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-6 text-sm font-medium capitalize">
         Here are some of my  projects, <br />
          transforming ideas into real experiences
        </div>
      </div>
      <ProjectCart />
    </>
  )
}