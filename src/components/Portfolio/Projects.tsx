import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import ProjectArtwork from './ProjectArtwork';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { language, t } = useLanguage();
  const isFrench = language === 'fr';

  const categories = [
    { id: 'all', label: t('all') },
    { id: 'education', label: isFrench ? 'Éducation' : 'Education' },
    { id: 'language', label: isFrench ? 'Langues & NLP' : 'Language & NLP' },
    { id: 'retrieval', label: 'RAG' },
    { id: 'classification', label: isFrench ? 'Classification IA' : 'AI classification' },
    { id: 'assistant', label: isFrench ? 'Assistants IA' : 'AI assistants' },
  ];

  const technologyLabelsFr: Record<string, string> = {
    'Machine Learning': 'Apprentissage automatique',
    'Network Traffic': 'Trafic réseau',
    'Deep Learning': 'Apprentissage profond',
    'Computer Vision': 'Vision par ordinateur',
    'AI Agents': 'Agents IA',
  };

  const projects = [
    {
      id: 'superfasttt-wakeword',
      title: isFrench ? 'OpenWakeWord — Assistant Superfasttt' : 'OpenWakeWord — Superfasttt Assistant',
      description: isFrench
        ? 'API distante qui entraîne des modèles personnalisés de détection du mot-clé vocal pour l’assistant Windows Superfasttt, à partir d’enregistrements réels et de voix synthétiques.'
        : 'Remote API that trains custom wake-word detection models for the Superfasttt Windows assistant using real recordings and synthetic speech.',
      details: isFrench
        ? 'Le Space combine les enregistrements de l’utilisateur avec des exemples générés par la synthèse vocale Superfasttt/Voxtral et des exemples négatifs. Il entraîne un modèle ONNX, propose des tâches d’entraînement asynchrones, permet de tester un modèle avec un fichier audio et fournit des routes pour enregistrer et tester le modèle utilisé par le client Windows.'
        : 'The Space combines user recordings with Superfasttt/Voxtral text-to-speech samples and negative examples. It trains an ONNX model, supports asynchronous training jobs, tests a model against an audio clip, and provides endpoints for registering and testing the model used by the Windows client.',
      artwork: 'wakeword',
      category: 'assistant',
      technologies: ['Python', 'FastAPI', 'openWakeWord', 'ONNX', 'Voxtral TTS'],
      githubUrl: '',
      liveUrl: 'https://huggingface.co/spaces/Liantsoaxx08/OpenWakeWord1',
    },
    {
      id: 'maia',
      title: 'MAÏA — Ianatrav2',
      description: isFrench
        ? 'Assistante pédagogique IA adaptative pour accompagner la préparation du concours Gardien de la Paix, du baccalauréat et des classes préparatoires.'
        : 'An adaptive AI learning assistant for preparing for the French Police Officer exam, the baccalaureate and preparatory classes.',
      details: isFrench
        ? 'L’agent pédagogique personnalise les sessions à partir du profil et des résultats de l’apprenant. L’application propose un diagnostic de connaissances, suit les progrès et s’appuie sur un corpus de cours avec RAG. L’agent utilise la méthode Feynman et le questionnement socratique.'
        : 'The teaching agent adapts study sessions to each learner’s profile and results. The application provides knowledge diagnostics, tracks progress and uses course material through RAG. Its tutor follows the Feynman method and Socratic questioning.',
      artwork: 'maia',
      category: 'education',
      technologies: ['Python', 'FastAPI', 'Groq', 'RAG'],
      githubUrl: 'https://github.com/Liantsoarandria0803/Ianatrav2/tree/main',
      liveUrl: '',
    },
    {
      id: 'malagasy-gpt2',
      title: isFrench ? 'Génération de texte en malgache' : 'Malagasy Text Generation',
      description: isFrench ? 'Entraînement d’un modèle GPT-2 pour générer du texte en malgache.' : 'Training a GPT-2 model to generate Malagasy text.',
      details: isFrench
        ? 'Projet de génération de texte en malgache, une langue à faibles ressources, à partir d’un modèle de langage GPT-2.'
        : 'A low-resource language generation project that fine-tunes a GPT-2 language model for Malagasy text.',
      artwork: 'malagasy',
      category: 'language',
      technologies: ['Python', 'GPT-2', 'Transformers', 'NLP'],
      githubUrl: 'https://github.com/Liantsoarandria0803/MalagasyTextGenerationTraining',
      liveUrl: '',
    },
    {
      id: 'rag-redis-mongo',
      title: isFrench ? 'Questions-réponses documentaires avec RAG' : 'Document Q&A with RAG',
      description: isFrench ? 'Recherche documentaire et génération de réponses fondées sur les sources.' : 'Document retrieval and source-grounded answer generation.',
      details: isFrench
        ? 'Les documents sont stockés dans MongoDB, transformés en embeddings avec SentenceTransformers, puis indexés dans Redis/RediSearch pour une recherche vectorielle. Un LLM formule une réponse à partir des passages retrouvés.'
        : 'Documents are stored in MongoDB, embedded with SentenceTransformers and indexed in Redis/RediSearch for vector retrieval. An LLM generates answers from the retrieved passages.',
      artwork: 'retrieval',
      category: 'retrieval',
      technologies: ['Python', 'MongoDB', 'Redis', 'SentenceTransformers'],
      githubUrl: 'https://github.com/Liantsoarandria0803/RAG-reddis-Mongo',
      liveUrl: '',
    },
    {
      id: 'processiq-generator',
      title: isFrench ? 'Process IQ — Générateur de documents' : 'Process IQ — Document Generator',
      description: isFrench ? 'API de gestion de candidats et de génération de documents administratifs.' : 'API for candidate management and administrative document generation.',
      details: isFrench
        ? 'Backend Node.js/TypeScript pour gérer les candidats et produire des documents tels que des formulaires CERFA et des fiches de renseignements, avec intégration Airtable et documentation OpenAPI.'
        : 'Node.js/TypeScript backend for managing candidates and producing administrative documents such as CERFA forms and information sheets, with Airtable integration and OpenAPI documentation.',
      artwork: 'documents',
      category: 'education',
      technologies: ['TypeScript', 'Node.js', 'Airtable', 'OpenAPI'],
      githubUrl: 'https://github.com/Liantsoarandria0803/ProcessIQFileGenerator',
      liveUrl: '',
    },
    {
      id: 'darkpacket',
      title: isFrench ? 'Classificateur DarkPacket' : 'DarkPacket Classifier',
      description: isFrench ? 'Classification en temps réel de flux réseau par IA.' : 'Real-time AI classification of network traffic flows.',
      details: isFrench
        ? 'Le prototype agrège les flux réseau sortants par adresse IP et destination, puis estime le type de service correspondant et affiche les résultats dans un tableau de bord Streamlit.'
        : 'The prototype groups outgoing network flows by IP address and destination, predicts the likely service and displays results in a Streamlit dashboard.',
      artwork: 'network',
      category: 'classification',
      technologies: ['Python', 'Machine Learning', 'Streamlit', 'Network Traffic'],
      githubUrl: 'https://github.com/Liantsoarandria0803/DarkPacketClassifier',
      liveUrl: '',
    },
    {
      id: 'fake-news',
      title: isFrench ? 'Détection des fausses informations' : 'Fake News Detection',
      description: isFrench ? 'Classification d’articles de presse pour distinguer les informations vraies et fausses.' : 'News article classification to distinguish real from fake stories.',
      details: isFrench
        ? 'Pipeline NLP appliqué à un jeu de données de plus de 72 000 lignes : nettoyage des doublons et valeurs manquantes, préparation du texte et classification binaire.'
        : 'NLP pipeline applied to a dataset of over 72,000 rows, including duplicate and missing-value cleanup, text preparation and binary classification.',
      artwork: 'news',
      category: 'classification',
      technologies: ['Python', 'NLP', 'Deep Learning', 'Jupyter'],
      githubUrl: 'https://github.com/Liantsoarandria0803/Fake-News-Detection',
      liveUrl: '',
    },
    {
      id: 'facial-stress',
      title: isFrench ? 'Reconnaissance du stress facial' : 'Facial Stress Recognition',
      description: isFrench ? 'CNN de classification d’images faciales entre catégories « stress » et « sans stress ».' : 'CNN that classifies facial images into “stress” and “no stress” categories.',
      details: isFrench
        ? 'Le modèle convolutionnel atteint 88,52 % de précision sur le jeu de données utilisé. Le dépôt documente l’architecture et ses résultats.'
        : 'The convolutional model achieves 88.52% accuracy on its dataset. The repository documents the model architecture and results.',
      artwork: 'facial',
      category: 'classification',
      technologies: ['Python', 'CNN', 'Computer Vision', 'FastAPI'],
      githubUrl: 'https://github.com/Liantsoarandria0803/Facial-Stress-Recognition',
      liveUrl: 'https://huggingface.co/spaces/Liantsoaxx08/Stress-Facial-Recognitipon',
    },
    {
      id: 'friday',
      title: isFrench ? 'FRIDAY — Assistant IA multi-agents' : 'FRIDAY — Multi-Agent AI Assistant',
      description: isFrench ? 'Assistant IA pour les rappels, l’interaction par e-mail et la génération de texte.' : 'AI assistant for reminders, email interaction and text generation.',
      details: isFrench ? 'Projet sélectionné dans le CV. Une démonstration est disponible sur Hugging Face.' : 'Selected in the CV. A live demo is available on Hugging Face.',
      artwork: 'assistant',
      category: 'assistant',
      technologies: ['Python', 'AI Agents', 'NLP', 'LLMs'],
      githubUrl: '',
      liveUrl: 'https://huggingface.co/spaces/Liantsoaxx08/Friday',
    },
  ];

  const visibleProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projets" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-primary mb-4">{t('projectsTitle')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isFrench ? 'Une sélection de projets vérifiés autour de l’IA, de l’éducation et de la science des données.' : 'A curated selection of verified work across AI, education and data science.'}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Filter className="h-5 w-5 text-muted-foreground mr-2 self-center" />
          {categories.map((category) => (
            <Button key={category.id} variant={selectedCategory === category.id ? 'default' : 'outline'} size="sm" onClick={() => setSelectedCategory(category.id)}>
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {visibleProjects.map((project) => (
            <Card
              key={project.id}
              role="group"
              tabIndex={0}
              aria-label={`${isFrench ? 'Ouvrir le projet' : 'Open project'}: ${project.title}`}
              onClick={(event) => {
                const target = event.target as HTMLElement;
                if (target.closest('a, button, summary, details')) return;
                window.open(project.githubUrl || project.liveUrl, '_blank', 'noopener,noreferrer');
              }}
              onKeyDown={(event) => {
                if (event.target !== event.currentTarget || (event.key !== 'Enter' && event.key !== ' ')) return;
                event.preventDefault();
                window.open(project.githubUrl || project.liveUrl, '_blank', 'noopener,noreferrer');
              }}
              className="project-card flex cursor-pointer flex-col overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <a href={project.githubUrl || project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${isFrench ? 'Ouvrir le projet' : 'Open project'}: ${project.title}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset">
                <ProjectArtwork variant={project.artwork} title={project.title} />
              </a>
              <CardContent className="p-6 flex flex-col gap-4 grow">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    <a href={project.githubUrl || project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                      {project.title}
                    </a>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>
                <details className="text-sm">
                  <summary className="cursor-pointer text-primary font-medium">{isFrench ? 'Détails du projet' : 'Project details'}</summary>
                  <p className="text-muted-foreground leading-relaxed mt-2">{project.details}</p>
                </details>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Badge key={technology} variant="secondary">
                      {isFrench ? (technologyLabelsFr[technology] ?? technology) : technology}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto pt-3 border-t border-border flex flex-wrap gap-x-5 gap-y-2">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                      <Github className="h-4 w-4" />
                      {isFrench ? 'Dépôt GitHub' : 'GitHub repository'}
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                      <ExternalLink className="h-4 w-4" />
                      {isFrench ? 'Démo' : 'Live demo'}
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/Liantsoarandria0803?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
            <Github className="h-5 w-5" />
            {isFrench ? 'Voir tous mes dépôts GitHub' : 'Browse all my GitHub repositories'}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
