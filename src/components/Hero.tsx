import { Github, Linkedin, Mail, MapPin, Facebook, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const lines = [
    "Hi, I'm Gharib Shaaban",
    "I'm a Front-End Developer",
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [text, setText] = useState("");
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && subIndex <= lines[currentLine].length) {
        setText(lines[currentLine].substring(0, subIndex));
        setSubIndex(subIndex + 1);
      } else if (isDeleting && subIndex >= 0) {
        setText(lines[currentLine].substring(0, subIndex));
        setSubIndex(subIndex - 1);
      }

      if (subIndex === lines[currentLine].length + 1 && !isDeleting) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (subIndex === 0 && isDeleting) {
        setIsDeleting(false);
        setCurrentLine((prev) => (prev + 1) % lines.length);
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, currentLine, isDeleting]);

  // Blinking cursor
  useEffect(() => {
    const blinkTimeout = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1
              className={`font-bold text-gradient ${
                currentLine === 1 ? "text-3xl md:text-4xl" : "text-5xl md:text-7xl"
              }`}
            >
              {text}
              <span style={{ opacity: blink ? 1 : 0 }}>|</span>
            </h1>
          </div>

          <p className="text-lg text-accent font-medium mb-4">
            Turning ideas into interactive experiences.
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            With a background in chemistry and a passion for front-end development, I combine research-driven logic with modern UI/UX design to craft clean, functional, and delightful websites.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg shadow-primary/30"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <a href="https://github.com/Gcodesh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/abn-shaban-gharib-aa9163358" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/share/167i8vaZsd/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://wa.me/201024226583" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="mailto:GharibabnShaban@gmail.com" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground pt-4">
            <MapPin className="w-4 h-4" />
            <span>Cairo, Egypt</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2 mt-0">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
