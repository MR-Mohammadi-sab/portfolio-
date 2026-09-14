import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiGithub,
  SiPython,
} from "react-icons/si";

import { FaJava } from "react-icons/fa6";

function GenericTechIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M8 4L3 12l5 8M16 4l5 8-5 8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const TIERS = {
  advanced: { label: "Advanced" },
  strong: { label: "Strong" },
  familiar: { label: "Familiar" },
};

const CATEGORIES = [
  {
    key: "frontend",
    title: "Frontend",
    items: [
      {
        name: "React",
        tier: "advanced",
        icon: SiReact,
        desc: "Primary library for building interactive UIs.",
      },
      {
        name: "Next.js",
        tier: "advanced",
        icon: SiNextdotjs,
        desc: "App Router, Server Components & server actions.",
      },
      {
        name: "TypeScript",
        tier: "advanced",
        icon: SiTypescript,
        desc: "Typed JavaScript for safer, maintainable code.",
      },
      {
        name: "JavaScript",
        tier: "advanced",
        icon: SiJavascript,
        desc: "Core language across the whole stack.",
      },
      {
        name: "Tailwind CSS",
        tier: "advanced",
        icon: SiTailwindcss,
        desc: "Utility-first styling for fast, consistent UI.",
      },
      {
        name: "HTML5",
        tier: "strong",
        icon: SiHtml5,
        desc: "Semantic, accessible markup.",
      },
      {
        name: "CSS3",
        tier: "strong",
        icon: SiCss,
        desc: "Responsive layouts and modern styling.",
      },
    ],
  },

  {
    key: "backend",
    title: "Backend",
    items: [
      {
        name: "Node.js",
        tier: "advanced",
        icon: SiNodedotjs,
        desc: "JavaScript runtime for backend services.",
      },
      {
        name: "Express.js",
        tier: "advanced",
        icon: SiExpress,
        desc: "Building REST APIs and server logic.",
      },
      {
        name: "REST APIs",
        tier: "strong",
        icon: GenericTechIcon,
        desc: "Designing and consuming RESTful endpoints.",
      },
      {
        name: "JWT / Auth",
        tier: "strong",
        icon: GenericTechIcon,
        desc: "Token-based authentication & authorization.",
      },
    ],
  },

  {
    key: "database",
    title: "Database",
    items: [
      {
        name: "MongoDB",
        tier: "advanced",
        icon: SiMongodb,
        desc: "Document-based data storage.",
      },
      {
        name: "Mongoose",
        tier: "advanced",
        icon: GenericTechIcon,
        desc: "Schema modeling and queries for MongoDB.",
      },
      {
        name: "PostgreSQL",
        tier: "advanced",
        icon: SiPostgresql,
        desc: "Relational data modeling and queries.",
      },
      {
        name: "Prisma",
        tier: "strong",
        icon: SiPrisma,
        desc: "Type-safe ORM for relational databases.",
      },
    ],
  },

  {
    key: "tools",
    title: "Tools & Concepts",
    items: [
      {
        name: "React Query",
        tier: "strong",
        icon: GenericTechIcon,
        desc: "Server-state fetching, caching & sync.",
      },
      {
        name: "Axios",
        tier: "strong",
        icon: GenericTechIcon,
        desc: "Promise-based HTTP client for API calls.",
      },
      {
        name: "Zod",
        tier: "strong",
        icon: GenericTechIcon,
        desc: "Schema validation for forms & API input.",
      },
      {
        name: "Git",
        tier: "strong",
        icon: SiGit,
        desc: "Version control for every project.",
      },
      {
        name: "GitHub",
        tier: "strong",
        icon: SiGithub,
        desc: "Hosting, collaboration & CI.",
      },
    ],
  },
];

const FAMILIAR = [
  { name: "Java", icon: FaJava },
  { name: "JavaFX", icon: GenericTechIcon },
  { name: "Python", icon: SiPython },
  { name: "C", icon: GenericTechIcon },
  { name: "C++", icon: GenericTechIcon },
  { name: "Data Structures", icon: GenericTechIcon },
  { name: "Algorithms", icon: GenericTechIcon },
];

function TierBadge({ tier }) {
  const styles = {
    advanced:
      "bg-primary/10 text-primary dark:bg-primary-dark/15 dark:text-primary-dark",

    strong: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300",

    familiar: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300",
  };

  return (
    <span
      className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide ${
        styles[tier]
      }`}
    >
      {TIERS[tier].label}
    </span>
  );
}

function TechCard({ item, index }) {
  const Icon = item.icon;
  const featured = item.tier === "advanced";

  return (
    <div
      tabIndex={0}
      className={`
        tech-card group relative overflow-hidden rounded-2xl border
        border-border-light dark:border-border-dark
        bg-white dark:bg-gray-900/60
        transition-all duration-200 ease-out
        hover:-translate-y-1 hover:shadow-lg
        focus-visible:-translate-y-1 focus-visible:shadow-lg
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
        ${featured ? "p-5" : "p-4"}
      `}
      style={{ animationDelay: `${(index % 8) * 50}ms` }}
    >
      {featured && (
        <span
          className="absolute inset-x-0 top-0 h-0.5 bg-primary dark:bg-primary-dark"
          aria-hidden="true"
        />
      )}

      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className={`
            flex items-center justify-center shrink-0 rounded-xl
            ${featured ? "w-11 h-11 text-2xl" : "w-9 h-9 text-lg"}
            ${
              featured
                ? "bg-primary/10 text-primary dark:bg-primary-dark/15 dark:text-primary-dark"
                : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
            }
          `}
        >
          <Icon aria-hidden="true" />
        </span>

        <div className="min-w-0">
          <p
            className={`font-semibold text-text-light dark:text-text-dark truncate ${
              featured ? "text-base" : "text-sm"
            }`}
          >
            {item.name}
          </p>

          {/* <TierBadge tier={item.tier} /> */}
        </div>
      </div>

      {/* Short "how I use it" note — visually collapsed until hover/focus,
          but always present in the DOM for screen readers & SEO. */}
      <div className="tech-card-desc grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out mt-1">
        <p className="overflow-hidden text-xs leading-snug text-text-secondary-light dark:text-text-secondary-dark">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

function FamiliarChip({ item }) {
  const Icon = item.icon;

  return (
    <div
      tabIndex={0}
      className="
        tech-card flex items-center gap-2 rounded-full border
        border-border-light dark:border-border-dark
        bg-white dark:bg-gray-900/60
        pl-3 pr-4 py-2
        transition-all duration-200 ease-out
        hover:-translate-y-0.5 hover:shadow-md
        focus-visible:-translate-y-0.5 focus-visible:shadow-md
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
      "
    >
      <span
        aria-hidden="true"
        className="flex items-center justify-center w-6 h-6 text-sm text-gray-500 dark:text-gray-400"
      >
        <Icon aria-hidden="true" />
      </span>

      <span className="text-sm font-medium text-text-light dark:text-text-dark">
        {item.name}
      </span>
    </div>
  );
}

export default function TechShowcase() {
  return (
    <section
      aria-labelledby="tech-showcase-heading"
      className="max-w-6xl mx-auto py-16 md:py-24"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 mb-4 text-sm font-medium">
          🛠️ Technologies I work with
        </div>

        <h2
          id="tech-showcase-heading"
          className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark"
        >
          My Technology Stack
        </h2>

        <p className="mt-3 text-text-secondary-light dark:text-text-secondary-dark">
          A software engineering foundation, applied through a practical
          full-stack web development specialization.
        </p>
      </div>

      <div className="space-y-10">
        {CATEGORIES.map((category) => (
          <div key={category.key}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark mb-4">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.items.map((item, index) => (
                <TechCard key={item.name} item={item} index={index} />
              ))}
            </div>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark mb-4">
            Familiar With
          </h3>

          <div className="flex flex-wrap gap-3">
            {FAMILIAR.map((item) => (
              <FamiliarChip key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Scoped, self-contained CSS: entrance animation + reduced-motion support.
          No client JS involved — this runs purely from the stylesheet. */}
      <style>{`
        @keyframes techFadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tech-card {
          animation: techFadeUp 0.5s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-card {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .tech-card-desc {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
