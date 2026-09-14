import CVViewer from "../_components/Cv";

export default function CVPage() {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-black flex flex-col items-center py-10 px-4">
      {/* HEADER */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold">My CV</h1>

        <a
          href="/cv.pdf"
          download
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Download CV
        </a>
      </div>

      {/* PDF VIEWER */}
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 p-4 rounded-xl shadow">
        <CVViewer />
      </div>
    </section>
  );
}
