import HeroSection from "@/components/hero-section";
import FooterSection from "@/components/footer";
import CallToAction from "@/components/call-to-action";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <CallToAction />
      <FooterSection />
    </>
  );
}
