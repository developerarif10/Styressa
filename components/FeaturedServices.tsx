"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function FeaturedServices() {
  const featuredOnly = [
    {
      title: "Hair Styling",
      description: "Expert cuts tailored to your unique personality and face shape.",
      price: "From $80",
      slug: "womens-haircut-shampoo" // Mapping to a specific popular hair service
    },
    {
      title: "Facial Treatments",
      description: "Rejuvenating facials using premium organic products.",
      price: "From $120",
      slug: "facial-treatments"
    },
    {
      title: "Massage Therapy",
      description: "Relaxing full-body massages to relieve stress.",
      price: "From $90",
      slug: "massage-therapy"
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-10 md:px-16">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
             <h2 className="text-4xl md:text-5xl font-display text-primary mb-4">Our Main Services</h2>
             <p className="text-gray-600 leading-relaxed">
               Discover our most popular treatments. For a full list of hair and beauty services, please view our full menu.
             </p>
          </div>
          <Link href="/services">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-widest text-xs font-semibold px-8 py-6">
              View Full Menu
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredOnly.map((service, index) => (
            <Link 
              href={`/services/${service.slug}`}
              key={index} 
              className="group cursor-pointer bg-gray-50 p-8 rounded-sm hover:shadow-md transition-all block"
            >
              <div className="mb-6 h-48 bg-gray-200 w-full flex items-center justify-center text-gray-400 font-display text-3xl">
                {/* Placeholder Image Block */}
                {index + 1}
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-display text-primary group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 line-clamp-2 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm font-semibold text-primary">
                  {service.price}
                </span>
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                  <ArrowRight size={20} />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
