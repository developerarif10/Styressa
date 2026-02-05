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
  { name: "Services", href: "#services" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
          // User requested "beige primary color" (which is our --background / #F2F2F2)
          "bg-[#F2F2F2] py-4 shadow-sm"
        )}
      >
        <div className="container mx-auto px-10 md:px-16 h-full flex items-center justify-between relative">
          
          {/* Desktop Left: Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-start">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-black hover:text-secondary transition-colors uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Left: Menu Toggle */}
           <div className="md:hidden flex-1 flex justify-start">
            <button
              className="text-black p-2 -ml-2 hover:bg-black/5 rounded-full transition-colors relative z-[101]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="relative w-40 h-10 md:w-56 md:h-12 block" onClick={() => setIsOpen(false)}>
               <Image
                src="/images/logo.svg"
                alt="Styressa Logo"
                fill
                className="object-contain" // Assuming logo is dark text? If logo is white, we might need a dark version or filter. User provided logo.svg. Usually standard logos are dark.
                priority
              />
            </Link>
          </div>

          {/* Right: Book Now (Desktop) */}
          <div className="flex-1 flex justify-end items-center">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden md:inline-flex border-black text-black hover:bg-black hover:text-white uppercase tracking-widest text-xs font-semibold px-6"
            >
              Book Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-[#F2F2F2] z-[99] flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out md:hidden",
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-5 invisible"
        )}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-3xl font-display text-black hover:text-secondary transition-all transform duration-500",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${100 + idx * 100}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div 
          className={cn(
            "transition-all duration-700 delay-500",
             isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <Button variant="primary" size="lg" onClick={() => setIsOpen(false)} className="px-10 text-lg uppercase tracking-widest bg-black text-white hover:bg-black/90">
            Book Now
          </Button>
        </div>
      </div>
    </>
  );
}
