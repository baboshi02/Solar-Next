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
  await connectDB();
  const { isAuth, userId } = await verifySession();
  const user = await findById(userId as string);
  return (
    <html lang="en">
      <body className="bg-third-dark ">
        <HeroHeader isAuth={isAuth} username={user!.username} />
        {children}
      </body>
    </html>
  );
}
