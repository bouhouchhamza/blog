import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for AutomateFlow Pro, including future analytics, ads, and affiliate tracking notes.",
  alternates: { canonical: "/cookie-policy" }
};

export default function CookiePolicyPage() {
  return (
    <section className="container max-w-3xl py-12">
      <h1 className="text-4xl font-black">Cookie Policy</h1>
      <div className="prose mt-6">
        <p>
          AutomateFlow Pro may use cookies or similar technologies to keep the site working, understand aggregate site
          usage, and support future advertising or affiliate measurement.
        </p>
        <p>
          At launch, the site does not include Google AdSense scripts, fake ads, or fake analytics. If advertising,
          analytics, or affiliate tools are added later, they may set their own cookies according to their policies.
        </p>
        <p>
          You can manage cookies through your browser settings. Contact{" "}
          <a href="mailto:contact@automateflow.pro">contact@automateflow.pro</a> with questions. This page is general
          information and is not legal advice.
        </p>
      </div>
    </section>
  );
}
