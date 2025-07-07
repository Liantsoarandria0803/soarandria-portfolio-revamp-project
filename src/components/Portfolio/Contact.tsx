import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin,
  MessageCircle,
  Clock
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'liantsoarandrianasimbolarivelo@gmail.com',
      link: 'mailto:liantsoarandrianasimbolarivelo@gmail.com',
      color: 'text-primary'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+261 32 45 779 76',
      link: 'tel:+261324577976',
      color: 'text-accent'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Antananarivo, Madagascar',
      link: 'https://maps.google.com/?q=Antananarivo,Madagascar',
      color: 'text-skill-glow'
    },
    {
      icon: Clock,
      title: 'Disponibilité',
      value: 'Lun - Ven, 9h - 18h',
      color: 'text-primary'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/Liantsoarandria0803',
      color: 'hover:text-primary'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/liantsoa-rantoniaina-randrianasimbolarivelo-90789a314',
      color: 'hover:text-accent'
    },
    {
      icon: MessageCircle,
      name: 'Discord',
      url: 'https://discord.com/users/liantsoa0803_93031',
      color: 'hover:text-primary'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    setIsSubmitting(true);
    // form submission handled by Formspree via action/method
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-primary mb-4">
            Contactez-moi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prêt à donner vie à votre projet ? Discutons de vos idées et transformons-les en réalité.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Restons en Contact</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Je suis passionné par la création de solutions innovantes et toujours 
                enthousiaste à l'idée de collaborer sur de nouveaux projets. N'hésitez 
                pas à me contacter pour discuter de vos besoins.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Suivez-moi</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent>
                <h4 className="font-semibold mb-4">Pourquoi me choisir ?</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">24h</div>
                    <div className="text-xs text-muted-foreground">Temps de réponse</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">30+</div>
                    <div className="text-xs text-muted-foreground">Projets livrés</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-skill-glow">3+</div>
                    <div className="text-xs text-muted-foreground">Années d'expérience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-xs text-muted-foreground">Satisfaction client</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <CardContent>
              <form 
                action="https://formspree.io/f/mzzdjgpp" 
                method="POST" 
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold mb-6">Envoyez-moi un message</h3>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.com"
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Sujet *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sujet de votre message"
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows={6}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hero group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  En envoyant ce formulaire, vous acceptez que je puisse vous recontacter 
                  concernant votre demande.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
