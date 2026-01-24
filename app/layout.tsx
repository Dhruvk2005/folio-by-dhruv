import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteName = "Dhruv Khade";
const siteTitle = "Dhruv Khade — Portfolio";
const siteDescription =
  "AI-powered full‑stack developer portfolio showcasing projects, skills, and experience.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: siteTitle,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteTitle,
  authors: [{ name: siteName }],
  creator: siteName,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    title: siteTitle,
    description: siteDescription,
    siteName,
    images: [{ url: "/myresume.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/myresume.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
