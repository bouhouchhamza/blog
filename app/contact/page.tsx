import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AutomateFlow Pro for corrections, suggestions, and general questions.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <section className="container max-w-3xl py-12">
      <h1 className="text-4xl font-black">Contact</h1>
      <p className="mt-5 text-lg leading-8 text-[#5e6f68]">
        You can contact AutomateFlow Pro for corrections, article suggestions, general questions, or editorial feedback.
        We especially welcome notes about unclear steps, outdated tool details, and broken links.
      </p>
      <p className="mt-4">
        Email: <a className="font-bold text-[#0d4f42]" href="mailto:contact@automateflow.pro">contact@automateflow.pro</a>
      </p>
      <form className="mt-8 space-y-4 rounded-lg border border-[#dce5e0] bg-white p-6" aria-label="Static contact form preview">
        <p className="text-sm leading-6 text-[#5e6f68]">
          This form is a static interface only. It does not send messages because no backend submission system is
          connected yet. Please use the email address above for real contact.
        </p>
        <label className="block font-bold">
          Name
          <input className="mt-2 min-h-11 w-full rounded-md border border-[#dce5e0] px-3" type="text" />
        </label>
        <label className="block font-bold">
          Email
          <input className="mt-2 min-h-11 w-full rounded-md border border-[#dce5e0] px-3" type="email" />
        </label>
        <label className="block font-bold">
          Message
          <textarea className="mt-2 min-h-32 w-full rounded-md border border-[#dce5e0] px-3 py-2" />
        </label>
        <button type="button" className="rounded-md bg-[#dce5e0] px-5 py-3 font-bold text-[#40524c]" disabled>
          Form Not Connected
        </button>
      </form>
    </section>
  );
}
