"use client"

import { useFormStatus } from "react-dom"

export default function Button(){
    const {pending}=useFormStatus()
    return   <button
                type="submit"
                className="cursor-pointer w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all"
              >
                {!pending?"Send Message":"Sending..."}
              </button>
}