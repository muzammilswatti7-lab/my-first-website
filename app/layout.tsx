import type { Metadata, Viewport } from "next";
import "./globals.css";
import AssistantLoader from "./components/AssistantLoader";
import ContentProtection from "./components/ContentProtection";

const siteUrl = "https://mk-digital-labs.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MK Digital Labs | Marketing, Web & AI Growth Systems",
    template: "%s | MK Digital Labs",
  },
  description:
    "MK Digital Labs connects performance marketing, web development, e-commerce, analytics and AI automation into one complete growth system.",
  applicationName: "MK Digital Labs",
  authors: [{ name: "MK Digital Labs", url: siteUrl }],
  creator: "MK Digital Labs",
  publisher: "MK Digital Labs",
  category: "Digital Marketing and Technology",
  keywords: [
    "digital marketing agency",
    "web development agency",
    "AI automation",
    "ecommerce growth",
    "performance marketing",
    "business growth systems",
    "Pakistan digital agency",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "MK Digital Labs | Build. Market. Automate. Grow.",
    description:
      "Complete digital growth systems for ambitious businesses.",
    url: siteUrl,
    siteName: "MK Digital Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MK Digital Labs | Marketing, Web & AI Growth Systems",
    description:
      "Complete digital growth systems for ambitious businesses.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MK Digital Labs",
  url: siteUrl,
  description:
    "Performance marketing, web development, e-commerce, analytics and AI automation services.",
  areaServed: "Worldwide",
  knowsAbout: [
    "Digital Marketing",
    "Web Development",
    "E-commerce",
    "Analytics",
    "AI Automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
      <ContentProtection />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children} 
        <AssistantLoader />
      </body>
    </html>
  );
}
