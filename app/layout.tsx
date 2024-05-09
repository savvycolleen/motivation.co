import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Motivation.Co",
  description: "Here to Help Your Happy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white text-black font-sans w-screen h-screen m-0 p-0">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
