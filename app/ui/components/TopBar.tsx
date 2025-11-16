import { deleteSession } from "@/app/lib/sessions";
import TopBarButton, { LogOutButton } from "./TopBarButton";
import { redirect } from "next/navigation";
import { verifySession } from "@/app/lib/dal";
import { findById, findUser } from "@/app/db/services/User";
import { connectDB } from "@/app/lib/mongodb";

const TopBar = async () => {
  await connectDB();
  const { userId } = await verifySession();
  const user = await findById(userId as string);
  return (
    <div className="bg-third-light p-1 text-xl items-center flex">
      <p>{user?.username}</p>
      <div className="ml-auto flex gap-2 ">
        <LogOutButton
          action={async () => {
            "use server";
            await deleteSession();
            redirect("/login");
          }}
        />
        <TopBarButton name="checkout" />
        <TopBarButton name="registeration" />
      </div>
    </div>
  );
};

export default TopBar;
