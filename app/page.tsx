import { About } from "@/components/About";
import { CallToAction } from "@/components/CallToAction";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  );
}
