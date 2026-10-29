import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    {
      title: t('navigation'),
      links: [
        { label: t('home'), href: '#accueil' },
        { label: t('about'), href: '#apropos' },
        { label: t('skills'), href: '#competences' },
        { label: t('projects'), href: '#projets' },
        { label: t('contact'), href: '#contact' }
      ]
    },
    
    {
      title: t('resources'),
      links: [
        { label: t('resume'), href: '/resume1.pdf' },
        { label: t('certifications'), href: '#competences' },
        { label: t('openSource'), href: 'https://github.com/Liantsoarandria0803' }
      ]
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text-primary">
              Liantsoa Randria
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {language === 'fr' ? 'INGÉNIEUR IA, créateur d’expériences numériques innovantes et de solutions web modernes.' : 'AI ENGINEER, creating innovative digital experiences and modern web solutions.'}
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>{t('madeWith')}</span>
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              <span>{language === 'fr' ? 'à Madagascar' : 'in Madagascar'}</span>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p>
                © {currentYear} Liantsoa Randria. {t('rights')}
              </p>
              <p className="mt-1">
                {t('builtWith')}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-muted-foreground">
                Version 2.0
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="group"
              >
                <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
                {t('backTop')}
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-6 border-t border-border/50">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              {language === 'fr' ? 'Ce portfolio est open source et disponible sur ' : 'This portfolio is open source and available on '}
              <a 
                href="https://github.com/Liantsoarandria0803/PortifolioV2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub
              </a>
              {language === 'fr' ? '. N’hésitez pas à le forker ou à contribuer !' : '. Feel free to fork it or contribute!'}
            </p>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;
