import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ecommerce', label: 'E-commerce' },
  ];

  const projects = [
    {
      id: 1,
      title: 'PotatoGuard',
      description: "A web application that helps users to protect their potato plants from pests and diseases by providing information on how to identify and treat them.",
      longDescription: "Application web destinée à l'agriculture intelligente, utilisant le deep learning pour identifier les maladies des plants de pommes de terre et proposer des traitements adaptés.",
      image: '/potatoGuard.png',
      category: 'web',
      technologies: ['React', 'Tailwind CSS', 'FastAPI', 'Tensorflow', 'Docker', 'Deep Learning'],
      githubUrl: 'https://github.com/Liantsoarandria0803/health-ai-mobile-guide',
      liveUrl: 'https://potatoguardrandriaindustries.netlify.app/',
      featured: true
    },
    {
      id: 2,
      title: 'FRIDAY',
      description: "A virtual assistant that can help you with your daily tasks, such as setting reminders, giving you some news, informations, and answering questions.",
      longDescription: "Assistant virtuel intelligent, utilisant NLP et grands modèles de langage pour accomplir des tâches quotidiennes via une interface Gradio.",
      image: '/FRIDAY.png',
      category: 'ai',
      technologies: ['Python', 'NLP', 'Deep Learning', 'Transformers', 'LLMs', 'Gradio'],
      githubUrl: '#',
      liveUrl: 'https://huggingface.co/spaces/Liantsoaxx08/Friday',
      featured: true
    },
    {
      id: 3,
      title: 'FACIAL STRESS DETECTION',
      description: "This project focuses on developing a CNN model to classify facial images into 'stress' and 'no stress' categories with 88.52% accuracy.",
      longDescription: "Classification de niveau de stress facial par CNN, déployée via FastAPI et Hugging Face Spaces pour une interaction en temps réel.",
      image: '/desktopfacial.png',
      category: 'ai',
      technologies: ['CNN', 'Deep Learning', 'FastAPI', 'Hugging Face'],
      githubUrl: 'https://github.com/Liantsoarandria0803/Facial-Stress-Recognition',
      liveUrl: 'https://huggingface.co/spaces/Liantsoaxx08/Stress-Facial-Recognitipon',
      featured: false
    },
    {
      id: 4,
      title: 'BIBLE FOR YOU',
      description: "A mobile application that allows users to search all texts that they want to read by Bible verses.",
      longDescription: "App mobile React Native permettant de rechercher et lire des versets bibliques avec fonctionnalités de favoris et historique.",
      image: '/bible.jpg',
      category: 'mobile',
      technologies: ['React Native', 'Firebase'],
      githubUrl: 'https://github.com/Liantsoarandria0803/Bible-verse-finder',
      liveUrl: '',
      featured: false
    },
    {
      id: 5,
      title: 'FAKE NEWS DETECTION',
      description: "AI-based deep learning algorithm which can detect if news is fake or real by analysing the content.",
      longDescription: "Détection de fausses nouvelles via un modèle NLP entraîné sur un large corpus et déployé en tant qu'API.",
      image: '/FakeNews.png',
      category: 'ai',
      technologies: ['NLP', 'Deep Learning'],
      githubUrl: 'https://github.com/Liantsoarandria0803/Fake-News-Detection',
      liveUrl: '',
      featured: false
    },
    {
      id: 6,
      title: "HAND SIGN LANGUAGE",
      description: "The HAND SIGN LANGUAGE project is a machine learning application designed to recognize hand sign language gestures using Convolutional Neural Networks (CNNs). By leveraging the Sign Language MNIST dataset, this program trains a model to classify different sign gestures into corresponding letters or numbers. The model is highly accurate and can be deployed in real-world applications to facilitate communication between sign language users and non-signers.",
      longDescription: "Reconnaissance des gestes de la langue des signes via CNN, entraîné sur le dataset Sign Language MNIST pour faciliter la communication entre utilisateurs de la langue des signes et non-signants.",
      image: "/images2.png",
      category: "ai",
      technologies: ["CNN", "Deep Learning", "FASTAPI"],
      githubUrl: "https://github.com/Liantsoarandria0803/Sign-language-MNIST",
      liveUrl: "https://huggingface.co/spaces/Liantsoaxx08/Sign-Language-MNIST",
      featured: false
    },
    {
      id: 7,
      title: "BREAST CANCER DIAGNOSTIC",
      description: "Machine learning which can detect if you have breast cancer, it's based with decision trees algorithm that I've been implemented from scratch.",
      longDescription: "Diagnostic du cancer du sein via un algorithme d'arbres de décision implémenté de zéro.",
      image: "breastC.png",
      category: "ai",
      technologies: ["Machine Learning", "Decision Trees"],
      githubUrl: "https://github.com/Liantsoarandria0803/Breast-Cancer-Diagnosis-",
      liveUrl: "",
      featured: false
    },
    {
      id: 8,
      title: "HEART DISEASE DIAGNOSTIC",
      description: "A web application that diagnoses heart disease in an individual. This is powered by the RandriaMLP engine.",
      longDescription: "Application web pour diagnostiquer les maladies cardiaques, alimentée par le moteur RandriaMLP.",
      image: "/Screenshot from 2024-12-26 09-55-51.png",
      category: "web",
      technologies: ["PHP", "Python", "Machine Learning"],
      githubUrl: "https://github.com/Liantsoarandria0803/HEART-DISEASE-DIAGNOSTIC",
      liveUrl: "",
      featured: false
    },
    {
      id: 9,
      title: "MLP BY RANDRIA",
      description: "A multilayer perceptron (MLP) is a type of artificial neural network composed of multiple layers of neurons. The neurons in an MLP typically use nonlinear activation functions, allowing the network to learn complex patterns in the data. This is an ANN model I created that can classify 2 classes (0 or 1).",
      longDescription: "Perceptron multicouche (MLP) conçu pour classifier deux classes (0 ou 1) avec des fonctions d'activation non linéaires.",
      image: "deep.png",
      category: "ai",
      technologies: ["Python"],
      githubUrl: "https://github.com/Liantsoarandria0803/MultiLayersPerceptron",
      liveUrl: "",
      featured: false
    },
    {
      id: 10,
      title: "TEXT SPAM",
      description: "A machine learning algorithm which can detect if your message is spam or not.",
      longDescription: "Détection de messages spam via un algorithme d'apprentissage automatique.",
      image: "",
      category: "ai",
      technologies: ["NLP", "Machine Learning"],
      githubUrl: "https://github.com/Liantsoarandria0803/SpamMessage",
      liveUrl: "",
      featured: false
    },
    {
      id: 11,
      title: "RAIN PREDICTION",
      description: "A machine learning algorithm which can predict raining in function of historical data (Temperature, Pressure, Humidity, Wind's Velocity, Cloud covering).",
      longDescription: "Prédiction de pluie basée sur des données historiques (température, pression, humidité, vitesse du vent, couverture nuageuse) via apprentissage automatique.",
      image: "Screenshot from 2025-01-03 11-33-47.png",
      category: "ai",
      technologies: ["Machine Learning", "Python", "FASTAPI"],
      githubUrl: "https://github.com/Liantsoarandria0803/WeatherForecast",
      liveUrl: "",
      featured: false
    },
    {
      id: 12,
      title: "Hanotan-e",
      description: "This application serves as an online forum platform where users can discuss various topics, share knowledge, ask questions, and provide answers.",
      longDescription: "Plateforme de forum en ligne permettant aux utilisateurs de discuter de divers sujets, partager des connaissances, poser des questions et fournir des réponses.",
      image: "/Screenshot from 2024-12-26 10-05-46.png",
      category: "web",
      technologies: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
      githubUrl: "https://github.com/Liantsoarandria0803/Hanontan-e",
      liveUrl: "",
      featured: false
    },
    {
      id: 13,
      title: "JOYALESTORE",
      description: "A simple dynamic e-commerce website dedicated to selling clothing items.",
      longDescription: "Site e-commerce dynamique dédié à la vente de vêtements.",
      image: "/Screenshot from 2024-12-26 09-53-48.png",
      category: "ecommerce",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://liantsoarandria0803.github.io/JOYA/",
      liveUrl: "",
      featured: false
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projets" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-primary mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations les plus significatives.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <span className="mr-2">🌟</span>
            Projets Mis en Avant
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project) => (
              <Card key={project.id} className="project-card group overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <Badge variant="outline">
                        {categories.find(cat => cat.id === project.category)?.label}
                      </Badge>
                      
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 px-4">
          <Filter className="h-5 w-5 text-muted-foreground mr-2 self-center" />
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all duration-200"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="project-card group overflow-hidden opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-video object-cover w-full h-full"
                />
                
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary text-primary-foreground">
                      ⭐ Featured
                    </Badge>
                  </div>
                )}

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-border">
                    <Badge variant="outline" className="text-xs">
                      {categories.find(cat => cat.id === project.category)?.label}
                    </Badge>
                    
                    <div className="flex space-x-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Intéressé par mon travail ?</h3>
            <p className="text-muted-foreground mb-8">
              Je suis toujours ouvert à discuter de nouveaux projets et opportunités de collaboration.
            </p>
            <Button 
              className="btn-hero"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Démarrons un projet ensemble
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
