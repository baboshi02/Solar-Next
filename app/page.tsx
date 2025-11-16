import Footer from "./ui/components/Footer";
import Main from "./ui/components/Main";
import TopBar from "./ui/components/TopBar";
import { verifySession } from "./lib/dal";
import HeroSection from "@/components/hero-section";
import SolarImage from "@/public/Solar3.jpg";
import Image from "next/image";

export default async function Home() {
  await verifySession();
  return <HeroSection />;
}
