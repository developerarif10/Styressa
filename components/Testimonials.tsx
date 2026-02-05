export function Testimonials() {
  const testimonials = [
    {
      quote: "The most relaxing experience of my life. Styressa is a hidden gem.",
      author: "Sarah Mitchell",
      role: "Regular Client",
    },
    {
      quote: "My skin has never looked better. The facial treatments are world-class.",
      author: "Jessica Lee",
      role: "Model",
    },
    {
      quote: "Professional, clean, and incredibly luxurious. Highly recommended.",
      author: "Emily Chen",
      role: "Business Executive",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-primary">Testimonials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 shadow-sm border-t-4 border-secondary/20">
              <p className="text-gray-600 italic mb-6">"{t.quote}"</p>
              <div>
                <h4 className="font-display text-lg text-primary">{t.author}</h4>
                <p className="text-xs text-secondary uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
