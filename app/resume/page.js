import { LuDownload } from "react-icons/lu";
export const metadata = {
  title: "Resume",
};
export default function Resume() {
  return (
    <section className="pt-32 pb-20  min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Title */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-gray-100">
            My <span className="text-blue-500">Resume</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Frontend Developer | React
          </p>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mb-16">
          <a
            href="/Mr.Mohammadi CV.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <LuDownload size={18} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
