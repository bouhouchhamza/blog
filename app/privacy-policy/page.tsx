import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for AutomateFlow Pro, an educational automation content website.",
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <section className="container max-w-3xl py-12">
      <h1 className="text-4xl font-black">Privacy Policy</h1>
      <div className="prose mt-6">
        <p>AutomateFlow Pro publishes educational content about AI automation, workflow tools, and productivity systems.</p>
        <p>
          We may collect basic information you choose to provide, such as an email address if a newsletter or contact
          feature is added. The current static contact form does not submit messages unless a backend is added later.
        </p>
        <p>
          We may use analytics, advertising, or affiliate links in the future. If those features are added, third-party
          services may process limited technical data such as browser type, approximate location, referring pages, and
          device information according to their own policies. We do not sell personal information.
        </p>
        <p>
          Contact <a href="mailto:contact@automateflow.pro">contact@automateflow.pro</a> with privacy questions. This
          page is general information and is not legal advice.
        </p>
      </div>
    </section>
  );
}
