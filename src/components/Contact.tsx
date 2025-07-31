import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-cyber font-bold text-center mb-16 gradient-text">
          Let's Connect
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="cyber-card">
              <CardHeader>
                <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
                <p className="text-muted-foreground">
                  Ready to collaborate on your next project? Let's discuss how we can 
                  bring your ideas to life with innovative technology solutions.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:mohithreddy064@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      mohithreddy064@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-secondary/20">
                    <Linkedin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a href="https://linkedin.com/in/bhumireddy-mohith-reddy" target="_blank" rel="noopener noreferrer" 
                       className="text-muted-foreground hover:text-secondary transition-colors">
                      bhumireddy-mohith-reddy
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <Github className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a href="https://github.com/23891A1211" target="_blank" rel="noopener noreferrer"
                       className="text-muted-foreground hover:text-accent transition-colors">
                      23891A1211
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="cyber-card">
            <CardHeader>
              <h3 className="text-2xl font-semibold">Send a Message</h3>
              <p className="text-muted-foreground">
                Have a project in mind? Let's discuss the details.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="bg-cyber-gray/50 border-cyber-gray focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-cyber-gray/50 border-cyber-gray focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-cyber-gray/50 border-cyber-gray focus:border-primary resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-primary border-none text-white font-semibold">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;