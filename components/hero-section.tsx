import Image from "next/image";
import SolarImage from "@/public/Solar1.jpg";

export default async function HeroSection() {
  return (
    <>
      <main className="overflow-x-hidden  ">
        <section className="flex justify-around h-min items-center">
          <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
            <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">
                  Your Trusted Solar Partner{" "}
                </h1>
                <p className="mt-8 max-w-2xl text-balance text-lg">
                  We help families and businesses harness the sun with
                  affordable, transparent, and reliable solar solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="relative outline-blue-100 h-[500px] w-[800px]">
            <Image
              fill
              className="-z-10 order-first ml-auto   object-cover  sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3  dark:mix-blend-lighten dark:invert-0"
              src={SolarImage}
              alt="Abstract Object"
            />
          </div>
        </section>
      </main>
    </>
  );
}
