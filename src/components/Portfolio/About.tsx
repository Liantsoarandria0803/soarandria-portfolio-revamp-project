import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, GraduationCap, Trophy, Code, Heart } from 'lucide-react';
import { title } from 'process';
import { Description } from '@radix-ui/react-toast';
import { useLanguage } from '@/lib/i18n';

const About = () => {
  const { language, t } = useLanguage();
  const cvExperiences = [
    {
      period: 'June 2026 - Present',
      title: language === 'fr' ? 'Ingénieur IA consultant / prestataire' : 'AI Engineer Consultant / Contractor',
      company: 'MATSIYA',
      description: language === 'fr'
        ? 'Contribution au développement de Superfasttt AI : création d’un éditeur intelligent de documents, d’une fonctionnalité permettant de piloter Excel avec un agent IA, et d’un assistant intelligent pour Windows avec détection du mot-clé « OpenWakeWord » et interaction vocale.'
        : 'Contributing to the development of Superfasttt AI: building an intelligent document editor, an AI agent feature for controlling Excel, and a smart Windows assistant with OpenWakeWord activation and voice interaction.',
      technologies: ['AI Agents', 'Excel', 'OpenWakeWord', 'Voice Assistant', 'Windows'],
    },
    {
      period: 'May 2025 - Present',
      title: 'AI Research Engineer',
      company: 'LIAM',
      description: language === 'fr'
        ? "Recherche et développement en intelligence artificielle appliquée : expérimentation, évaluation, déploiement et suivi de solutions IA."
        : 'Research and development in applied AI, including experimentation, evaluation, deployment and monitoring of AI solutions.',
      technologies: ['Python', 'PyTorch', 'TensorFlow', 'FastAPI']
    },
    {
      period: 'May 2025 - July 2025',
      title: 'AI Intern',
      company: 'Thorus AI',
      description: language === 'fr'
        ? "Développement et évaluation de modèles de machine learning et deep learning ; préparation des données et amélioration des pipelines ML/DL."
        : 'Developed and evaluated machine learning and deep learning models, prepared data and contributed to improving ML/DL pipelines.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'FastAPI']
    },
    {
      period: 'April 2025 - July 2025',
      title: language === 'fr' ? 'Modélisation macroéconomique prédictive' : 'Predictive Macroeconomic Modeling',
      company: language === 'fr' ? 'Ministère de l’Économie et des Finances' : 'Ministry of Economy and Finance',
      description: language === 'fr'
        ? "Conception d’un modèle structurel multi-équations pour prévoir plus de 80 variables macroéconomiques, dont le PIB, la dette, la fiscalité et l’investissement."
        : 'Designed a multi-equation structural model to forecast 80+ macroeconomic variables, including GDP, debt, taxation and investment.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib']
    }
  ];
  const experiences = [
    {
      period: 'Juin 2026 - present',
      title: 'AI Engineer Consultant',
      company: 'MATSIYA',
      description: 'Consultant en intelligence artificielle, spécialisé dans le développement de solutions basées sur l\'IA pour divers secteurs. Fournir des conseils stratégiques et techniques pour l\'implémentation de projets d\'IA, y compris la conception de modèles, l\'optimisation des algorithmes et l\'intégration de systèmes intelligents.',
      technologies: ['Python', 'FastAPI', 'LangChain', 'TensorFlow', 'PyTorch', 'NLP', 'GenAI', 'Docker','Pydantic']
    },

    {
      period: 'Janvier 2026 - Avril 2026',
      title:'AI developper',
      company: 'Rush School (freelance)',
      description:'Developpement d\'un logiciel student managemennt avec une generation intelligente de documents administratifs',
      technologies: ['python','FastAPI','NLP','GenAI','Typescript','NodeJS','airtable','MongoDB']


    },
    {
      period: 'Septembre 2025 - Decembre 2025',
      title: 'AI engineer internship',
      company: 'Soiby SAS',
      description: 'Participer à la conception et au développement d\'un bot qui fait des commentaires automatiques sur les publications des utilisateurs sur les réseaux sociaux, en utilisant des techniques de traitement du langage naturel (NLP) et d\'apprentissage automatique. Le bot sera capable de générer des commentaires pertinents et engageants en fonction du contenu de la publication et du profil de l\'utilisateur.',
      technologies: ['python','Selenium', 'BeautifulSoup','NLP','GenAI']

    },

    {
      period: 'Mai 2025 - Septembre 2025',
      title: 'AI intern',
      company: 'Thorus AI',
      description: 'Participer à la conception et au développement de modèles d’apprentissage automatique ou profond,participer à l’élaboration des programmes de formation ,Collecter, nettoyer et analyser des données issues de différentes sources , Réaliser des expérimentations, tester des algorithmes et comparer leurs performances',
      technologies: ['python','Tesseract', 'OpenCV', 'Flask', 'FastAPI','TensorFlow', 'PyTorch']
    },
    {
      period: 'Avril 2025 -Septembre 2026',
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
    },
    {
      period: "Sepetmbre 2024 - février 2025",
      title:"Project Coordinator",
      company: "SMART KAJY",
      description: "Gestion de projets et d'activité , mentorat technique et pilotage d’équipes.",
      technologies:[]

    
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
            {language === 'fr' ? 'À propos de moi' : 'About me'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'fr' ? 'Découvrez mon parcours, mes passions et ce qui me motive dans les domaines de l’intelligence artificielle et de la science des données.' : 'Discover my background, passions and what drives me in artificial intelligence and data science.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-8">{language === 'fr' ? 'Parcours académique' : 'Academic background'}</h3>
              <CardContent className="space-y-6">
                {[
                  { year: language === 'fr' ? 'Depuis 2026' : '2026 - Present', title: language === 'fr' ? 'MSc en sciences mathématiques — bourse Google DeepMind' : 'MSc in Mathematical Sciences — Google DeepMind Scholar', place: 'Stellenbosch University · AIMS AI for Science' },
                  { year: '2024 - 2025', title: language === 'fr' ? 'Master 1 en informatique — MISA' : 'Master’s Degree (M1) in Computer Science — MISA', place: language === 'fr' ? 'Université d’Antananarivo, Madagascar' : 'University of Antananarivo, Madagascar' },
                  { year: '2024', title: language === 'fr' ? 'Licence en informatique — MISA' : 'Bachelor’s Degree in Computer Science — MISA', place: language === 'fr' ? 'Université d’Antananarivo, Madagascar' : 'University of Antananarivo, Madagascar' },
                  { year: '2023', title: language === 'fr' ? 'Mathématiques et informatique' : 'Mathematics and Computer Science', place: language === 'fr' ? 'Université d’Antananarivo, Madagascar' : 'University of Antananarivo, Madagascar' },
                ].map((item) => (
                  <div key={item.year} className="flex items-start gap-3">
                    <div className="w-10 h-10 shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-primary font-medium">{item.year}</p>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.place}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {false && (<Card className="p-6">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{t('education')}</h3>
                    <p className="text-muted-foreground">Master 1 en Mathématiques,informatiques et statistiques appliquées </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{t('location')}</h3>
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
            </Card>)}

            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
              {language === 'fr'
                ? 'Passionné par la science des données, l’intelligence artificielle et le développement, je suis un ingénieur IA innovant, autonome et productif. Fort d’une solide base en mathématiques et en informatique, je conçois des solutions intelligentes utiles au quotidien.'
                : 'Passionate about data science, artificial intelligence and software development, I am an innovative, independent and productive AI engineer. With a strong foundation in mathematics and computer science, I build useful intelligent solutions.'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'fr'
                  ? 'J’aime créer des solutions qui ont un impact réel sur la vie des utilisateurs. Mon approche allie expertise technique et créativité pour concevoir des expériences numériques de qualité.'
                  : 'I enjoy creating solutions that make a real difference in people’s lives. My approach combines technical expertise and creativity to build thoughtful digital experiences.'}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'fr'
                  ? 'Quand je ne code pas, je lis sur les nouvelles technologies, contribue à des projets open source ou explore la nature malgache.'
                  : 'When I am not coding, I enjoy reading about emerging technology, contributing to open-source projects and exploring Madagascar’s natural landscapes.'}
              </p>
            </div>
            <br />
            <br />
            
            {false && (<Card className="p-6">
            <h3 className="text-2xl font-bold mb-8">Mon Parcours Académique</h3>
              <CardContent className="space-y-6">
              <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">2025</h3>
                    <p className="text-muted-foreground">Boursier d'un programme "DATA/IA" avec AfricaTechUP </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">2024-2025</h3>
                    <p className="text-muted-foreground">Master 1 en Mathématiques,informatiques et statistiques appliquées </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">2024</h3>
                    <p className="text-muted-foreground">Licence en Mathématiques,informatiques et statistiques appliquées</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">2021-2023</h3>
                    <p className="text-muted-foreground">1ère et 2ème  années de licence en Mathématiques et informatique</p>
                  </div>
                </div>
              </CardContent>
            </Card>)}

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            </div> */}
          </div>

          {false && (<div className="space-y-6">
            <h3 className="text-2xl font-bold">{language === 'fr' ? 'Recherche et projets académiques' : 'Research and academic projects'}</h3>
            <Card className="p-6">
              <CardContent className="space-y-5">
                <div>
                  <h4 className="font-semibold text-lg">{language === 'fr' ? 'MSc en Mathematical Sciences' : 'MSc in Mathematical Sciences'}</h4>
                  <p className="text-primary">Stellenbosch University, South Africa · AIMS AI for Science</p>
                  <p className="text-muted-foreground">{language === 'fr' ? 'Étudiant en master soutenu par la bourse Google DeepMind du programme AIMS AI for Science.' : 'Graduate student supported by the Google DeepMind Scholarship for the AIMS AI for Science programme.'}</p>
                </div>
                <div>
                  <h4 className="font-semibold">{language === 'fr' ? 'Hackathon Data Science Hack4dev — classification d’images CubeSat' : 'Hack4dev Data Science Hackathon — CubeSat image classification'}</h4>
                  <p className="text-muted-foreground">{language === 'fr' ? 'En équipe de trois, développement d’un CNN SeparableConv2D léger pour classer des images astronomiques en cinq catégories. 99,83 % de précision sur le jeu de test aveugle et une exécution environ 10 fois plus rapide que le modèle de référence.' : 'In a three-person team, developed a lightweight SeparableConv2D CNN to classify astronomy images into five classes. Achieved 99.83% accuracy on a blind test set while running about 10× faster than the baseline.'}</p>
                </div>
                <div>
                  <h4 className="font-semibold">{language === 'fr' ? 'Publication en préparation' : 'Manuscript under submission'}</h4>
                  <p className="text-muted-foreground">{language === 'fr' ? 'Co-auteur de « Data Science Hackathons: From Novel Ideas to Deployable Solutions », issu du programme Hack4dev Data Science Hackathon Cascade (2026).' : 'Co-author of “Data Science Hackathons: From Novel Ideas to Deployable Solutions,” from the Hack4dev Data Science Hackathon Cascade Programme (2026).'}</p>
                </div>
                <div>
                  <h4 className="font-semibold">{language === 'fr' ? 'Axes de recherche' : 'Research interests'}</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Deep Learning', 'Neural Network Generalization', 'Representation Learning', 'Large Language Models', 'Efficient & Trustworthy AI'].map((item) => <Badge key={item} variant="secondary">{item}</Badge>)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>)}

          {/* Experience Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">{t('professionalPath')}</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
              
              {cvExperiences.map((experience, index) => (
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
