import { Poppins, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-wbqz.vercel.app";
const SITE_TITLE = "Mohammad Asif — Software Engineer | Full-Stack Web Developer";
const SITE_DESCRIPTION =
  "Portfolio of Mohammad Asif, a Software Engineer specializing in full-stack web development with React, Next.js, TypeScript, Node.js, and modern databases.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Mohammad Asif",
    default: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Mohammad Asif",
    "JavaScript",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Mohammad Asif", url: SITE_URL }],
  creator: "Mohammad Asif",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Mohammad Asif — Portfolio",
    images: [
      {
        url: "/demo.png",
        width: 1896,
        height: 2055,
        alt: "Mohammad Asif — Software Engineer Portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/demo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohammad Asif",
  jobTitle: "Software Engineer",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  sameAs: [
    "https://linkedin.com/in/mohammad-asef-mohammadi-1b80a632b",
    "https://github.com/mr-mohammadi-sab",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Full-Stack Web Development",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-bg-light dark:bg-bg-dark min-w-62.5 max-w-7xl mx-auto">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-200 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-white"
          >
            Skip to content
          </a>
          <header className="border-b dark:border-border-dark border-border-light sticky top-0 dark:bg-bg-dark bg-bg-light opacity-95 z-100">
            <Navbar />
          </header>
          <main id="main-content" className="px-6">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
