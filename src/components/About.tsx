const About = () => {
  const skills = [
    "HTML, CSS, JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js (basic)",
    "Git & GitHub",
    "VS Code",
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "2+", label: "Years of Experience" },
    { number: "500+", label: "Commits Pushed" },
  ];

  return (
    <section id="about" className="section-spacing bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">About Me</h2>
          <p className="text-muted-foreground text-lg">Turning ideas into interactive experiences</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a <span className="text-primary font-semibold">creative Front-End Developer and Chemist</span> who 
              loves building elegant, responsive, and user-friendly web experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I blend a scientific mindset with modern web design to create beautiful, logical, 
              and functional digital products. My approach combines analytical thinking from my 
              chemistry background with creative problem-solving in web development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding or experimenting in the lab, you'll find me exploring new 
              frameworks, contributing to open source, or brewing the perfect cup of coffee.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 card-glow hover:scale-105 transition-transform"
              >
                <p className="text-center font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center card-glow"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
