"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Serve the worker from our own bundle instead of a third-party CDN —
// avoids an extra external dependency and any version mismatch with the
// installed pdfjs-dist package.
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

export default function CVViewer() {
  const [numPages, setNumPages] = useState(null);

  return (
    <div className="flex flex-col items-center">
      <Document
        file="/cv.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={
          <p className="py-10 text-sm text-gray-500 dark:text-gray-400">
            Loading resume…
          </p>
        }
        error={
          <p className="py-10 text-sm text-red-500">
            Failed to load the resume. You can still use the download button
            above.
          </p>
        }
      >
        {numPages &&
          Array.from(new Array(numPages), (_, i) => (
            <Page
              key={i}
              pageNumber={i + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
      </Document>
    </div>
  );
}
