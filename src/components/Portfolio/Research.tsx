import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, GraduationCap, Telescope } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { motion, useReducedMotion } from 'framer-motion';
import ProjectArtwork from './ProjectArtwork';

const Research = () => {
  const { language } = useLanguage();
  const isFrench = language === 'fr';
  const reduceMotion = useReducedMotion();

  const projects = [
    {
      title: isFrench ? 'Classification d’images CubeSat' : 'CubeSat Image Classification',
      subtitle: isFrench
        ? 'Hackathon Data Science Hack4dev Cascade · Madagascar · 2025'
        : 'Hack4dev Data Science Hackathon Cascade · Madagascar · 2025',
      artwork: 'cubesat',
      summary: isFrench
        ? 'En équipe de trois, développement d’un CNN SeparableConv2D léger pour classifier des images astronomiques en cinq catégories : floue, corrompue, données manquantes, bruitée et prioritaire, sous contraintes de calcul embarqué.'
        : 'As part of a three-person team, developed a lightweight SeparableConv2D CNN to classify astronomy images into five classes: blurry, corrupt, missing data, noisy and priority, under onboard compute constraints.',
      bullets: isFrench
        ? [
            '99,83 % de précision sur un jeu de test aveugle, proche du score de référence CubeSatNet de 99,85 %.',
            'Inférence environ 10 fois plus rapide : 44,6 s contre 445,5 s pour la référence.',
            'Redimensionnement en 128 × 128, pondération des classes, augmentation légère et comparaison itérative des modèles.',
            'Parmi les 20 solutions retenues sur 48 soumissions réparties entre 13 hackathons régionaux ; contribution à l’article collectif.',
          ]
        : [
            '99.83% accuracy on a blind test set, close to the 99.85% CubeSatNet baseline.',
            'About 10× faster inference: 44.6 s versus 445.5 s for the baseline.',
            'Used 128 × 128 resizing, class weighting, light augmentation and iterative model comparisons.',
            'One of 20 qualifying solutions among 48 submissions across 13 regional hackathons; contributed to the joint paper.',
          ],
      tags: ['Python', 'CNN', 'SeparableConv2D', isFrench ? 'Vision par ordinateur' : 'Computer Vision'],
      url: 'https://github.com/Liantsoarandria0803',
      linkLabel: isFrench ? 'Profil GitHub' : 'GitHub profile',
    },
    {
      title: 'Understanding Deep Learning Requires Rethinking Generalization',
      subtitle: isFrench ? 'Présentation d’article · Zhang et al., ICLR 2017 · Fondements de la recherche en IA, AIMS AI for Science · 2026' : 'Paper presentation · Zhang et al., ICLR 2017 · AI Research Foundations, AIMS AI for Science · 2026',
      artwork: 'generalization',
      summary: isFrench
        ? 'Analyse et présentation d’un article théorique majeur montrant que les réseaux de neurones peuvent mémoriser des étiquettes aléatoires, ce qui remet en question les explications classiques de la généralisation.'
        : 'Analyzed and presented a foundational theory paper showing that neural networks can memorize randomly assigned labels, challenging classical explanations of generalization.',
      bullets: isFrench
        ? [
            'Examen des limites des bornes classiques fondées sur la capacité : dimension VC, complexité de Rademacher et stabilité uniforme.',
            'Mise en relation de l’expressivité à échantillon fini avec les expériences de mémorisation sur CIFAR-10 et ImageNet.',
            'Étude de la régularisation explicite et implicite : dropout, weight decay, augmentation des données et biais implicite de SGD.',
            'Création d’un support complet pour un public de master avec LaTeX Beamer et PowerPoint.',
          ]
        : [
            'Examined why classical capacity-based bounds—VC dimension, Rademacher complexity and uniform stability—do not explain observed generalization.',
            'Connected finite-sample expressivity to random-label memorization experiments on CIFAR-10 and ImageNet.',
            'Reviewed explicit and implicit regularization: dropout, weight decay, data augmentation and SGD’s implicit bias.',
            'Created a complete graduate-level presentation using LaTeX Beamer and PowerPoint.',
          ],
      tags: isFrench
        ? ['Théorie du deep learning', 'Généralisation', 'Régularisation', 'LaTeX Beamer']
        : ['Deep Learning Theory', 'Generalization', 'Regularization', 'LaTeX Beamer'],
      url: 'https://github.com/Liantsoarandria0803',
      linkLabel: isFrench ? 'Profil GitHub' : 'GitHub profile',
    },
  ];

  return (
    <section id="recherche" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <Telescope className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">{isFrench ? 'Recherche' : 'Research'}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-primary mb-4">
            {isFrench ? 'Projets de recherche et académiques' : 'Research & Academic Projects'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isFrench ? 'Projets réalisés dans le cadre de programmes de recherche et de formation avancée.' : 'Selected work completed through research programmes and advanced academic study.'}
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="h-full [perspective:1400px]"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={reduceMotion ? undefined : { y: -7, rotateX: -2, rotateY: 2, scale: 1.008 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              style={{ transformStyle: 'preserve-3d' }}
            >
            <Card className="overflow-hidden h-full">
              <ProjectArtwork variant={project.artwork} title={project.title} />
              <CardContent className="p-6 md:p-8 space-y-5">
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <Badge variant="outline" className="mb-2">{project.subtitle}</Badge>
                    <h3 className="text-xl font-bold leading-snug">{project.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.summary}</p>
                <ul className="space-y-2 list-disc pl-5 text-sm text-muted-foreground">
                  {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                  {project.linkLabel}<ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
