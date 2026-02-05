import { Palette, Scissors, Sparkles, User } from "lucide-react";

const services = [
  {
    title: "Hair Styling",
    description: "Expert cuts, coloring, and styling tailored to your unique personality and face shape.",
    icon: Scissors,
    price: "From $80",
  },
  {
    title: "Facial Treatments",
    description: "Rejuvenating facials using premium organic products to restore your skin's natural glow.",
    icon: Sparkles,
    price: "From $120",
  },
  {
    title: "Massage Therapy",
    description: "Relaxing full-body massages designed to relieve stress and improve circulation.",
    icon: User,
    price: "From $90",
  },
  {
    title: "Nail Care",
    description: "Luxurious manicures and pedicures with high-quality, long-lasting polishes.",
    icon: Palette,
    price: "From $45",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display text-primary">Our Services</h2>
          <p className="text-gray-600">Curated treatments for your mind, body, and soul.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 group border border-transparent hover:border-secondary/20"
            >
              <div className="mb-6 text-secondary group-hover:text-primary transition-colors">
                <service.icon size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <span className="text-secondary font-medium block">
                {service.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
