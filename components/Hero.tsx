import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-image.webp"
          alt="Luxury Salon Interior"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay - adjusting opacity for readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white tracking-tight leading-tight">
          Beauty Beyond <br /> <span className="italic font-light">Expectation</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
          Discover a sanctuary of tranquility and style. Expert treatments tailored to unveil your natural radiance.
        </p>
        <div className="pt-8">
          <Button variant="primary" size="lg" className="min-w-[200px] border-white text-primary bg-white hover:bg-white/90">
            Book Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
