import { Button } from "@/components/ui/Button";

export function CallToAction() {
  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-display mb-6">Unlock Your True Radiance</h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
          Step into a world of elegance and relaxation. Your journey to rejuvenation begins here.
        </p>
        <Button variant="primary" size="lg" className="bg-white text-primary hover:bg-white/90 border-transparent">
          Book Your Appointment
        </Button>
      </div>
    </section>
  );
}
