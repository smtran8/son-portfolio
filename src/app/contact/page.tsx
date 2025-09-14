"use client";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    if (!name || !email || !message) {
      setStatus("Please fill out all fields.");
      return;
    }

    const subject = encodeURIComponent("Portfolio Message");
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:sm.tran@ufl.edu?subject=${subject}&body=${body}`;

    setStatus("Opening your email client...");

    // To enable Formspree, replace onSubmit with:
    // fetch("https://formspree.io/f/FORM_ID",{method:"POST",body:new FormData(form)})
    // .then(()=>setStatus("Sent")).catch(()=>setStatus("Error"));
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label className="block text-sm font-medium text-gray-800" htmlFor="name">Name</label>
          <input id="name" name="name" required className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent]" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent]" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800" htmlFor="message">Message</label>
          <textarea id="message" name="message" required rows={6} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent]" />
        </div>
        <button type="submit" className="btn">Send</button>
        {status && <p className="text-sm text-gray-600 pt-1">{status}</p>}
      </form>
      <p className="text-gray-700">Or email me directly: <a href="mailto:sm.tran@ufl.edu">sm.tran@ufl.edu</a></p>
    </div>
  );
}


