import { useLanguage } from '@/lib/i18n';
import { motion, useReducedMotion } from 'framer-motion';
import {
  BookOpen, Bot, BrainCircuit, Database, FileText, GraduationCap, Mic,
  Languages, Network, Newspaper, ScanFace, Satellite, ShieldCheck,
} from 'lucide-react';

const artwork = {
  maia: { icon: GraduationCap, label: 'AI learning', labelFr: 'Apprentissage avec IA' },
  malagasy: { icon: Languages, label: 'Malagasy language model', labelFr: 'Modèle de langue malgache' },
  retrieval: { icon: Database, label: 'Document retrieval', labelFr: 'Recherche documentaire' },
  documents: { icon: FileText, label: 'Document generation', labelFr: 'Génération de documents' },
  network: { icon: Network, label: 'Network classification', labelFr: 'Classification réseau' },
  news: { icon: Newspaper, label: 'News verification', labelFr: 'Vérification de l’information' },
  facial: { icon: ScanFace, label: 'Facial stress recognition', labelFr: 'Détection du stress facial' },
  assistant: { icon: Bot, label: 'AI assistant', labelFr: 'Assistant IA' },
  wakeword: { icon: Mic, label: 'Custom wake-word API', labelFr: 'API de mot-clé vocal personnalisé' },
  cubesat: { icon: Satellite, label: 'Satellite image classification', labelFr: 'Classification d’images CubeSat' },
  generalization: { icon: BrainCircuit, label: 'Deep learning research', labelFr: 'Recherche en apprentissage profond' },
} as const;

type ArtworkVariant = keyof typeof artwork;

const ProjectArtwork = ({ variant, title }: { variant: ArtworkVariant; title: string }) => {
  const { icon: Icon, label, labelFr } = artwork[variant];
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <div role="img" aria-label={`${title}: ${label}`} className="relative isolate flex aspect-video w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/30 [perspective:1000px]">
      <div aria-hidden="true" className="absolute inset-0 opacity-40 [background-image:radial-gradient(hsl(var(--primary)/.28)_1px,transparent_1px)] [background-size:22px_22px]" />
      <motion.div aria-hidden="true" className="absolute h-40 w-40 rounded-full border border-primary/20 [transform:rotateX(65deg)]" animate={reduceMotion ? undefined : { rotateZ: 360 }} transition={{ duration: 32, repeat: Infinity, ease: 'linear' }} />
      <motion.div aria-hidden="true" className="absolute h-28 w-28 rounded-full border border-dashed border-primary/30 [transform:rotateY(65deg)]" animate={reduceMotion ? undefined : { rotateZ: -360 }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }} />
      <motion.div
        className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-primary/20 bg-background/80 text-primary shadow-lg backdrop-blur-sm [transform-style:preserve-3d]"
        animate={reduceMotion ? undefined : { y: [0, -7, 0], rotateY: [0, 7, -5, 0] }}
        whileHover={reduceMotion ? undefined : { scale: 1.12, rotateX: -12, rotateY: 16, z: 24 }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Icon aria-hidden="true" className="h-10 w-10" strokeWidth={1.5} />
      </motion.div>
      <motion.div aria-hidden="true" className="absolute left-[28%] top-[27%] text-primary/60" animate={reduceMotion ? undefined : { y: [0, -9, 0], rotateY: [0, 24, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
        <BookOpen className="h-5 w-5" />
      </motion.div>
      <motion.div aria-hidden="true" className="absolute bottom-[27%] right-[28%] text-primary/60" animate={reduceMotion ? undefined : { y: [0, 8, 0], rotateY: [0, -20, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}>
        <ShieldCheck className="h-5 w-5" />
      </motion.div>
      <span aria-hidden="true" className="absolute bottom-4 left-5 rounded-full border border-primary/15 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">{language === 'fr' ? labelFr : label}</span>
    </div>
  );
};

export default ProjectArtwork;
