import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Smart Solar System Sizing With AI
          </h2>
          <p className="mt-4">
            Tell us your home appliances and energy usage, and our system
            automatically calculates your total load. Using advanced AI, we
            design the most efficient and cost-effective solar setup tailored to
            your exact needs.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/calculate">
                <span>Get Started</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
