import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Smartphone, 
  Cloud, 
  Palette, 
  GitBranch,
  Zap,
  Shield
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('#competences');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'SASS/SCSS', level: 85 }
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'NestJS', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Prisma', level: 85 }
      ]
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      color: 'text-skill-glow',
      bgColor: 'bg-skill-glow/10',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Expo', level: 80 },
        { name: 'Flutter', level: 70 },
        { name: 'PWA', level: 90 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 80 },
        { name: 'Vercel', level: 90 },
        { name: 'Netlify', level: 85 }
      ]
    },
    {
      title: 'Design',
      icon: Palette,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 75 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Responsive Design', level: 95 }
      ]
    },
    {
      title: 'Outils',
      icon: GitBranch,
      color: 'text-skill-glow',
      bgColor: 'bg-skill-glow/10',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 85 }
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: Shield
    },
    {
      title: 'React Advanced Patterns',
      issuer: 'Meta',
      year: '2023',
      icon: Code
    },
    {
      title: 'TypeScript Deep Dive',
      issuer: 'Microsoft',
      year: '2022',
      icon: Zap
    }
  ];

  return (
    <section id="competences" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-primary mb-4">
            Mes Compétences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un aperçu de mes compétences techniques et des technologies que je maîtrise.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card 
                key={categoryIndex} 
                className="p-6 hover:shadow-lg transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="font-bold text-xl">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className={`skill-fill ${isVisible ? 'w-full' : 'w-0'}`}
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8">Certifications & Formations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{cert.title}</h4>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                      <Badge variant="outline" className="mt-2">
                        {cert.year}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Technologies Cloud */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Technologies Favorites</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 
              'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Figma',
              'Express.js', 'Prisma', 'React Native', 'Vue.js', 'SASS'
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;