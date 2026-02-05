"use client";

import { Button } from "@/components/ui/Button";
import { useAppointment } from "@/context/AppointmentContext";
import { ChevronUp, Pencil } from "lucide-react";
import { useState } from "react";

export function AppointmentSummary() {
  const { selectedServices, removeService } = useAppointment();
  const [isExpanded, setIsExpanded] = useState(true);

  if (selectedServices.length === 0) return null;

  // Calculate total price (rough estimation, parsing string $)
  // Assuming price format "$45.00" or "From $80"
  const totalPrice = selectedServices.reduce((acc, item) => {
    const priceString = item.price.replace(/[^0-9.]/g, "");
    const price = parseFloat(priceString) || 0;
    return acc + price;
  }, 0);

  // Calculate total duration (rough estimation)
  // this is complex without structured duration, so just counting count for now or showing generic text
  // The design shows "1 hr", let's sum minutes if possible or just show count
  
  return (
    <div className="bg-white border border-gray-100 rounded-sm shadow-sm sticky top-24">
      <div 
        className="p-6 border-b border-gray-100 flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
           <h3 className="font-display text-lg text-primary">
             {selectedServices.length} service{selectedServices.length !== 1 ? "s" : ""}
           </h3>
           <p className="text-sm text-gray-500">
             ${totalPrice.toFixed(2)}+ • {selectedServices.length} items
           </p>
        </div>
        <ChevronUp 
          size={20} 
          className={`text-gray-400 transition-transform ${isExpanded ? "" : "rotate-180"}`} 
        />
      </div>

      {isExpanded && (
        <div className="p-6 space-y-4">
          {selectedServices.map((service, index) => (
            <div key={index} className="flex justify-between items-start gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
               <div className="flex gap-4">
                  {/* Timeline dot/line logic could go here, simplified for now */}
                  <div className="flex flex-col items-center mt-1">
                     <div className="w-2 h-2 rounded-full bg-gray-300" />
                     {index !== selectedServices.length -1 && <div className="w-0.5 h-full bg-gray-100 mt-1 min-h-[20px]" />}
                  </div>
                  <div>
                    <h4 className="font-medium text-primary text-sm">{service.title}</h4>
                    {/* <p className="text-xs text-gray-400">{service.duration}</p> */}
                  </div>
               </div>
               
               <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-primary">{service.price}</span>
                  <a 
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <Pencil size={14} />
                  </a>
               </div>
            </div>
          ))}
        </div>
      )}

      <div className="p-4 bg-gray-50">
        <Button className="w-full bg-black text-white hover:bg-black/90 py-6 text-sm font-semibold uppercase tracking-wider rounded-sm">
           Next
        </Button>
      </div>
    </div>
  );
}
