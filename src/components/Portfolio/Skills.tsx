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
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

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
      title:'AI & Machine Learning',
      icon: Zap,
      color: 'text-skill-glow',
      bgColor: 'bg-skill-glow/10',
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'Deep Learning', level: 80 },
        { name: 'Natural Language Processing', level: 80 },
        { name: 'Computer Vision', level: 90 },
        { name: 'Reinforcement Learning', level: 65 },
        { name: 'Data Analysis', level: 90 },
        { name: 'Data Visualization', level: 85 },
        { name: 'AI Ethics', level: 70 },
        {name :'AI Model Deployment', level: 90 },
        {name :'LLM Fine-tuning', level: 80 },
      ]
    },
    {
      title: 'Frontend',
      icon: Code,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      skills: [
        { name: 'React', level: 95 },
        {name:'JavaScript', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'Vue.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      skills: [
        {name:'FAST-API', level: 90 },
        {name:'Django', level: 89 },
        {name:'mySQL', level: 90 },
        { name: 'Node.js', level: 80 },
        { name: 'NestJS', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Prisma', level: 80 }
      ]
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      color: 'text-skill-glow',
      bgColor: 'bg-skill-glow/10',
      skills: [
        { name: 'React Native', level: 85 }
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
        { name: 'Vercel', level: 85 },
        { name: 'Netlify', level: 90 }
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
        { name: 'Responsive Design', level: 75 }
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
    { id: 1, path: "/RANDRIANASIMBOLARIVELO20240916-74-yim38d.jpg", alt: "Certification 1" },
    { id: 2, path: "/RANDRIANASIMBOLARIVELO20241020-72-1e0j7vh.jpg", alt: "Certification 2" },
    { id: 3, path: "/Liantsoa Randria - Intro to Machine Learning.png", alt: "Intro to Machine Learning" },
    { id: 4, path: "/Liantsoa Randria - Pandas.png", alt: "Pandas Certification" },
    { id: 5, path: "/Liantsoa Randria - Intro to SQL.png", alt: "Intro to SQL" },
    { id: 6, path: "/RANDRIANASIMBOLARIVELO20240916-74-yim38d.jpg", alt: "Certification 6" },
    {id:7,path:"/Liantsoa Randria - Time Series.png", alt: "Time Series Certification" },
    {id:8,path:"/LLMfundamentals.webp", alt: "LLM fundamentals Certification" },
    {id:8,path:"/Finetunning.webp", alt: "Fine tuning fundamentals Certification" }
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
               <Card 
                key={categoryIndex} 
                className="p-4 md:p-6 hover:shadow-lg transition-all duration-300 group md:hover:scale-105"
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
          <h3 className="text-2xl font-bold mb-8 text-foreground">Certifications</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
            key={cert.id}
              initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }} // Effet de zoom au survol
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-card rounded-xl overflow-hidden shadow-lg border border-border w-full max-w-64 mx-auto"
              >
          <img src={cert.path} alt={cert.alt} className="w-full h-auto object-cover" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies Cloud */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Technologies Favorites</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python','FastAPI','Django','Tensorflow','Transformers','React', 'TypeScript', 'Nest.js', 'Tailwind CSS', 
              'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Figma', 'Prisma', 'React Native'
            ].filter(Boolean).map((tech, index) => (
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