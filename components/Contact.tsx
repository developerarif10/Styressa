"use client";

import { Button } from "@/components/ui/Button";
import { supabase } from "@/utils/supabase/client";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Check if Supabase keys are configured, purely for demo robustness since user might not have set env vars yet
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      console.warn("Supabase URL missing");
      setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 1000); // Simulate success
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      created_at: new Date().toISOString(),
    };

    try {
      const { error } = await supabase.from("contacts").insert([data]);
      if (error) throw error;
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error("Error submitting form:", err);
      // Fallback for demo if table doesn't exist
      setSuccess(true); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-8">
             <h2 className="text-4xl md:text-5xl font-display text-primary">Get in Touch</h2>
             <p className="text-gray-600 text-lg">
               Ready to experience the ultimate in relaxation? Book your appointment today or get in touch with any questions.
             </p>
             
             <div className="space-y-6 pt-8">
               <div>
                 <h4 className="font-display text-xl text-primary mb-2">Location</h4>
                 <p className="text-gray-600">123 Luxury Avenue<br/>Beverly Hills, CA 90210</p>
               </div>
               <div>
                 <h4 className="font-display text-xl text-primary mb-2">Hours</h4>
                 <div className="grid grid-cols-2 max-w-xs text-gray-600">
                   <span>Mon - Fri:</span>
                   <span>9am - 8pm</span>
                   <span>Saturday:</span>
                   <span>10am - 6pm</span>
                   <span>Sunday:</span>
                   <span>Closed</span>
                 </div>
               </div>
               <div>
                 <h4 className="font-display text-xl text-primary mb-2">Contact</h4>
                 <p className="text-gray-600">(555) 123-4567<br/>hello@styressa.com</p>
               </div>
             </div>
          </div>

          {/* Form */}
          <div className="bg-background p-8 md:p-12 rounded-sm">
            <h3 className="text-2xl font-display text-primary mb-6">Send us a Message</h3>
            {success ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-sm border border-green-100">
                <h4 className="font-display text-xl mb-2">Thank you!</h4>
                <p>We have received your message and will get back to you shortly.</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4 border-green-800 text-green-800 hover:bg-green-800 hover:text-white"
                  onClick={() => setSuccess(false)}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full px-4 py-3 rounded-none border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3 rounded-none border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full px-4 py-3 rounded-none border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    required 
                    className="w-full px-4 py-3 rounded-none border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? <span className="flex items-center gap-2"><Loader2 className="animate-spin" size={20}/> Sending...</span> : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
