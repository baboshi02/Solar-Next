import { HeroHeader } from "@/components/header";
import { connectDB } from "../lib/mongodb";
import { verifySession } from "../lib/dal";
import { findById } from "../db/services/User";

const layout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  await connectDB();
  const { isAuth, userId } = await verifySession();
  const user = await findById(userId as string);
  return (
    <>
      <HeroHeader isAuth={isAuth} username={user!.username} />
      {children}
    </>
  );
};

export default layout;
