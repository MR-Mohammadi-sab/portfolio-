
import { BsGithub } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 dark:border-gray-800 bg-gray-950 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Mohammad Asif
            </h2>

            <p className="mt-3 text-gray-400 leading-relaxed">
              Frontend Developer focused on building modern,
              responsive, and user-friendly web applications
              with React and Next.js.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>

            <div className="space-y-3">
              <p>
                <span className="text-gray-500">Email:</span>
                <br />
                asf423796@gmail.com
              </p>

              <p>
                <span className="text-gray-500">Phone:</span>
                <br />
                +93 791 781 672
              </p>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect
            </h3>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/mohammad-asef-mohammadi-1b80a632b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-900 hover:bg-blue-600 transition-all duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="https://github.com/mr-mohammadi-sab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-900 hover:bg-gray-700 transition-all duration-300"
              >
                <BsGithub size={20} />
              </a>

              <a
                href="mailto:asf423796@gmail.com"
                className="p-3 rounded-lg bg-gray-900 hover:bg-red-600 transition-all duration-300"
              >
                <CiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mohammad Asif. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

