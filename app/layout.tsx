import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/seo";
import "./globals.css";

const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim();

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
  },
  other: adsenseClient
    ? {
        "google-adsense-account": adsenseClient
      }
    : undefined
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {adsenseClient ? (
          <Script
            id="google-adsense"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        ) : null}
        <JsonLd data={organizationSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
