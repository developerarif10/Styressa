"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "/services" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-white/50 backdrop-blur-sm py-6"
      )}
    >
      <div className="container mx-auto px-6 grid grid-cols-3 items-center">
        {/* Left: Navigation (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-primary hover:text-secondary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu trigger (Left aligned on mobile) */}
         <div className="md:hidden flex justify-start">
          <button
            className="text-primary p-2 hover:bg-secondary/10 rounded-full transition-colors relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center">
          <Link href="/" className="relative w-40 h-10 md:w-56 md:h-14">
             <Image
              src="/images/logo.svg"
              alt="Styressa Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Right: Book Now */}
        <div className="flex justify-end items-center">
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 border-2"
          >
            Book now
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out md:hidden",
          isOpen ? "opacity-100 translate-y-0 pointers-events-auto" : "opacity-0 -translate-y-10 pointer-events-none"
        )}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-3xl -z-10" />

        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-3xl font-display text-primary hover:text-secondary transition-all transform duration-500",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: `${idx * 100}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div 
          className={cn(
            "transition-all duration-700",
             isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
          style={{ transitionDelay: "400ms" }}
        >
          <Button variant="primary" size="lg" onClick={() => setIsOpen(false)} className="px-8 text-lg">
            Book Appointment
          </Button>
        </div>
      </div>
    </nav>
  );
}
