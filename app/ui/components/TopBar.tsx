import { Main } from "next/document";
import TopBarButton from "./TopBarButton";

const TopBar = () => {
  return (
    <div className="bg-third-light p-1 text-xl items-center flex">
      <p>Top Bar</p>
      <div className="ml-auto flex gap-2 ">
        <TopBarButton name="logout" />
        <TopBarButton name="checkout" />
        <TopBarButton name="registeration" />
      </div>
    </div>
  );
};

export default TopBar;
