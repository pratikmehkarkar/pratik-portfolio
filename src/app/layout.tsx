import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pratik Mehkarkar | Android • AI • Cloud Engineer",
  description:
    "Premium portfolio of Pratik Mehkarkar showcasing enterprise Android, applied AI projects, and Azure/cloud learning journey.",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "Pratik Mehkarkar Portfolio",
    description: "Android, AI, and cloud-focused software engineer portfolio.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
