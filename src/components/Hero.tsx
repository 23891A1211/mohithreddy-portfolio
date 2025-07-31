import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "WEB DEVELOPER,DESIGNER| AI ENTHUSIAST | STREAMLINED";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-32 w-48 h-48 bg-secondary/20 rounded-full blur-xl animate-float delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-accent/20 rounded-full blur-xl animate-float delay-2000"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl mx-auto animate-slide-in-up">
        <h1 className="text-5xl md:text-7xl font-cyber font-bold mb-6 glow-text">
          <span className="gradient-text">BHUMIREDDY</span>
          <br />
          <span className="gradient-text">MOHITH REDDY</span>
        </h1>
        
        <div className="text-xl md:text-2xl font-mono text-neon-secondary mb-8 h-8">
          <span className="typewriter">{text}</span>
        </div>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          A web developer, AI enthusiast, contributor, and leader in various impactful projects 
          with an unstoppable drive to innovate and deliver results.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/23891A1211" target="_blank" rel="noopener noreferrer" 
             className="p-3 cyber-card rounded-full hover:bg-primary/20 transition-all duration-300">
            <Github className="w-6 h-6 text-primary" />
          </a>
          <a href="https://linkedin.com/in/bhumireddy-mohith-reddy" target="_blank" rel="noopener noreferrer"
             className="p-3 cyber-card rounded-full hover:bg-secondary/20 transition-all duration-300">
            <Linkedin className="w-6 h-6 text-secondary" />
          </a>
          <a href="mailto:mohithreddy064@gmail.com"
             className="p-3 cyber-card rounded-full hover:bg-accent/20 transition-all duration-300">
            <Mail className="w-6 h-6 text-accent" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-primary border-none text-white font-semibold px-8 py-3 animate-pulse-glow"
          >
            Let's Connect
          </Button>
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('portfolio')}
            className="neon-border text-primary hover:bg-primary/10"
          >
            View My Work
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-float"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;