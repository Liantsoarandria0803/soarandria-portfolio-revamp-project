import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Language = 'fr' | 'en';

type TranslationKey =
  | 'home' | 'about' | 'skills' | 'projects' | 'contact' | 'hello' | 'seeProjects'
  | 'contactMe' | 'downloadCv' | 'aboutTitle' | 'aboutLead' | 'education'
  | 'location' | 'experience' | 'academicPath' | 'professionalPath' | 'skillsTitle'
  | 'skillsLead' | 'certifications' | 'favoriteTechnologies' | 'projectsTitle'
  | 'projectsLead' | 'featuredProjects' | 'all' | 'webApps' | 'mobile' | 'ecommerce'
  | 'liveDemo' | 'code' | 'featured' | 'interested' | 'projectCta' | 'startProject'
  | 'contactTitle' | 'contactLead' | 'stayInTouch' | 'followMe' | 'whyChooseMe'
  | 'responseTime' | 'projectsDelivered' | 'yearsExperience' | 'sendMessage'
  | 'fullName' | 'subject' | 'message' | 'send' | 'sending' | 'availability'
  | 'navigation' | 'resources' | 'resume' | 'openSource' | 'backTop' | 'madeWith'
  | 'rights' | 'builtWith';

const translations: Record<Language, Record<TranslationKey, string>> = {
  fr: {
    home: 'Accueil', about: 'À propos', skills: 'Compétences', projects: 'Projets', contact: 'Contact',
    hello: 'Bonjour, je suis', seeProjects: 'Voir mes projets', contactMe: 'Me contacter', downloadCv: 'Télécharger mon CV',
    aboutTitle: 'À propos de moi', aboutLead: "Découvrez mon parcours, mes passions et ce qui me motive dans l'intelligence artificielle et la science des données.",
    education: 'Formation', location: 'Localisation', experience: 'Expérience', academicPath: 'Mon parcours académique', professionalPath: 'Mon parcours professionnel',
    skillsTitle: 'Mes compétences', skillsLead: 'Un aperçu de mes compétences techniques et des technologies que je maîtrise.', certifications: 'Certifications', favoriteTechnologies: 'Technologies favorites',
    projectsTitle: 'Mes projets', projectsLead: 'Découvrez une sélection de mes réalisations les plus significatives.', featuredProjects: 'Projets mis en avant', all: 'Tous', webApps: 'Applications web', mobile: 'Mobile', ecommerce: 'E-commerce',
    liveDemo: 'Démo en ligne', code: 'Code', featured: 'À la une', interested: 'Intéressé par mon travail ?', projectCta: 'Je suis toujours ouvert à discuter de nouveaux projets et opportunités de collaboration.', startProject: 'Démarrons un projet ensemble',
    contactTitle: 'Contactez-moi', contactLead: 'Prêt à donner vie à votre projet ? Discutons de vos idées et transformons-les en réalité.', stayInTouch: 'Restons en contact', followMe: 'Suivez-moi', whyChooseMe: 'Pourquoi me choisir ?', responseTime: 'Temps de réponse', projectsDelivered: 'Projets livrés', yearsExperience: "Années d'expérience", availability: 'Lun - Ven, 9h - 18h',
    sendMessage: 'Envoyez-moi un message', fullName: 'Nom complet', subject: 'Sujet', message: 'Message', send: 'Envoyer le message', sending: 'Envoi en cours...', navigation: 'Navigation', resources: 'Ressources', resume: 'CV / Resume', openSource: 'Open source', backTop: 'Retour en haut', madeWith: 'Développé avec', rights: 'Tous droits réservés.', builtWith: 'Conçu et développé avec React, TypeScript et Tailwind CSS.'
  },
  en: {
    home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact',
    hello: 'Hello, I am', seeProjects: 'View my projects', contactMe: 'Get in touch', downloadCv: 'Download my CV',
    aboutTitle: 'About me', aboutLead: 'Discover my background, passions and what drives me in artificial intelligence and data science.',
    education: 'Education', location: 'Location', experience: 'Experience', academicPath: 'Academic background', professionalPath: 'Professional experience',
    skillsTitle: 'My skills', skillsLead: 'An overview of my technical skills and the technologies I work with.', certifications: 'Certifications', favoriteTechnologies: 'Favorite technologies',
    projectsTitle: 'My projects', projectsLead: 'Explore a selection of my most significant work.', featuredProjects: 'Featured projects', all: 'All', webApps: 'Web apps', mobile: 'Mobile', ecommerce: 'E-commerce',
    liveDemo: 'Live demo', code: 'Code', featured: 'Featured', interested: 'Interested in my work?', projectCta: 'I am always open to discussing new projects and collaboration opportunities.', startProject: 'Let’s start a project together',
    contactTitle: 'Get in touch', contactLead: 'Ready to bring your project to life? Let’s discuss your ideas and turn them into reality.', stayInTouch: 'Let’s stay in touch', followMe: 'Follow me', whyChooseMe: 'Why work with me?', responseTime: 'Response time', projectsDelivered: 'Projects delivered', yearsExperience: 'Years of experience', availability: 'Mon - Fri, 9 AM - 6 PM',
    sendMessage: 'Send me a message', fullName: 'Full name', subject: 'Subject', message: 'Message', send: 'Send message', sending: 'Sending...', navigation: 'Navigation', resources: 'Resources', resume: 'CV / Resume', openSource: 'Open source', backTop: 'Back to top', madeWith: 'Made with', rights: 'All rights reserved.', builtWith: 'Designed and built with React, TypeScript and Tailwind CSS.'
  }
};

type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: (key: TranslationKey) => string };
const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem('portfolio-language') as Language) || 'fr');

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t: (key: TranslationKey) => translations[language][key] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
};
