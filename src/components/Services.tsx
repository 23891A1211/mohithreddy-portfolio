import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Brain, Wrench, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Application Development",
      description: "Full-stack web applications built with modern technologies like React, Next.js, and Node.js for optimal performance and user experience.",
      icon: Globe,
      features: ["Responsive Design", "Modern UI/UX", "Performance Optimization", "Cross-browser Compatibility"],
      color: "text-primary"
    },
    {
      title: "AI-Driven Solutions",
      description: "Intelligent systems and machine learning applications that solve real-world problems with data-driven insights and automation.",
      icon: Brain,
      features: ["Machine Learning", "Data Analysis", "Predictive Modeling", "Automation"],
      color: "text-secondary"
    },
    {
      title: "Tech Consulting & Prototyping",
      description: "Strategic technology guidance and rapid prototyping to bring your ideas to life with proven methodologies and best practices.",
      icon: Wrench,
      features: ["Technical Strategy", "Rapid Prototyping", "Code Review", "Architecture Design"],
      color: "text-accent"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-cyber-gray/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-cyber font-bold text-center mb-16 gradient-text">
          Software Services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={service.title} className="cyber-card group">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary/20 flex items-center justify-center`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className={`w-2 h-2 rounded-full bg-gradient-primary`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Card className="cyber-card max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate to bring your ideas to life with cutting-edge technology 
                and innovative solutions tailored to your needs.
              </p>
              <Button 
                className="bg-gradient-primary border-none text-white font-semibold px-8 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;