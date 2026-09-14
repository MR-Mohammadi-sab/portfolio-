const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Authentication & Authorization",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Mongoose"],
  },
  {
    category: "Tools & Concepts",
    skills: [
      "Git",
      "GitHub",
      "React Query",
      "Axios",
      "Prisma",
      "Zod",
      "Server-Side Rendering",
      "React Server Components",
      "API Design",
      "Database Design",
      "Software Architecture",
    ],
  },
  {
    category: "Familiar With",
    skills: [
      "Java",
      "JavaFX",
      "Python",
      "C",
      "C++",
      "Data Structures",
      "Algorithms",
    ],
  },
];

// Technologies to visually emphasize as the strongest, most-practiced stack.
const primaryTech = new Set([
  "React",
  "Next.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Mongoose",
]);

export default function Skills() {
  return (
    <div className="mt-10 space-y-8">
      {skillGroups.map((group) => (
        <div key={group.category}>
          <h2 className="text-lg font-semibold mb-3 dark:text-white text-gray-900">
            {group.category}
          </h2>
          <ul className="flex flex-wrap gap-2.5">
            {group.skills.map((skill) => {
              const isPrimary = primaryTech.has(skill);
              return (
                <li
                  key={skill}
                  className={
                    isPrimary
                      ? "px-4 py-2 rounded-full text-sm font-semibold bg-primary text-white shadow-sm"
                      : "px-4 py-2 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-800 dark:text-gray-100 text-gray-700"
                  }
                >
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
