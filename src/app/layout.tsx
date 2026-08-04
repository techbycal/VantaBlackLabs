import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vanta Black Labs — Automating Corporate Finance & Strategy",
  description:
    "Vanta Black Labs is a corporate finance automation and strategy consultancy. Track record, case studies, ventures, and insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      // Some browser extensions (e.g. AI/automation agents) inject attributes
      // like `rtrvr-*` onto <html> before React hydrates, causing a harmless
      // hydration warning. This only suppresses that specific mismatch.
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}
