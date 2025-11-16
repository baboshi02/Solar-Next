import { verifySession } from "./lib/dal";
import HeroSection from "@/components/hero-section";
import FooterSection from "@/components/footer";
import CallToAction from "@/components/call-to-action";

export default async function Home() {
  await verifySession();
  return (
    <>
      <HeroSection />
      <CallToAction />
      <FooterSection />
    </>
  );
}
