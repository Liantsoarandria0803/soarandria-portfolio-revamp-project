import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Développeur Full Stack',
    'Expert React & TypeScript',
    'Architecte Solutions Web',
    'Créateur d\'Expériences Digitales'
  ];

  useEffect(() => {
    const currentString = roles[currentRole];
    const shouldDelete = displayText === currentString && !isDeleting;
    const shouldType = displayText !== currentString && !isDeleting;
    const shouldChangeRole = displayText === '' && isDeleting;

    if (shouldDelete) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (shouldChangeRole) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (shouldType) {
        setDisplayText(currentString.slice(0, displayText.length + 1));
      } else if (isDeleting) {
        setDisplayText(currentString.slice(0, displayText.length - 1));
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentRole, displayText, isDeleting, roles]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl hero-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl hero-float delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-skill-glow/10 rounded-full blur-3xl hero-pulse"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="animate-fade-in-up opacity-0 delay-100">
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Bonjour, je suis
            </p>
          </div>

          {/* Name */}
          <div className="animate-fade-in-up opacity-0 delay-200">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text-primary">Liantsoa</span>{' '}
              <span className="text-foreground">Randria</span>
            </h1>
          </div>

          {/* Animated Role */}
          <div className="animate-fade-in-up opacity-0 delay-300">
            <div className="h-20 md:h-24 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-primary typing-cursor">
                {displayText}
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="animate-fade-in-up opacity-0 delay-400">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Passionné par la création d'expériences numériques exceptionnelles, 
              je transforme les idées en solutions innovantes avec des technologies modernes.
              Spécialisé dans le développement full-stack avec React, TypeScript et Node.js.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="animate-fade-in-up opacity-0 delay-500">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={scrollToProjects}
                className="btn-hero group"
              >
                Voir mes projets
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={scrollToContact}
                className="btn-outline group"
              >
                Me contacter
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                variant="ghost"
                className="group hover:bg-primary/10"
                onClick={() => {
                  // Simulate CV download - replace with actual CV link
                  const link = document.createElement('a');
                  link.href = '/cv-liantsoa-randria.pdf';
                  link.download = 'CV-Liantsoa-Randria.pdf';
                  link.click();
                }}
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                Télécharger CV
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in-up opacity-0 delay-600">
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center text-muted-foreground">
                <span className="text-sm mb-2">Découvrir</span>
                <ChevronDown className="h-6 w-6 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Particles/Dots Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;