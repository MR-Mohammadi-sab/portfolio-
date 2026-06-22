import Image from "next/image";
import Link from "next/link";
import illu from "@/public/I.png";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center md:py-8 py-4">
            <div className="mt-5 text-center inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-6 text-sm font-medium">
          👨‍💻 Computer Science Student • Frontend Developer
        </div>

    <div className=" mx-auto  flex flex-col-reverse md:flex-row items-start justify-between gap-12">

      {/* TEXT SIDE */}
      <div className="flex-1">


        <h1 className="text-4xl  md:text-5xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-gray-100">
          Building Modern
          <span className="text-blue-500 block">Web Experiences</span>
          with React.js & Next.js
        </h1>

        <p className=" text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-xl leading-relaxed">
          Passionate Frontend Developer focused on building modern, responsive, and user-centered web applications using React.js , Next.js and Tailwind CSS. Currently studying Computer Science and actively developing real-world projects while seeking internship opportunities to grow as a professional developer.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition hover:scale-105 shadow-md"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-500 transition hover:scale-105 dark:text-gray-100"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* IMAGE SIDE */}
      <div className="flex-1 flex justify-center">
        <Image
          src={illu}
          alt="Hero illustration"
          priority
          className="w-full max-w-md lg:max-w-lg h-auto object-contain rounded-md"
        />
      </div>

    </div>
    </section>
  );
}