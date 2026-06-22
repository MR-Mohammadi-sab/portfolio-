
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { sendEmail } from "../_lib/actions";

import Button from "../_components/FromButton";
export const metadata ="Contact"
export default function page() {
  return (
    <section className="min-h-screen md:py-20 py-10 ">
      <div className="max-w-6xl mx-auto ">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium">
            Contact Me
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Let&apos;s Work Together
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            Whether you have an internship opportunity, a freelance project,
            or simply want to connect, feel free to reach out. I am always
            open to learning, collaboration, and new challenges.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center  gap-12">
          {/* Contact Info */}
          <div className="md:w-1/3 w-full">
            <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
              Get In Touch
            </h2>

            <div className="space-y-6">
              <div className="flex md:gap-4 gap-2 items-center md:p-5 p-2 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 ">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                  <CiMail size={24} />
                </div>

                <div>
                  <h3 className="font-semibold dark:text-white">Email</h3>
                  <p className="text-slate-600 dark:text-slate-400 ">
                    asf423796@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex md:gap-4 gap-2  items-center md:p-5 p-2  rounded-2xl bg-gray-100  dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600">
                  <FiPhone size={22} />
                </div>

                <div>
                  <h3 className="font-semibold dark:text-white">Phone</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    +93 791 781 672
                  </p>
                </div>
              </div>
              
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h3 className="font-semibold text-lg mb-4 dark:text-white">
                Connect With Me
              </h3>

              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/mohammad-asef-mohammadi-1b80a632b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl  bg-gray-200 border border-gray-200 dark:border-gray-800 hover:-translate-y-1 transition-all"
                >
                  <FaLinkedinIn size={22} />
                </a>

                <a
                  href="https://github.com/mr-mohammadi-sab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl  bg-gray-200 border border-gray-200 dark:border-gray-800 hover:-translate-y-1 transition-all"
                >
                  <FaGithub size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100  dark:bg-gray-900 border border-gray-200 flex-1 dark:border-gray-800 rounded-3xl md:p-8 p-4 w-full">
            <h2 className="md:text-2xl text-lg font-bold mb-6 dark:text-white ">
              Send a Message
            </h2>

            <form action={sendEmail} className="space-y-5 dark:text-white w-full">
              <div>
                <label className="block mb-2 text-sm font-medium dark:text-white">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full focus:shadow-md focus:shadow-blue-600 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-white outline-none focus:ring-1 focus:ring-blue-500"
                  name="name"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium dark:text-white">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full focus:shadow-md focus:shadow-blue-600 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  name="email"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium dark:text-white">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className=" focus:shadow-md focus:shadow-blue-600 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-white"
                  name="message"
                />
              </div>
                <Button />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

