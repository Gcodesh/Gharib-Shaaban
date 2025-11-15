import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "BMI Calculator",
      description:
        "A clean and responsive BMI calculator built with HTML, CSS, and JavaScript, providing instant feedback on health categories.",
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "https://gcodesh.github.io/BMI/",
      github: "https://github.com/gcodesh/BMI",
      image: "/images/bmi.jpg", 
    },
    {
      title: "Personal Portfolio",
      description:
        "A modern and responsive personal portfolio showcasing projects, skills, and experience with smooth animations.",
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "https://gcodesh.github.io/Portfiolio/",
      github: "https://github.com/gcodesh/Portfiolio",
      image: "/images/poro.jpg",
    },
    {
      title: "Client Portfolio",
      description:
        "A custom-designed portfolio website for a client, featuring clean UI, smooth transitions, and optimized responsiveness.",
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "https://gcodesh.github.io/Kareemhegazy/",
      github: "https://github.com/gcodesh/Kareemhegazy",
      image: "/images/clint.png",
    },
    {
      title: "Portfolio Builder",
      description:
        "Responsive portfolio template generator built with HTML/CSS/JS for fast deployment.",
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "#",
      github: "#",
      image: "/images/me.png",
    },
  ];

  return (
    <section id="projects" className="section-spacing bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Projects</h2>
          <p className="text-muted-foreground text-lg">Things I've built</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden card-glow hover:scale-[1.02] transition-all group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* 👇 هنا عرض الصورة بدل أول حرف */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* طبقة خفيفة لجعل النصوص واضحة */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="outline" className="flex-1 group/btn" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1 group/btn" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
