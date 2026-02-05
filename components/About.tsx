import { Button } from "@/components/ui/Button";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Grid - Placeholder using colors if images not available, but user provided assets so I'll try to use a generic approach or reuse hero if permitted, but better to use a placeholder div or check if I can 'generate' one. I'll use a placeholder div with specific styling for now as I only have Hero + Logo. */}
          <div className="relative h-[600px] w-full bg-secondary/10 rounded-sm overflow-hidden">
             {/* Ideally this would be another image. I'll use a placeholder structure or re-use hero cropped if needed, but better to just show a nice color block or placeholder text. 
                 Actually, I'll use a solid color block with a subtle pattern or simply a placeholder message. 
                 For "Real Client Project" feeling, I should perhaps use a placeholder service or just a div.
              */}
              <div className="absolute inset-0 flex items-center justify-center text-primary/20 font-display text-4xl">
                About Image
              </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display text-primary">
              Where Beauty Meets <span className="italic text-secondary">Serenity</span>
            </h2>
            <div className="w-20 h-1 bg-secondary/30" />
            <p className="text-gray-600 leading-relaxed text-lg">
              Founded in 2012, Styressa has established itself as the premier destination 
              for those seeking the highest quality in beauty and wellness. Our philosophy 
              is simple: we believe that true beauty comes from a place of calm.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
               Our team of expert stylists and therapists are dedicated to providing 
               personalized treatments that not only enhance your natural look but also 
               restore your inner peace.
            </p>
            <Button variant="outline" size="md">
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
