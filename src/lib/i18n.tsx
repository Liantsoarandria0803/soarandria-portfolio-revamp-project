import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Language = 'fr' | 'en';

type TranslationKey =
  | 'home' | 'about' | 'skills' | 'projects' | 'contact' | 'hello' | 'seeProjects'
  | 'contactMe' | 'downloadCv' | 'academicPath' | 'professionalPath' | 'certifications'
  | 'favoriteTechnologies' | 'all' | 'contactTitle' | 'stayInTouch' | 'followMe'
  | 'whyChooseMe' | 'sendMessage' | 'fullName' | 'subject' | 'message' | 'send'
  | 'sending' | 'navigation' | 'resources' | 'resume' | 'openSource' | 'backTop'
  | 'madeWith' | 'rights' | 'builtWith' | 'projectsTitle';

const translations: Record<Language, Record<TranslationKey, string>> = {
  fr: {
    home: 'Accueil', about: 'À propos', skills: 'Compétences', projects: 'Projets', contact: 'Contact',
    hello: 'Bonjour, je suis', seeProjects: 'Voir mes projets', contactMe: 'Me contacter', downloadCv: 'Télécharger mon CV',
    academicPath: 'Mon parcours académique', professionalPath: 'Mon parcours professionnel', certifications: 'Certifications',
    favoriteTechnologies: 'Technologies favorites', all: 'Tous', contactTitle: 'Contactez-moi', stayInTouch: 'Restons en contact',
    followMe: 'Suivez-moi', whyChooseMe: 'Pourquoi me choisir ?', sendMessage: 'Envoyez-moi un message', fullName: 'Nom complet',
    subject: 'Sujet', message: 'Message', send: 'Envoyer le message', sending: 'Envoi en cours...', navigation: 'Navigation',
    resources: 'Ressources', resume: 'CV', openSource: 'Open source', backTop: 'Retour en haut', madeWith: 'Développé avec',
    rights: 'Tous droits réservés.', builtWith: 'Conçu et développé avec React, TypeScript et Tailwind CSS.', projectsTitle: 'Mes projets',
  },
  en: {
    home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact',
    hello: 'Hello, I am', seeProjects: 'View my projects', contactMe: 'Get in touch', downloadCv: 'Download my CV',
    academicPath: 'Academic background', professionalPath: 'Professional experience', certifications: 'Certifications',
    favoriteTechnologies: 'Favorite technologies', all: 'All', contactTitle: 'Get in touch', stayInTouch: 'Let’s stay in touch',
    followMe: 'Follow me', whyChooseMe: 'Why work with me?', sendMessage: 'Send me a message', fullName: 'Full name',
    subject: 'Subject', message: 'Message', send: 'Send message', sending: 'Sending...', navigation: 'Navigation',
    resources: 'Resources', resume: 'Resume', openSource: 'Open source', backTop: 'Back to top', madeWith: 'Made with',
    rights: 'All rights reserved.', builtWith: 'Designed and built with React, TypeScript and Tailwind CSS.', projectsTitle: 'My projects',
  },
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('portfolio-language');
    return savedLanguage === 'en' ? 'en' : 'fr';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
    document.title = language === 'fr'
      ? 'Liantsoa Randria — Ingénieur IA | Portfolio'
      : 'Liantsoa Randria — AI Engineer | Portfolio';
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);

    const description = language === 'fr'
      ? 'Portfolio de Liantsoa Randria, ingénieur en intelligence artificielle et étudiant en sciences mathématiques.'
      : 'Portfolio of Liantsoa Randria, AI engineer and mathematical sciences graduate student.';
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', language === 'fr'
      ? 'intelligence artificielle, ingénierie IA, science des données, mathématiques, Madagascar'
      : 'artificial intelligence, AI engineering, data science, mathematics, Madagascar');
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t: (key: TranslationKey) => translations[language][key] }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
};
