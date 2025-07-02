import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'saas', label: 'SaaS' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plateforme e-commerce complète avec paiement intégré, gestion d\'inventaire et tableau de bord administrateur.',
      longDescription: 'Développement d\'une solution e-commerce moderne avec React, Node.js et Stripe. Inclut la gestion des produits, commandes, utilisateurs et analytics en temps réel.',
      image: '/api/placeholder/600/400',
      category: 'ecommerce',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      githubUrl: 'https://github.com/Liantsoarandria0803/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management SaaS',
      description: 'Application de gestion de tâches collaborative avec fonctionnalités temps réel et intégrations multiples.',
      longDescription: 'SaaS de productivité permettant aux équipes de collaborer efficacement. Fonctionnalités: kanban boards, chat en temps réel, rapports analytiques.',
      image: '/api/placeholder/600/400',
      category: 'saas',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'Vercel'],
      githubUrl: 'https://github.com/Liantsoarandria0803/task-manager',
      liveUrl: 'https://task-manager-pro.vercel.app',
      featured: true
    },
    {
      id: 3,
      title: 'Mobile Finance App',
      description: 'Application mobile de gestion financière personnelle avec suivi des dépenses et objectifs d\'épargne.',
      longDescription: 'App mobile native pour la gestion financière personnelle. Inclut le suivi des dépenses, budgets, objectifs d\'épargne et visualisations avancées.',
      image: '/api/placeholder/600/400',
      category: 'mobile',
      technologies: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Chart.js'],
      githubUrl: 'https://github.com/Liantsoarandria0803/finance-app',
      liveUrl: 'https://expo.dev/@liantsoa/finance-app',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Designer',
      description: 'Créateur de portfolio en ligne avec templates personnalisables et hébergement intégré.',
      longDescription: 'Plateforme permettant aux créateurs de construire facilement leur portfolio en ligne avec des templates modernes et un système de drag & drop.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Supabase', 'Netlify'],
      githubUrl: 'https://github.com/Liantsoarandria0803/portfolio-builder',
      liveUrl: 'https://portfolio-builder.netlify.app',
      featured: false
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      description: 'Plateforme immobilière avec recherche avancée, visites virtuelles et système de réservation.',
      longDescription: 'Solution complète pour l\'immobilier incluant la recherche de propriétés, visites virtuelles 360°, système de réservation et gestion des agents.',
      image: '/api/placeholder/600/400',
      category: 'web',
      technologies: ['React', 'Django', 'PostgreSQL', 'MapBox', 'Cloudinary'],
      githubUrl: 'https://github.com/Liantsoarandria0803/real-estate',
      liveUrl: 'https://real-estate-mg.vercel.app',
      featured: true
    },
    {
      id: 6,
      title: 'Fitness Tracker App',
      description: 'Application de suivi fitness avec plans d\'entraînement personnalisés et suivi de progression.',
      longDescription: 'App mobile complète pour le fitness avec programmes d\'entraînement, suivi nutritionnel, objectifs personnalisés et communauté intégrée.',
      image: '/api/placeholder/600/400',
      category: 'mobile',
      technologies: ['Flutter', 'Firebase', 'Cloud Functions', 'ML Kit'],
      githubUrl: 'https://github.com/Liantsoarandria0803/fitness-tracker',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.liantsoa.fitness',
      featured: false
    }
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
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Eye className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-muted-foreground">Aperçu du projet</p>
                    </div>
                  </div>
                  
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
        <div className="flex flex-wrap justify-center gap-2 mb-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="project-card group overflow-hidden opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Aperçu du projet</p>
                  </div>
                </div>
                
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