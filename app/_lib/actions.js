"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendEmail(prevState, formData) {
  // Honeypot field: real visitors never see or fill this input.
  // If it's filled, silently pretend success instead of feeding a bot signal.
  const honeypot = formData.get("company");
  if (honeypot) {
    return { success: true };
  }

  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    return { success: false, error: "One of the fields is too long." };
  }

  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["asf423796@gmail.com"],
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2>Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }
}
