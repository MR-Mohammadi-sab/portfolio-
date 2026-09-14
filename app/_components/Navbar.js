"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import my from "@/public/my.png";

const navElements = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/resume", label: "Resume" },
];

function ThemeToggle({ className = "" }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Reserve space to avoid layout shift while the theme resolves on the client.
    return <div className={`w-10 h-10 ${className}`} aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <li>
      {isDark ? (
        <button
          onClick={() => setTheme("light")}
          className="
relative w-10 h-10 flex items-center justify-center rounded-lg


shadow-[0_6px_18px_rgba(250,204,21,0.35)]

after:content-['']
after:absolute
after:top-2
after:right-2
after:w-3
after:h-3
after:rounded-full
after:bg-white/70
after:blur-[1px]
"
        >
          ☀️
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="
relative w-10 h-10 flex items-center justify-center rounded-lg



shadow-[0_6px_18px_rgba(148,163,184,0.25)]

after:content-['']
after:absolute
after:top-2
after:left-2
after:w-3
after:h-3
after:rounded-full
after:bg-white/30
after:blur-[1px]

before:content-['']
before:absolute
before:bottom-2
before:right-2
before:w-2
before:h-2
before:rounded-full
before:bg-black/20
"
        >
          🌙
        </button>
      )}
    </li>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="max-w-6xl mx-auto px-4 py-2">
      <div className="flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/about" className="flex items-center gap-4">
          <div className="w-14 h-14 relative">
            <Image
              src={my}
              alt="Mohammad Asif"
              className="w-14 h-14 rounded-4xl object-contain object-top"
              fill
              sizes="56px"
            />
          </div>
          <span className="font-bold lg:text-xl dark:text-gray-100 text-sm text-gray-800">
            Mr.MOHAMMADI
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-8 mt-4">
          {navElements.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                aria-current={pathname === item.path ? "page" : undefined}
                className={`text-text-light dark:text-text-dark hover:text-blue-500 pb-1 transition-colors uppercase font-bold text-sm ${pathname === item.path ? "border-b-2 border-blue-500" : ""}`}
              >
                {item.label}
              </Link>
            </li>
          ))}

          <ThemeToggle />
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="sm:hidden dark:text-gray-100 cursor-pointer absolute right-2 top-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {!open && <FaBars size={24} aria-hidden="true" />}
        </button>

        <div
          id="mobile-menu"
          className={`
    fixed top-0 right-0 h-screen w-32
    bg-white dark:bg-gray-900
    shadow-xl
    transform transition-transform duration-300
    z-50
    flex flex-col gap-6 p-6
    items-center
    ${open ? "translate-x-0" : "translate-x-full"}
  `}
        >
          <button
            type="button"
            className="sm:hidden dark:text-gray-100 cursor-pointer absolute right-2 top-2"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            {open && <RxCross2 size={22} aria-hidden="true" />}
          </button>
          {navElements.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              aria-current={pathname === item.path ? "page" : undefined}
              className={`text-text-light dark:text-text-dark hover:text-blue-500 transition-colors uppercase font-bold text-sm mx-auto ${pathname === item.path ? "border-b-2 border-blue-500" : ""}`}
            >
              {item.label}
            </Link>
          ))}

          <ThemeToggle className="mx-auto" />
        </div>
      </div>
    </nav>
  );
}
