import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { motion, useReducedMotion } from 'framer-motion';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { language, t } = useLanguage();
  const reduceMotion = useReducedMotion();
  
  const roles = useMemo(() => language === 'fr'
    ? ['INGÉNIEUR IA', 'DATA SCIENTIST', 'STATISTICIEN', 'DÉVELOPPEUR WEB']
    : ['AI ENGINEER', 'DATA SCIENTIST', 'STATISTICIAN', 'WEB DEVELOPER'], [language]);

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

      <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-[18%] z-0 hidden h-52 w-52 [perspective:900px] lg:block">
        <motion.div
          className="relative h-full w-full [transform-style:preserve-3d]"
          animate={reduceMotion ? undefined : { rotateZ: 360, rotateY: [0, 18, 0] }}
          transition={{ rotateZ: { duration: 38, repeat: Infinity, ease: 'linear' }, rotateY: { duration: 9, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <div className="absolute inset-3 rounded-full border border-primary/25 [transform:rotateX(68deg)]" />
          <div className="absolute inset-3 rounded-full border border-accent/25 [transform:rotateY(68deg)]" />
          <div className="absolute inset-8 rounded-full border border-dashed border-primary/20 [transform:rotate3d(1,1,0,58deg)]" />
          <motion.div className="absolute left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_24px_hsl(var(--primary)/.7)]" animate={reduceMotion ? undefined : { y: [0, 12, 0], scale: [1, 1.25, 1] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="absolute bottom-8 left-5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_20px_hsl(var(--accent)/.7)]" animate={reduceMotion ? undefined : { x: [0, 10, 0], y: [0, -8, 0] }} transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }} />
        </motion.div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute bottom-[13%] left-[9%] z-0 hidden h-24 w-24 [perspective:700px] md:block">
        <motion.div className="h-full w-full rounded-[28px] border border-primary/20 bg-primary/5 backdrop-blur-sm [transform:rotateX(58deg)_rotateZ(35deg)] [transform-style:preserve-3d]" animate={reduceMotion ? undefined : { rotateZ: [35, 395], y: [0, -12, 0] }} transition={{ duration: 18, rotateZ: { duration: 28, repeat: Infinity, ease: 'linear' }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="animate-fade-in-up opacity-0 delay-100">
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              {t('hello')}
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
              {language === 'fr'
                ? 'Passionné par la création d’expériences numériques, je transforme les idées en solutions innovantes grâce aux technologies modernes. Je me spécialise en intelligence artificielle, en science des données et en développement web et mobile.'
                : 'Passionate about creating digital experiences, I turn ideas into innovative solutions with modern technology. My focus areas include artificial intelligence, data science, and web and mobile development.'}
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="animate-fade-in-up opacity-0 delay-500">
            <div className="flex flex-col gap-4 justify-center items-center px-4">
              <Button 
                onClick={scrollToProjects}
                className="btn-hero group w-full sm:w-auto"
              >
                {t('seeProjects')}
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button 
                  variant="outline"
                  onClick={scrollToContact}
                  className="btn-outline group w-full sm:w-auto"
                >
                  {t('contactMe')}
                  <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="ghost"
                  className="group hover:bg-primary/10 w-full sm:w-auto"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume1.pdf';
                    link.download = 'CV-Liantsoa-Randria.pdf';
                    link.click();
                  }}
                >
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  {t('downloadCv')}
                </Button>
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
