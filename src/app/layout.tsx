import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Godfred Fokuo | Software Developer",
  description: "Software developer from Ghana. React Native, Kotlin, Next.js. Built 5+ mobile apps and 2+ web apps.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}