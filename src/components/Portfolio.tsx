import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Users, MapPin, DollarSign } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Systemic Arrangement",
      description: "Generates seating plans using user inputs with intelligent algorithms for optimal arrangement.",
      icon: Users,
      demo: "https://v0-college-seating-plan.vercel.app/",
      tech: ["Python", "Algorithm Design", "UI/UX"],
      color: "text-primary"
    },
    {
      title: "Borewell Navigator",
      description: "Checks groundwater levels and finds nearby borewell services using location-based technology.",
      icon: MapPin,
      demo: "https://aqua-well-navigator.lovable.app/",
      tech: ["React", "Geolocation API", "Database"],
      color: "text-secondary"
    },
    {
      title: "AI Finance Tracker",
      description: "Tracks user expenses and suggests investments using machine learning algorithms.",
      icon: DollarSign,
      tech: ["AI/ML", "Financial Analysis", "Data Visualization"],
      color: "text-accent"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-cyber font-bold text-center mb-16 gradient-text">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={project.title} className="cyber-card group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <project.icon className={`w-8 h-8 ${project.color}`} />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="neon-border text-primary hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/23891A1211" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;