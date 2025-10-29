import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { HeaderNav } from "@/components/header-nav";
import { ThemeProvider } from "@/components/theme/theme-provider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TicketHunter",
  description: "A simple ticket management app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <HeaderNav />
          <main className="bg-secondary/20 flex min-h-screen flex-1 flex-col overflow-x-hidden overflow-y-auto px-8 py-24">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
