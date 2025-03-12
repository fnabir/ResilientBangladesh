import type { Metadata } from "next";
import {ThemeProvider} from "@/components/themeProvider";
import "@/styles/globals.css";
import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1.5,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Resilient Bangladesh",
  description: "Resilient Bangladesh was founded to strengthen disaster and climate resilience among people by enthusiastic youth minds.",
  keywords: "resilient, resilient bangladesh, resilient bangladesh organization, youth organization bangladesh, non-profit organization bangladesh, resilientbangladesh, resilientbd, rb team, resilient team, member of resilient, about resilient bangladesh",
  robots: "index, follow",
  alternates: {
    canonical: "https://resilientbd.vercel.app/",
  },
  openGraph: {
    title: "Resilient Bangladesh",
    siteName: "Resilient Bangladesh",
    url: "https://resilientbd.vercel.app/",
    description: "A Non-Profit Organization of Bangladesh",
    type: "website",
    images: [
      {
        url: "https://resilientbd.vercel.app/poster/FB.png",
        alt: "Resilient Bangladesh",
      },
    ],
  },
  other: {
    "fb:app_id": "218165456180700",
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      
    </html>
  );
}
