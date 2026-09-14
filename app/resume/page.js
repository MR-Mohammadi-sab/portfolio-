import CVViewer from "../_components/Cv";

export const metadata = {
  title: "Resume",
  description:
    "Resume of Mohammad Asif, Software Engineer | Full-Stack Web Developer.",
};

export default function CVPage() {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-inherit flex flex-col items-center py-10 px-4">
      {/* HEADER */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold">My CV</h1>

        <a
          href="/cv.pdf"
          download
          aria-label="Download Mohammad Asif's CV as a PDF"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition text-white rounded-lg"
        >
          Download CV
        </a>
      </div>

      {/* PDF VIEWER */}
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 shadow-2xl p-4 rounded-xl">
        <CVViewer />
      </div>
    </section>
  );
}
