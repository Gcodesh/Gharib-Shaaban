import { Github, Linkedin, Mail, MapPin, Facebook, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("https://formspree.io/f/movjgrdk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Failed to send message",
          description: "Something went wrong, please try again.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong, please try again.",
      });
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-spacing bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to discussing new opportunities,
            creative ideas, or potential collaborations.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
            <a
              href="mailto:GharibabnShaban@gmail.com"
              className="bg-card border border-border rounded-xl p-6 card-glow hover:scale-105 transition-all duration-500 group"
            >
              <Mail className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-semibold text-foreground mb-1">Email</p>
              <p className="text-sm text-muted-foreground">GharibabnShaban@gmail.com</p>
            </a>

            <a
              href="https://wa.me/201024226583"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-6 card-glow hover:scale-105 transition-all duration-500 group"
            >
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-semibold text-foreground mb-1">WhatsApp</p>
              <p className="text-sm text-muted-foreground">+20 102 422 6583</p>
            </a>

            <a
              href="https://github.com/Gcodesh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-6 card-glow hover:scale-105 transition-all duration-500 group"
            >
              <Github className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-semibold text-foreground mb-1">GitHub</p>
              <p className="text-sm text-muted-foreground">github.com/Gcodesh</p>
            </a>

            <a
              href="https://www.linkedin.com/in/abn-shaban-gharib-aa9163358"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-6 card-glow hover:scale-105 transition-all duration-500 group"
            >
              <Linkedin className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-semibold text-foreground mb-1">LinkedIn</p>
              <p className="text-sm text-muted-foreground">linkedin.com/in/abn-shaban-gharib</p>
            </a>

            <a
              href="https://www.facebook.com/share/167i8vaZsd/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-6 card-glow hover:scale-105 transition-all duration-500 group"
            >
              <Facebook className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-semibold text-foreground mb-1">Facebook</p>
              <p className="text-sm text-muted-foreground">facebook.com/gharibshaaban</p>
            </a>

            <div className="bg-card border border-border rounded-xl p-6 card-glow">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-semibold text-foreground mb-1">Location</p>
              <p className="text-sm text-muted-foreground">Cairo, Egypt</p>
            </div>
          </div>

          <div className="pt-8">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
              />
              <Button 
                type="submit"
                size="lg" 
                className={`w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/30 ${isSending ? "opacity-70 cursor-not-allowed" : ""}`}
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
