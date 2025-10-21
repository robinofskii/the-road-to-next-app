import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

import { homePath, ticketsPath } from "./paths";

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
  title: "Ticket management App",
  description: "A simple ticket management app built with Next.js",
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
        <nav>
          <ul
            className="supports-backdrop-blur:bg-background/60: bg-background/95
              background-blur fixed top-0 right-0 left-0 z-20 flex w-full
              justify-between border-b px-5 py-2.5"
          >
            <li>
              <Link href={homePath()} className="text-lg font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link href={ticketsPath()} className="text-sm underline">
                Tickets
              </Link>
            </li>
          </ul>
        </nav>
        <main
          className="bg-secondary/20 flex min-h-screen flex-1 flex-col
            overflow-x-hidden overflow-y-auto px-8 py-24"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
