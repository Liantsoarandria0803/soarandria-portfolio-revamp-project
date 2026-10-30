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
import { useLanguage } from '@/lib/i18n';

const Skills = () => {
  const { t, language } = useLanguage();
  const isFrench = language === 'fr';

  const skillCategories = [
    {
      title: language === 'fr' ? 'IA et apprentissage automatique' : 'AI & Machine Learning',
      icon: Zap,
      color: 'text-skill-glow',
      bgColor: 'bg-skill-glow/10',
      skills: [
        { name: 'Machine Learning' },
        { name: 'Deep Learning' },
        { name: 'Natural Language Processing' },
        { name: 'Computer Vision' },
        { name: 'Reinforcement Learning' },
        { name: 'Data Analysis' },
        { name: 'Data Visualization' },
        { name: 'AI Ethics' },
        {name :'AI Model Deployment' },
        {name :'LLM Fine-tuning' },
      ]
    },
    {
      title: language === 'fr' ? 'Développement frontend' : 'Frontend',
      icon: Code,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      skills: [
        { name: 'React' },
        {name:'JavaScript' },
        { name: 'TypeScript' },
        { name: 'Vue.js' },
        { name: 'Tailwind CSS' },
      ]
    },
    {
      title: language === 'fr' ? 'Développement backend' : 'Backend',
      icon: Database,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      skills: [
        {name:'FAST-API' },
        {name:'Django' },
        {name:'mySQL' },
        { name: 'Node.js' },
        { name: 'NestJS' },
        { name: 'PostgreSQL' },
        { name: 'Prisma' }
      ]
    },
    {
      title: language === 'fr' ? 'Développement mobile' : 'Mobile',
      icon: Smartphone,
      color: 'text-skill-glow',
      bgColor: 'bg-skill-glow/10',
      skills: [
        { name: 'React Native' }
      ]
    },
    {
      title: language === 'fr' ? 'Cloud et DevOps' : 'Cloud & DevOps',
      icon: Cloud,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      skills: [
        { name: 'AWS' },
        { name: 'Docker' },
        { name: 'Vercel' },
        { name: 'Netlify' }
      ]
    },
    {
      title: language === 'fr' ? 'Conception' : 'Design',
      icon: Palette,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      skills: [
        { name: 'Figma' },
        { name: 'Adobe XD' },
        { name: 'UI/UX Design' },
        { name: 'Responsive Design' }
      ]
    },
    {
      title: language === 'fr' ? 'Outils' : 'Tools',
      icon: GitBranch,
      color: 'text-skill-glow',
      bgColor: 'bg-skill-glow/10',
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'VS Code' },
        { name: 'Postman' }
      ]
    }
  ];

  const skillLabelsFr: Record<string, string> = {
    'Machine Learning': 'Apprentissage automatique', 'Deep Learning': 'Apprentissage profond',
    'Natural Language Processing': 'Traitement automatique du langage', 'Computer Vision': 'Vision par ordinateur',
    'Reinforcement Learning': 'Apprentissage par renforcement', 'Data Analysis': 'Analyse de données',
    'Data Visualization': 'Visualisation de données', 'AI Ethics': 'Éthique de l’IA',
    'AI Model Deployment': 'Déploiement de modèles IA', 'LLM Fine-tuning': 'Ajustement de grands modèles de langage',
    'Responsive Design': 'Conception adaptative', 'UI/UX Design': 'Conception UI/UX',
  };

  const certifications = [
    { id: 1, path: "/RANDRIANASIMBOLARIVELO20240916-74-yim38d.jpg", alt: isFrench ? 'Certificat professionnel' : 'Professional certificate' },
    { id: 2, path: "/RANDRIANASIMBOLARIVELO20241020-72-1e0j7vh.jpg", alt: isFrench ? 'Certificat professionnel' : 'Professional certificate' },
    { id: 3, path: "/Liantsoa Randria - Intro to Machine Learning.png", alt: isFrench ? 'Introduction au machine learning' : 'Introduction to machine learning' },
    { id: 4, path: "/Liantsoa Randria - Pandas.png", alt: isFrench ? 'Certification Pandas' : 'Pandas certification' },
    { id: 5, path: "/Liantsoa Randria - Intro to SQL.png", alt: isFrench ? 'Introduction à SQL' : 'Introduction to SQL' },
    { id: 6, path: "/RANDRIANASIMBOLARIVELO20240916-74-yim38d.jpg", alt: isFrench ? 'Certificat professionnel' : 'Professional certificate' },
    { id: 7, path: "/Liantsoa Randria - Time Series.png", alt: isFrench ? 'Certification en séries temporelles' : 'Time series certification' },
    { id: 8, path: "/LLMfundamentals.webp", alt: isFrench ? 'Fondamentaux des grands modèles de langage' : 'LLM fundamentals' },
    { id: 9, path: "/Finetunning.webp", alt: isFrench ? 'Fondamentaux du fine-tuning' : 'Fine-tuning fundamentals' },
  ];

  return (
    <section id="competences" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-primary mb-4">
            {language === 'fr' ? 'Mes compétences' : 'My skills'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'fr' ? 'Un aperçu de mes compétences techniques et des technologies que je maîtrise.' : 'An overview of my technical skills and the technologies I work with.'}
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
                          <span className="font-medium text-sm">{language === 'fr' ? (skillLabelsFr[skill.name] ?? skill.name) : skill.name}</span>
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
          <h3 className="text-2xl font-bold mb-8 text-foreground">{t('certifications')}</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
            key={`${cert}-${index}`}
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
          <h3 className="text-2xl font-bold mb-8">{t('favoriteTechnologies')}</h3>
          
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
