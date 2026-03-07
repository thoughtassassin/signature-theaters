import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavShell from "@/app/components/NavShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Signature Theaters",
  description: "Luxury home theater installation and smart home integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavShell />
        {children}
      </body>
    </html>
  );
}
