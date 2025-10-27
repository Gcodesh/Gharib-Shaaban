import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Front-End Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      location: "Remote",
      description: [
        "Turning ideas into experiences — that's what I do.",
        "I design and code responsive interfaces that feel smooth, intuitive, and alive.",
        "Every pixel I touch aims to tell a story — one that connects design with emotion and logic.",
      ],
    },
    {
      title: "Student Researcher",
      company: "Al-Azhar University",
      period: "2021 - 2023",
      location: "Cairo, Egypt",
      description: [
        "Studying chemistry taught me the beauty of structure — and how creativity can exist even in precision.",
        "I used AI tools to visualize chemical data, turning raw numbers into clean, interactive dashboards.",
        "It’s where I discovered that great design and great science share the same goal: clarity.",
      ],
    },
    {
      title: "Open Source Contributor",
      company: "Global Dev Community",
      period: "2022 - Present",
      location: "Remote",
      description: [
        "Contributing to open source opened my eyes to global collaboration.",
        "I improved UI components, wrote documentation, and optimized performance for projects led by devs worldwide.",
        "It’s teamwork without borders — where ideas, not locations, define creativity.",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* الخلفية */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/60" />

      <div className="container mx-auto max-w-5xl relative z-10 px-6">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[6px] text-sm text-primary font-semibold animate-fade-in">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gradient mb-3">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            A creative path shaped by curiosity, design, and a love for clean code.
          </p>
        </div>

        <div className="relative flex flex-col gap-16">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative flex items-start gap-6 animate-slide-up"
              style={{ animationDelay: `${i * 0.25}s` }}
            >
              {/* النقطة الجانبية */}
              <div className="relative flex-shrink-0 mt-5">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.8)] animate-pulse-point" />
              </div>

              {/* الكارت */}
              <div className="relative bg-card/70 backdrop-blur-xl border border-border/30 rounded-2xl shadow-2xl hover:shadow-primary/40 transition-all duration-700 group flex-1 p-8 tilt-card">
                {/* العنوان الرئيسي */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
                  <div>
                    <h3 className="text-2xl font-bold flex items-center gap-2 text-foreground mb-1">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>

                  <div className="flex flex-col md:items-end gap-1 text-muted-foreground text-sm mt-2 md:mt-0">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-primary" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-primary" /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* الوصف */}
                <ul className="space-y-3 ml-3 text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                  {exp.description.map((item, j) => (
                    <li
                      key={j}
                      className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-primary/80 before:shadow-[0_0_8px_rgba(147,51,234,0.7)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {/* تأثير الإضاءة */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes pulse-point {
          0%, 100% { box-shadow: 0 0 12px rgba(147,51,234,0.7); transform: scale(1); }
          50% { box-shadow: 0 0 24px rgba(59,130,246,1); transform: scale(1.2); }
        }
        .animate-pulse-point {
          animation: pulse-point 2.5s infinite;
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        /* تأثير 3D subtle tilt */
        .tilt-card {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        .tilt-card:hover {
          transform: rotateY(6deg) rotateX(3deg) scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default Experience;
