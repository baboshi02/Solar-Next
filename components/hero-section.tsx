import Image from "next/image";
import SolarImage from "@/public/Solar1.jpg";

export default function HeroSection() {
  return (
    <main className="overflow-x-hidden">
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-24 lg:py-40">
        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
            Your Trusted Solar Partner
          </h1>
          <p className="mt-6 text-lg max-w-xl ">
            We help families and businesses harness the sun with affordable,
            transparent, and reliable solar solutions.
          </p>
        </div>

        <div className="relative w-full max-w-lg h-[350px] md:h-[450px] lg:h-[500px]">
          <Image
            src={SolarImage}
            alt="Solar panel"
            fill
            className="object-cover rounded-2xl shadow-xl"
            priority
          />
        </div>
      </section>
    </main>
  );
}
