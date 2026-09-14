import Image from "next/image";
import my from "@/public/my.png";
import Skills from "../_components/Skills";

export const metadata = {
  title: "About",
  description:
    "Software Engineer with a full-stack web development specialization in React, Next.js, TypeScript, and Node.js.",
};

export default function Page() {
  return (
    <section className="min-h-screen md:py-20 py-10 flex flex-col md:flex-row gap-12 md:items-start items-center justify-center max-w-6xl mx-auto">
      {/* Image */}
      <div className="relative flex justify-center shrink-0">
        <div className="sm:w-80 sm:h-80 w-64 h-64 rounded-2xl bg-linear-to-r from-blue-500 to-purple-500 p-1">
          <div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden relative">
            <Image
              src={my}
              alt="Portrait of Mohammad Asif"
              fill
              className="object-cover"
              placeholder="blur"
              quality={90}
              sizes="(max-width: 640px) 256px, 320px"
            />
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute bottom-0 right-0 translate-x-4 translate-y-4 bg-blue-500 text-white px-5 py-2 rounded-full shadow-lg font-medium">
          🎓 7th Semester
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl">
        <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/40 rounded-full text-blue-600 dark:text-blue-300 mb-6 text-sm font-medium">
          👋 Hello! Let me introduce myself
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
          I am <span className="text-blue-500">Mohammad Asif</span>
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Software Engineer | Full-Stack Web Developer, currently in my 7th
          semester of Computer Science.
        </p>

        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            My Computer Science studies gave me a software engineering
            foundation — data structures, algorithms, software architecture,
            API and database design — that I apply in practice through
            modern full-stack web development.
          </p>

          <p>
            My strongest practical specialization is building full-stack
            applications with React and Next.js on the frontend, and
            Node.js, REST APIs, and relational or document databases on the
            backend, with a focus on clean architecture, responsiveness, and
            user experience.
          </p>

          <p>
            I continuously improve my skills through hands-on projects and
            learning modern web technologies, and I enjoy turning ideas into
            functional, scalable applications.
          </p>
        </div>

        <Skills />
      </div>
    </section>
  );
}
