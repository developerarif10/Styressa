"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import { useAppointment } from "@/context/AppointmentContext";
import { servicesData } from "@/data/services";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap params using React.use() or await in useEffect since this is now a Client Component
  // Actually, in Next.js 15+ Client Components can accept promises but handling is trickier. 
  // Let's standard unwrap.
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    params.then((p) => setSlug(p.slug));
  }, [params]);

  const { addService, removeService, selectedServices } = useAppointment();
  
  if (!slug) return null; // Loading state

  // Find the service
  const service = servicesData.flatMap(cat => cat.items).find(item => item.slug === slug);

  if (!service) {
    notFound();
  }

  const isAdded = selectedServices.some(s => s.slug === service.slug);

  const handleAdd = () => {
    addService({
      slug: service.slug,
      title: service.title,
      price: service.price,
      duration: service.duration,
    });
    router.push("/services");
  };

  const handleRemove = () => {
    removeService(service.slug);
    router.push("/services");
  };

  const handleUpdate = () => {
    // For now, update just redirects back as there are no options to change.
    // In future, this would update options.
    router.push("/services");
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/services" className="hover:text-primary transition-colors">
            All services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black font-medium">{service.title}</span>
        </div>

        {/* Content */}
        <div className="max-w-2xl bg-white">
           <h1 className="text-4xl md:text-5xl font-display text-primary mb-4 tracking-tight">
             {service.title}
           </h1>
           
           <div className="flex items-center text-gray-600 mb-6 text-sm">
             <span className="font-medium">{service.price}</span>
             <span className="mx-2">•</span>
             <span>{service.duration}</span>
           </div>

           {/* Description removed from here based on image? No, keep it or match image? 
               Image shows description is hidden or not there for "Women's Haircut", but usually detail page has it.
               The user image shows title, price, duration, then buttons. No big description text visible in the crop.
               I'll keep standard design but swap buttons.
           */}

           {!isAdded ? (
             <>
               <p className="text-gray-500 mb-10 leading-relaxed">
                 {service.description || "Experience our professional service tailored to your specific needs."}
               </p>
               <Button 
                 onClick={handleAdd}
                 className="w-full md:max-w-md bg-black text-white hover:bg-black/90 rounded-sm py-6 text-lg font-medium"
               >
                 Add
               </Button>
             </>
           ) : (
             <div className="flex gap-4 w-full md:max-w-md mt-8">
                <Button 
                  onClick={handleRemove}
                  className="flex-1 bg-gray-100 text-black hover:bg-gray-200 rounded-sm py-6 text-lg font-medium border-none"
                >
                  Remove
                </Button>
                <Button 
                  onClick={handleUpdate}
                  className="flex-1 bg-black text-white hover:bg-black/90 rounded-sm py-6 text-lg font-medium"
                >
                  Update
                </Button>
             </div>
           )}
        </div>

      </div>
      
      {/* Spacer to push footer down if content is short */}
      <div className="h-24"></div> 
      <Footer />
    </main>
  );
}
