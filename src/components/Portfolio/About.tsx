import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const About = () => {
  const { language, t } = useLanguage();
  const isFrench = language === 'fr';

  const education = [
    {
      year: isFrench ? 'Depuis 2026' : '2026 – Present',
      title: isFrench
        ? 'MSc en sciences mathématiques — bourse Google DeepMind'
        : 'MSc in Mathematical Sciences — Google DeepMind Scholar',
      place: 'Stellenbosch University · AIMS AI for Science',
    },
    {
      year: '2024–2025',
      title: isFrench ? 'Master 1 en informatique — MISA' : 'M1 in Computer Science — MISA',
      place: isFrench ? 'Université d’Antananarivo, Madagascar' : 'University of Antananarivo, Madagascar',
    },
    {
      year: '2024',
      title: isFrench ? 'Licence en informatique — MISA' : 'Bachelor’s degree in Computer Science — MISA',
      place: isFrench ? 'Université d’Antananarivo, Madagascar' : 'University of Antananarivo, Madagascar',
    },
    {
      year: '2023',
      title: isFrench ? 'Mathématiques et informatique' : 'Mathematics and Computer Science',
      place: isFrench ? 'Université d’Antananarivo, Madagascar' : 'University of Antananarivo, Madagascar',
    },
  ];

  const experiences = [
    {
      period: isFrench ? 'Depuis juin 2026' : 'June 2026 – Present',
      title: isFrench ? 'Ingénieur IA consultant / prestataire' : 'AI Engineer Consultant / Contractor',
      company: 'MATSIYA',
      description: isFrench
        ? 'Contribution au développement de Superfasttt AI : éditeur intelligent de documents, commande d’Excel avec un agent IA et assistant vocal intelligent pour Windows avec OpenWakeWord. Le Space OpenWakeWord1 sert à entraîner et tester les mots-clés vocaux de cet assistant.'
        : 'Contributing to Superfasttt AI: an intelligent document editor, an AI agent for controlling Excel, and a smart Windows voice assistant activated with OpenWakeWord. The OpenWakeWord1 Space trains and tests custom wake words for this assistant.',
      technologies: ['AI Agents', 'Excel', 'OpenWakeWord', 'Voice Assistant', 'Windows'],
    },
    {
      period: isFrench ? 'Depuis mai 2025' : 'May 2025 – Present',
      title: isFrench ? 'Ingénieur de recherche en IA' : 'AI Research Engineer',
      company: 'LIAM',
      description: isFrench
        ? 'Recherche et développement en IA appliquée : expérimentation, évaluation, déploiement et suivi de solutions.'
        : 'Research and development in applied AI, including experimentation, evaluation, deployment and monitoring of solutions.',
      technologies: ['Python', 'PyTorch', 'TensorFlow', 'FastAPI'],
    },
    {
      period: isFrench ? 'Mai–juillet 2025' : 'May–July 2025',
      title: isFrench ? 'Stage en intelligence artificielle' : 'AI Intern',
      company: 'Thorus AI',
      description: isFrench
        ? 'Développement et évaluation de modèles de machine learning et de deep learning, préparation des données et amélioration des pipelines.'
        : 'Developed and evaluated machine learning and deep learning models, prepared data and improved ML/DL pipelines.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'FastAPI'],
    },
    {
      period: isFrench ? 'Avril–juillet 2025' : 'April–July 2025',
      title: isFrench ? 'Modélisation macroéconomique prédictive' : 'Predictive Macroeconomic Modeling',
      company: isFrench ? 'Ministère de l’Économie et des Finances' : 'Ministry of Economy and Finance',
      description: isFrench
        ? 'Conception d’un modèle structurel à plusieurs équations pour prévoir plus de 80 variables macroéconomiques, dont le PIB, la dette, la fiscalité et l’investissement.'
        : 'Designed a multi-equation structural model to forecast 80+ macroeconomic variables, including GDP, debt, taxation and investment.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    },
  ];

  return (
    <section id="apropos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-primary mb-4">
            {isFrench ? 'À propos de moi' : 'About me'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isFrench
              ? 'Découvrez mon parcours, mes passions et ce qui me motive dans les domaines de l’intelligence artificielle et de la science des données.'
              : 'Discover my background, passions and what drives me in artificial intelligence and data science.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-8">{t('academicPath')}</h3>
              <CardContent className="space-y-6">
                {education.map((item) => (
                  <div key={item.year + item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCap aria-hidden="true" className="h-5 w-5 text-primary" />
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

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {isFrench
                  ? 'Passionné par la science des données, l’intelligence artificielle et le développement, je conçois des solutions intelligentes utiles au quotidien, en m’appuyant sur ma formation en mathématiques et en informatique.'
                  : 'Passionate about data science, artificial intelligence and software development, I build useful intelligent solutions grounded in my training in mathematics and computer science.'}
              </p>
              <p>
                {isFrench
                  ? 'J’aime créer des solutions qui ont un impact concret. Mon approche associe rigueur technique et créativité pour répondre aux besoins des utilisateurs.'
                  : 'I enjoy creating solutions with a practical impact. My approach combines technical rigor and creativity to meet users’ needs.'}
              </p>
              <p>
                {isFrench
                  ? 'En dehors du code, je m’intéresse aux nouvelles technologies, aux projets open source et à la nature malgache.'
                  : 'Outside of coding, I enjoy exploring new technology, contributing to open-source projects and discovering Madagascar’s natural landscapes.'}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">{t('professionalPath')}</h3>
            <div className="relative">
              <div aria-hidden="true" className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30" />
              {experiences.map((experience) => (
                <div key={experience.company + experience.period} className="relative pl-12 pb-8">
                  <div aria-hidden="true" className="absolute left-2 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="space-y-3">
                      <Badge variant="outline">{experience.period}</Badge>
                      <h4 className="font-semibold text-lg">{experience.title}</h4>
                      <p className="text-primary font-medium">{experience.company}</p>
                      <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((technology) => (
                          <Badge key={technology} variant="secondary" className="text-xs">{technology}</Badge>
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
