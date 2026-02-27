import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* ============================================================
   DESIGNER NOTE — FONTS
   Geist Sans and Geist Mono are loaded from Google Fonts below.
   To swap fonts, replace the import and the `variable` name,
   then update the corresponding CSS custom property in globals.css.
   ============================================================ */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ============================================================
   DESIGNER NOTE — PAGE METADATA
   Change the title and description to match your project.
   ============================================================ */
export const metadata: Metadata = {
  title: "ShadCN Design Template",
  description: "A reusable Next.js + Tailwind + ShadCN starter for designers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* ============================================================
          DESIGNER NOTE — BODY CLASSES
          `antialiased` improves font rendering.
          The font variables make Geist available throughout the app.
          Add additional global classes here (e.g. dark mode default).
          ============================================================ */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
