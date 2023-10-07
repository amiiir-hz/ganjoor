import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactQueryProvider } from "./ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ganjoor Test",
  description: "It is a test based on ganjoor.net",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="en" dir="rtl">
        <body className={inter.className}>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
