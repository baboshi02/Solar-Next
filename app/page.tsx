import Footer from "./ui/components/Footer";
import Main from "./ui/components/Main";
import SideBar from "./ui/components/Sidebar";
import TopBar from "./ui/components/TopBar";

export default function Home() {
  return (
    <div className="h-screen  flex flex-col">
      <TopBar />
      <div className="flex grow overflow-scroll">
        <SideBar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
