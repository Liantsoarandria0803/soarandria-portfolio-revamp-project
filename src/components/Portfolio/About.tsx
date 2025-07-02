import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, GraduationCap, Trophy, Code, Heart } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      period: 'Mai 2025 - Présent',
      title: 'AI intern',
      company: 'Thorus AI',
      description: 'Participer à la conception et au développement de modèles d’apprentissage automatique ou profond,participer à l’élaboration des programmes de formation ,Collecter, nettoyer et analyser des données issues de différentes sources , Réaliser des expérimentations, tester des algorithmes et comparer leurs performances',
      technologies: ['python','Tesseract', 'OpenCV', 'Flask', 'FastAPI','TensorFlow', 'PyTorch','JAX/Flax']
    },
    {
      period: 'Avril 2025 -Présent',
      title: 'AI Research engineer ',
      company: 'LIAM',
      description: 'Recherche et développement de solutions basées sur l’intelligence artificielle. Test et mise en production de modèles.',
      technologies: ['TensorFlow', 'PyTorch', 'Flask', 'FastAPI', 'Transformers', 'Hugging Face']
    },
    {
      period: 'Décembre 2024 - Mai 2025',
      title: 'AI Developer',
      company: 'Ramaro Fish',
      description: 'Développement de solutions d’intelligence artificielle appliquées à l’aquaculture. Mise en place de modèles prédictifs pour l’optimisation de l’alimentation des poissons, détection automatique des maladies via vision par ordinateur, et automatisation des rapports d’analyse. Utilisation de Python, FastAPI, LangChain pour la mise en œuvre. Collaboration avec les équipes de production pour intégrer les solutions dans les systèmes existants.',
      technologies: ['Python', 'FastAPI', 'LangChain']
    }
  ];

  const achievements = [
    {
      icon: Code,
      title: '40 Projets',
      description: 'Développés avec succès'
    },
    {
      icon: Heart,
      title: '98% Satisfaction',
      description: 'Taux de satisfaction client'
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-primary mb-4">
            À Propos de Moi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mon parcours, mes passions et ce qui me motive dans le domaine de l'intelligence artificielle et la science des données.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <div className="space-y-8">
            <Card className="p-6">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Formation</h3>
                    <p className="text-muted-foreground">Master 1 en Mathématiques,informatiques et statistiques appliquées </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Localisation</h3>
                    <p className="text-muted-foreground">Antananarivo, Madagascar</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-skill-glow/10 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-skill-glow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expérience</h3>
                    <p className="text-muted-foreground">3+ années</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
              Passionné par la science des données, l’intelligence artificielle et le développement, je suis un ingénieur IA
              innovant, autonome et productif. Doté d’une solide base en mathématiques et informatique, je conçois
              des solutions intelligentes utiles au quotidien.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                J'aime créer des solutions qui ont un impact réel sur la vie des utilisateurs. 
                Mon approche combine technique solide et créativité pour livrer des expériences 
                numériques exceptionnelles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Quand je ne code pas, vous me trouverez en train de lire sur les nouvelles technologies, 
                contribuer à des projets open source, ou explorer la nature malgache.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className="text-center p-4 hover:bg-primary/5 transition-colors">
                    <CardContent className="space-y-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-sm">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Mon Parcours Professionnel</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
              
              {experiences.map((experience, index) => (
                <div key={index} className="relative pl-12 pb-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-2 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                          <Badge variant="outline" className="mb-2">
                            {experience.period}
                          </Badge>
                          <h4 className="font-semibold text-lg">{experience.title}</h4>
                          <p className="text-primary font-medium">{experience.company}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {experience.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;