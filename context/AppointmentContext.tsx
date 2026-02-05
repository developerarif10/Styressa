"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type ServiceItem = {
  slug: string;
  title: string;
  price: string;
  duration: string;
};

type AppointmentContextType = {
  selectedServices: ServiceItem[];
  addService: (service: ServiceItem) => void;
  removeService: (slug: string) => void;
  clearAppointment: () => void;
  hasItems: boolean;
};

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export function AppointmentProvider({ children }: { children: React.ReactNode }) {
  const [selectedServices, setSelectedServices] = useState<ServiceItem[]>([]);
  const [hasItems, setHasItems] = useState(false);

  useEffect(() => {
    setHasItems(selectedServices.length > 0);
  }, [selectedServices]);

  const addService = (service: ServiceItem) => {
    setSelectedServices((prev) => {
      if (prev.find((item) => item.slug === service.slug)) return prev;
      return [...prev, service];
    });
  };

  const removeService = (slug: string) => {
    setSelectedServices((prev) => prev.filter((item) => item.slug !== slug));
  };

  const clearAppointment = () => {
    setSelectedServices([]);
  };

  return (
    <AppointmentContext.Provider value={{ selectedServices, addService, removeService, clearAppointment, hasItems }}>
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error("useAppointment must be used within an AppointmentProvider");
  }
  return context;
}
