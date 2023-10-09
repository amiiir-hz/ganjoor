import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactQueryProvider } from "./ReactQueryProvider";
import Navbar from "@/components/layout/Navbar/Navbar";
import { AuthProvider } from "@/contexts/AuthContext";

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
      <AuthProvider>
        <html lang="en" dir="rtl">
          <body className={"bg-bg-100"}>
            <Navbar />
            {children}
          </body>
        </html>
      </AuthProvider>
    </ReactQueryProvider>
  );
}
