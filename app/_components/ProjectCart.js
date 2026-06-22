import Image from "next/image";
import { datas } from "../../projects";

export default function ProjectCart() {
  
  return (
    <section className="px-6 md:px-12 py-12">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">
          My Projects {datas?.length}
        </h2>
        <p className="text-sm mt-2 text-text-secondary-light dark:text-text-secondary-dark">
          A collection of things I’ve built while learning and practicing frontend development
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {datas.map((project) => (
          <div
            key={project.id}
            className="
              group  overflow-hidden rounded-2xl
              border border-border-light
              dark:border-border-dark
              bg-surface-light
              dark:bg-surface-dark
              shadow-sm hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-2
            "
          >
            {/* IMAGE */}
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 object-top"
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-lg font-semibold dark:text-white">
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                {project.desc}
              </p>

              {/* TECH */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="
                      text-xs px-2 py-1 rounded-full
                      bg-bg-light
                      dark:bg-bg-dark
                      border border-border-light
                      dark:border-border-dark
                      dark:text-gray-200
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-5 flex gap-3 ">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  className="
                    flex-1 text-center py-2 rounded-lg
                    bg-primary
                    hover:bg-primary-hover
                    text-white text-sm font-medium
                    transition
                  
                  "
                >
                  Live
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="
                    flex-1 text-center py-2 rounded-lg
                    border text-sm font-medium
                    border-border-light
                    dark:border-border-dark
                    hover:border-primary
                    dark:text-white
                    transition
                  "
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}