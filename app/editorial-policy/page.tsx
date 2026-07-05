import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How AutomateFlow Pro creates, reviews, and updates educational automation content.",
  alternates: { canonical: "/editorial-policy" }
};

export default function EditorialPolicyPage() {
  return (
    <section className="container max-w-3xl py-12">
      <h1 className="text-4xl font-black">Editorial Policy</h1>
      <div className="prose mt-6">
        <p>
          AutomateFlow Pro aims to publish clear, original, beginner-friendly educational content. We avoid fake
          statistics, misleading promises, unsupported income claims, and deceptive tool recommendations.
        </p>
        <p>
          Articles are written to explain concepts, show practical workflows, and describe limitations. When content is
          updated, the updated date on the article may change.
        </p>
        <p>
          We prioritize original educational writing, internal linking to related beginner guides, plain-language
          explanations, and practical examples. We do not publish copied articles or invented sources.
        </p>
        <p>
          Readers can send corrections, suggestions, or concerns to{" "}
          <a href="mailto:contact@automateflow.pro">contact@automateflow.pro</a>. Future ads, analytics, and affiliate
          links may be used, and disclosures will be added where needed.
        </p>
        <p>This page is general information and is not legal advice.</p>
      </div>
    </section>
  );
}
