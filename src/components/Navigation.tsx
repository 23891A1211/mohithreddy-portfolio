import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-cyber font-bold gradient-text"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          MOHITH REDDY
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {item.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollToSection('#contact')}
            className="bg-gradient-primary border-none text-white font-semibold"
          >
            Hire Me
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-primary border-none text-white font-semibold mt-4"
              >
                Hire Me
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;