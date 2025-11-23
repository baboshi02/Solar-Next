import { HeroHeader } from "@/components/header";
import "./globals.css";
import { connectDB } from "./lib/mongodb";
import { findById } from "./db/services/User";
import { verifySession } from "./lib/dal";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-third-dark ">{children}</body>
    </html>
  );
}
