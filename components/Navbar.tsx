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
  { name: "Contact", href: "#contact" },
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
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50">
           <Image
            src="/images/logo.svg"
            alt="Styressa Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                scrolled ? "text-primary" : "text-primary" // Use primary always if hero is light, check contrast later. Assuming hero image allows dark text or has overlay. Based on "light gray" bg request, maybe hero needs dark text? Or white if dark image?
                // Requirements said "Primary deep color". Let's assume dark text on light bg is safer unless verified.
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="primary" size="sm">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-display text-primary hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="primary" size="lg" onClick={() => setIsOpen(false)}>
            Book Appointment
          </Button>
        </div>
      </div>
    </nav>
  );
}
