import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-cyber-gray/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-cyber font-bold gradient-text mb-4">
              MOHITH REDDY
            </h3>
            <p className="text-muted-foreground mb-4">
              Web Developer & AI Enthusiast passionate about creating innovative 
              solutions that make a difference.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/23891A1211" target="_blank" rel="noopener noreferrer" 
                 className="p-2 cyber-card rounded-full hover:bg-primary/20 transition-all duration-300">
                <Github className="w-5 h-5 text-primary" />
              </a>
              <a href="https://linkedin.com/in/bhumireddy-mohith-reddy" target="_blank" rel="noopener noreferrer"
                 className="p-2 cyber-card rounded-full hover:bg-secondary/20 transition-all duration-300">
                <Linkedin className="w-5 h-5 text-secondary" />
              </a>
              <a href="mailto:mohithreddy064@gmail.com"
                 className="p-2 cyber-card rounded-full hover:bg-accent/20 transition-all duration-300">
                <Mail className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Services</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Web Application Development</p>
              <p>AI-Driven Solutions</p>
              <p>Tech Consulting & Prototyping</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} BHUMIREDDY MOHITH REDDY. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent" /> and cutting-edge technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;