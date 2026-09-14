import { Poppins, Inter } from "next/font/google";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "%s / My Portfolio",
    default: "welcome / My Portfolio",
  },
  description:
    "Passionate Frontend Developer focused on building modern, responsive, and user-centered web applications using React.js , Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-bg-light dark:bg-bg-dark min-w-62.5 max-w-7xl mx-auto">
        <header className="border-b dark:border-border-dark border-border-light sticky top-0 dark:bg-bg-dark bg-bg-light opacity-95 z-100">
          <Navbar />
        </header>
        <main className=" px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
