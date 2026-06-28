import Image from "next/image";
import my from "@/public/my.png";

const tech = [
  "React.js",
  "Next.js",
  "Rest API",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "MySQL",
  "PostgreSQL",
  "Oracle",
];

const familiarTech = [
  "Data Structures",
  "Algorithms",
  "Java",
  "JavaFX",
  "Python",
  "C",
  "C++",
];

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <section className="min-h-screen md:py-20 py-10 flex flex-col md:flex-row gap-12 md:items-start items-center justify-center max-w-6xl mx-auto">
      {/* Image */}
      <div className="relative flex justify-center">
        <div className="sm:w-80 sm:h-80 w-64 h-64 rounded-2xl bg-linear-to-r from-blue-500 to-purple-500 p-1">
          <div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
            <Image
              src={my}
              alt="Mohammad Asif"
              className="w-full h-full object-cover"
              placeholder="blur"
              priority
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
          Computer Science Student (7th Semester) and Frontend Developer
          passionate about building modern, responsive, and user-friendly web
          applications.
        </p>

        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            Since my first days at university, I discovered a strong passion for
            programming and building digital products.
          </p>

          <p>
            I focus on creating real-world web applications using React and
            Next.js, with an emphasis on clean design, responsiveness, and user
            experience.
          </p>

          <p>
            I continuously improve my skills through hands-on projects and
            learning modern web technologies, and I enjoy turning ideas into
            functional and scalable applications.
          </p>
        </div>

        {/* Main Skills */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">
            Technologies I Use
          </h2>

          <ul className="flex flex-wrap gap-3">
            {tech.map((skill) => (
              <li
                key={skill}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-medium dark:text-gray-100"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Familiar Technologies */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-blue-500 mb-4">
            Familiar With
          </h2>

          <ul className="flex flex-wrap gap-3">
            {familiarTech.map((skill) => (
              <li
                key={skill}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-medium dark:text-gray-100"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
