import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <Image
            src="/images/logo.svg"
            alt="Styressa Logo"
            width={150}
            height={50}
            className="invert brightness-0" // Make logo white for dark footer
          />
          <p className="text-gray-300 text-sm leading-relaxed">
            Experience the ultimate in luxury and relaxation at Styressa. 
            We bring out your inner beauty with our expert treatments.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg mb-6">Explore</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg mb-6">Contact</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>123 Luxury Avenue, Beverly Hills, CA</li>
            <li>(555) 123-4567</li>
            <li>hello@styressa.com</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-display text-lg mb-6">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gray-300 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gray-300 transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} Styressa Salon. All rights reserved.
      </div>
    </footer>
  );
}
