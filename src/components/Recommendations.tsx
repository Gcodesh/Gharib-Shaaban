import { Quote } from "lucide-react";

const Recommendations = () => {
  const recommendations = [
    {
      text: "Gharib combines creativity and precision—an exceptional developer whose attention to detail stands out.",
      author: "Ahmed Fathi",
      role: "Software Engineer",
      company: ""
    },
    {
      text: "He transforms concepts into polished real-world designs with clarity and dedication.",
      author: "Sara Khaled",
      role: "Project Manager",
      company: ""
    }
  ];

  return (
    <section id="recommendations" className="section-spacing">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Recommendations</h2>
          <p className="text-muted-foreground text-lg">What people say about working with me</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 card-glow hover:scale-105 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary mb-4" />
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                "{rec.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{rec.author}</p>
                <p className="text-sm text-primary">{rec.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
