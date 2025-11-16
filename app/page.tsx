import Footer from "./ui/components/Footer";
import Main from "./ui/components/Main";
import TopBar from "./ui/components/TopBar";
import { verifySession } from "./lib/dal";

export default async function Home() {
  await verifySession();
  return (
    <div className="h-screen  flex flex-col">
      <TopBar />
      <div className="flex grow overflow-scroll">
        <Main />
      </div>
      <Footer />
    </div>
  );
}
