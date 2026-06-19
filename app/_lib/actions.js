"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
 if (!name || !email || !message)
  throw new Error("All fields are required");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  throw new Error("Please enter a valid email address");
}
  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["asf423796@gmail.com"],
      subject: `New message from ${name}`,
      html: `
        <h2>Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
   
    return {
      success: true,
    };
  } catch (err) {
     
    return {
    
      success: false,
      error: err.message,
    };
  }
}