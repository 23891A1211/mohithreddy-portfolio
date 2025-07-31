import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-cyber font-bold text-center mb-16 gradient-text">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A passionate web developer and AI enthusiast with an unstoppable drive to innovate 
              and deliver results. I specialize in creating cutting-edge solutions that bridge 
              the gap between technology and real-world applications.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With experience in full-stack development and artificial intelligence, I've contributed 
              to and led various impactful projects that showcase my commitment to excellence and 
              continuous learning.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="cyber-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">Education</h3>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">B.Tech in Information Technology</p>
                  <p className="text-muted-foreground">Currently Pursuing</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="cyber-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-semibold text-secondary">Experience</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-start gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">June-July 2024</Badge>
                    </div>
                    <p className="font-medium">AI Developer Intern</p>
                    <p className="text-sm text-muted-foreground">VISHWAM (in collaboration with META)</p>
                  </div>
                  <div>
                    <p className="font-medium">Event Lead</p>
                    <p className="text-sm text-muted-foreground">Algorand Blockchain Club</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;