import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for using AutomateFlow Pro educational content.",
  alternates: { canonical: "/terms-of-service" }
};

export default function TermsPage() {
  return (
    <section className="container max-w-3xl py-12">
      <h1 className="text-4xl font-black">Terms of Service</h1>
      <div className="prose mt-6">
        <p>
          By using AutomateFlow Pro, you agree to use the site for lawful, personal, and informational purposes. The
          website publishes educational content about automation, productivity, and related tools.
        </p>
        <p>
          Content may contain mistakes or become outdated as tools change. You are responsible for evaluating whether a
          workflow, tool, or recommendation is appropriate for your situation, data, customers, and internal policies.
        </p>
        <p>
          We may update articles, legal pages, site features, future ads, analytics, and affiliate disclosures as the
          site develops. Contact <a href="mailto:contact@automateflow.pro">contact@automateflow.pro</a> with questions.
        </p>
        <p>This page is general information and is not legal advice.</p>
      </div>
    </section>
  );
}
