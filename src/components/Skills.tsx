import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Wrench, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: [
        { name: "Python" },
        { name: "JavaScript" },
        { name: "Java" },
        { name: "C" },
        { name: "HTML/CSS" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Brain,
      skills: [
        { name: "React" },
        { name: "Next.js" },
        { name: "Node.js" },
        { name: "TypeScript" }
      ]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: [
        { name: "MySQL" },
        { name: "Oracle" },
        { name: "Tableau" },
        { name: "Eclipse" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-cyber-gray/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-cyber font-bold text-center mb-16 gradient-text">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="cyber-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="p-3 rounded-lg bg-cyber-gray/30 border border-cyber-gray hover:border-primary/50 transition-colors">
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;