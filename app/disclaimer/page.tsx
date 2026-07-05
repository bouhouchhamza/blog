import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer for AutomateFlow Pro educational automation articles.",
  alternates: { canonical: "/disclaimer" }
};

export default function DisclaimerPage() {
  return (
    <section className="container max-w-3xl py-12">
      <h1 className="text-4xl font-black">Disclaimer</h1>
      <div className="prose mt-6">
        <p>
          AutomateFlow Pro provides educational content only. Articles are intended to help readers understand AI
          automation, workflow tools, and productivity concepts.
        </p>
        <p>
          We do not guarantee specific business, financial, productivity, or technical results. Tools, pricing, and
          features may change, so readers should verify important details before making decisions.
        </p>
        <p>
          Automation can affect customer communication, data handling, and internal operations. Use appropriate review,
          permissions, and testing before relying on any workflow in a real business setting.
        </p>
        <p>
          Future articles may include ads or affiliate links, and any material relationship will be disclosed where
          appropriate. Contact <a href="mailto:contact@automateflow.pro">contact@automateflow.pro</a> with questions.
        </p>
        <p>This page is general information and is not legal advice.</p>
      </div>
    </section>
  );
}
