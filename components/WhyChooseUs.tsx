import { Heart, ShieldCheck, Star } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display mb-16">Why Choose Styressa</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-4 bg-white/10 rounded-full mb-2">
              <Star size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-display">Expert Stylists</h3>
            <p className="text-white/80 max-w-xs">
              Our team usually has over 10 years of experience in the top salons worldwide.
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="p-4 bg-white/10 rounded-full mb-2">
              <ShieldCheck size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-display">Premium Products</h3>
            <p className="text-white/80 max-w-xs">
              We only use organic, eco-friendly, and premium grade products for your safety.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="p-4 bg-white/10 rounded-full mb-2">
              <Heart size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-display">Customer First</h3>
            <p className="text-white/80 max-w-xs">
              Your satisfaction and relaxation is our top priority. We guarantee it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
