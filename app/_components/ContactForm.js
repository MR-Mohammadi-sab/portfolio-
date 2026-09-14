"use client";

import { useActionState } from "react";
import { sendEmail } from "../_lib/actions";
import Button from "./FromButton";

const initialState = { success: false, error: null };

export default function ContactForm() {
  const [state, formAction] = useActionState(sendEmail, initialState);

  return (
    <form action={formAction} className="relative space-y-5 dark:text-white w-full">
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium dark:text-white">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Ali Ahmadi"
          required
          maxLength={100}
          autoComplete="name"
          className="w-full focus:shadow-md focus:shadow-blue-600 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-white outline-none focus:ring-1 focus:ring-blue-500"
          name="name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="ali@example.com"
          required
          autoComplete="email"
          className="w-full focus:shadow-md focus:shadow-blue-600 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          name="email"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-white">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="Tell me about your project..."
          required
          maxLength={5000}
          className="focus:shadow-md focus:shadow-blue-600 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-white"
          name="message"
        />
      </div>

      {/* Honeypot: hidden from real users, catches simple bots. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div role="status" aria-live="polite">
        {state.success && (
          <p className="text-sm font-medium text-green-600 dark:text-green-400">
            Thanks for reaching out! Your message has been sent.
          </p>
        )}
        {state.error && (
          <p className="text-sm font-medium text-red-600 dark:text-red-400">
            {state.error}
          </p>
        )}
      </div>

      <Button />
    </form>
  );
}
