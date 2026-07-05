import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://automateflow.pro"),
  title: {
    default: "AutomateFlow Pro | Practical AI Automation Guides",
    template: "%s | AutomateFlow Pro"
  },
  description:
    "Practical AI automation guides, workflow tutorials, and tool reviews for beginners and small businesses.",
  openGraph: {
    siteName: "AutomateFlow Pro",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* Add Google AdSense script here after approval. */}
        <JsonLd data={organizationSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
