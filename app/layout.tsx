import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MK Digital Labs | Marketing, Web & AI Growth Systems",
  description: "MK Digital Labs connects performance marketing, web development, e-commerce, analytics and AI automation into one complete growth system.",
  keywords: ["digital marketing agency", "web development", "AI automation", "ecommerce growth", "Pakistan"],
  openGraph: {
    title: "MK Digital Labs | Build. Market. Automate. Grow.",
    description: "Complete digital growth systems for ambitious businesses.",
    type: "website",
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
