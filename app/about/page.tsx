import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn who AutomateFlow Pro helps and how our beginner-friendly automation content is created.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <section className="container max-w-3xl py-12">
      <h1 className="text-4xl font-black">About AutomateFlow Pro</h1>
      <div className="prose mt-6">
        <p>
          AutomateFlow Pro is an educational website for beginners, freelancers, creators, and small business owners
          who want to understand AI automation, workflow tools, no-code systems, and practical productivity methods.
        </p>
        <p>
          Our goal is to make automation easier to evaluate before you invest time in a tool or rebuild a process.
          Articles focus on clear explanations, practical examples, careful limitations, and workflows that keep human
          review in the right places.
        </p>
        <h2>What we publish</h2>
        <p>
          We publish beginner guides, workflow planning tutorials, tool explainers, comparison articles, and practical
          use cases. We avoid fake guarantees, exaggerated claims, and unsupported statistics.
        </p>
        <h2>Editorial standards</h2>
        <p>
          Every guide is written for educational use. We aim to explain what a workflow does, when automation may help,
          where risk appears, and what should remain manual. We do not claim that a tool will guarantee revenue,
          replace expert judgment, or solve every operational problem.
        </p>
        <h2>Who the site is for</h2>
        <p>
          If you are learning how to save time with repeatable systems, document processes, or use AI responsibly in
          everyday work, this site is built for you.
        </p>
        <h2>Corrections and feedback</h2>
        <p>
          Automation tools change often. If you spot an issue, unclear wording, or a guide that needs an update, contact
          us at <a href="mailto:contact@automateflow.pro">contact@automateflow.pro</a>.
        </p>
      </div>
    </section>
  );
}
