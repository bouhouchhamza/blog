import type { Article } from "@/lib/articles";
import { getCategory } from "@/lib/categories";
import { absoluteUrl } from "@/lib/utils";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AutomateFlow Pro",
    url: "https://automateflow.pro",
    email: "contact@automateflow.pro"
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AutomateFlow Pro",
    url: "https://automateflow.pro",
    description:
      "Practical AI automation guides, workflow tutorials, and tool reviews for beginners and small businesses."
  };
}

export function articleSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: absoluteUrl(article.image),
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    author: {
      "@type": "Organization",
      name: article.author
    },
    publisher: {
      "@type": "Organization",
      name: "AutomateFlow Pro"
    },
    mainEntityOfPage: absoluteUrl(`/blog/${article.slug}`)
  };
}

export function faqSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url)
    }))
  };
}

export function categoryTitle(slug: string) {
  return getCategory(slug)?.name ?? "Automation";
}
