import { deleteSession } from "@/app/lib/sessions";
import TopBarButton, { LogOutButton } from "./TopBarButton";
import { redirect } from "next/navigation";

const TopBar = () => {
  return (
    <div className="bg-third-light p-1 text-xl items-center flex">
      <p>Top Bar</p>
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
