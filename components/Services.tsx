"use client";

import { AppointmentSummary } from "@/components/AppointmentSummary";
import { Button } from "@/components/ui/Button";
import { useAppointment } from "@/context/AppointmentContext";
import { servicesData } from "@/data/services";
import { ArrowRight, Check, Clock } from "lucide-react";
import Link from "next/link";

export function Services() {
  const { hasItems, selectedServices } = useAppointment();

  return (
    <section id="services" className="bg-[#F9F9F9] min-h-screen py-24">
      <div className={`container mx-auto px-6 ${hasItems ? 'max-w-7xl' : 'max-w-6xl'}`}>
        
        <div className={`flex flex-col lg:flex-row gap-12 ${hasItems ? 'items-start' : ''}`}>
          
          {/* Main Content Area */}
          <div className="flex-1">
            
            {/* Header */}
            <div className="mb-12">
              {!hasItems ? (
                // Original Header
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-8">
                  <div className="max-w-2xl">
                    <span className="text-secondary uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">Our Treatments</span>
                    <h2 className="text-5xl md:text-6xl font-display text-primary leading-tight">
                      Curated Services<br />For Your Style.
                    </h2>
                  </div>
                  <div className="text-right hidden md:block">
                     <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
                      Explore our comprehensive menu of hair and beauty treatments.
                    </p>
                  </div>
                </div>
              ) : (
                // Header when selecting
                <h2 className="text-3xl font-display text-primary mb-8">Add more to your appointment?</h2>
              )}
            </div>

            {/* Services List */}
            <div className="space-y-4">
              {servicesData.flatMap(cat => cat.items).map((service, index) => {
                const isAdded = selectedServices.some(s => s.slug === service.slug);
                
                return (
                  <Link 
                    href={`/services/${service.slug}`}
                    key={index} 
                    className={`group bg-white p-6 md:p-8 rounded-sm transition-all duration-300 border flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer relative overflow-hidden
                      ${isAdded 
                        ? 'border-primary/20 bg-primary/5' 
                        : 'border-transparent hover:border-secondary/10 hover:shadow-xl hover:-translate-y-1'
                      }`}
                  >
                    {/* "Added" Indicator Line */}
                    {isAdded && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />}

                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl md:text-2xl font-display text-primary group-hover:text-secondary transition-colors">
                          {service.title}
                        </h3>
                        {isAdded && (
                          <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                            <Check size={10} /> Added
                          </span>
                        )}
                      </div>
                      <p className="text-gray-500 font-light text-sm max-w-xl group-hover:text-gray-700 transition-colors line-clamp-2">
                        {service.description || "Professional service tailored to your needs."}
                      </p>
                    </div>

                    <div className="flex items-center gap-10 w-full md:w-auto justify-between md:justify-end">
                      <div className="text-right">
                        <span className="block text-lg font-medium text-primary mb-1">{service.price}</span>
                        <span className="flex items-center gap-1 text-xs text-secondary/60 justify-end">
                          <Clock size={12} /> {service.duration}
                        </span>
                      </div>
                      
                      {!isAdded && (
                        <div className="rounded-full bg-transparent p-2 group-hover:bg-secondary/10 text-primary transition-all">
                          <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Bottom Booking CTA (only if no items, otherwise sidebar handles it) */}
            {!hasItems && (
              <div className="mt-24 flex justify-between items-center border-t border-gray-200 pt-12">
                 <div className="space-y-2">
                    <h4 className="text-xl font-display text-primary">Need something custom?</h4>
                    <p className="text-gray-500 text-sm">Contact us for consultation.</p>
                 </div>
                 <Button variant="primary" size="lg" className="px-10 py-6 uppercase tracking-widest text-sm">
                   Book Appointment
                 </Button>
              </div>
            )}
            
          </div>

          {/* Sidebar Area */}
          {hasItems && (
            <div className="w-full lg:w-[400px] flex-shrink-0 animate-in fade-in slide-in-from-right-10 duration-500">
               <AppointmentSummary />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
