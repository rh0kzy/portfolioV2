'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && ['en', 'fr'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'fr') {
        setLanguage('fr');
      }
    }
  }, []);

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('portfolio-language', language);

    // Update document direction (LTR for both languages now)
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const translations = getTranslations(language);
    return getNestedValue(translations, key) || key;
  };

  const isRTL = false;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Helper function to get nested object values
const getNestedValue = (obj: Record<string, unknown>, path: string): string => {
  const value = path.split('.').reduce((current: Record<string, unknown> | unknown, key) => {
    return typeof current === 'object' && current !== null ? (current as Record<string, unknown>)[key] : undefined;
  }, obj);
  return typeof value === 'string' ? value : '';
};

// Translation data
const getTranslations = (language: Language) => {
  const translations = {
    en: {
      nav: {
        home: 'Home',
        projects: 'Projects',
        about: 'About',
        skills: 'Skills',
        contact: 'Contact'
      },
      hero: {
        title: 'Hi, I\'m Aymen Belkadi',
        subtitle: 'Computer Engineering Student & Full-Stack Developer',
        description: 'Passionate about creating innovative web applications and AI solutions'
      },
      projects: {
        title: 'Featured Projects',
        viewDetails: 'View Details',
        edenParfum: {
          title: 'Eden Parfum',
          description: 'Luxury perfume e-commerce platform with 507+ fragrances, advanced filtering, and responsive design for premium brand showcase.'
        },
        filmflockCinema: {
          title: 'FilmFlock Cinema',
          description: 'Complete cinema management system with ticket booking, movie scheduling, and administrative dashboard.'
        },
        vertexPlatform: {
          title: 'Vertex Platform',
          description: 'Comprehensive student resource platform with data analytics, visualization tools, and business intelligence features.'
        },
        unoGame: {
          title: 'UNO Game',
          description: 'Multiplayer card game implementation with real-time gameplay and interactive user interface.'
        }
      },
      projectPages: {
        backToProjects: '← Back to Projects',
        technologies: 'Technologies Used',
        features: 'Key Features',
        screenshots: 'Screenshots',
        edenParfum: {
          title: 'Eden Parfum',
          subtitle: 'Luxury Perfume E-commerce Platform',
          description: 'A comprehensive e-commerce solution for luxury perfumes featuring an extensive catalog of over 507 fragrances from premium brands worldwide.',
          overview: 'This project showcases advanced web development techniques with a focus on user experience, performance, and modern design principles. The platform offers a seamless shopping experience with sophisticated filtering options and responsive design.',
          techStack: 'React, Next.js, TypeScript, Tailwind CSS, Firebase',
          keyFeatures: [
            '507+ premium fragrances from luxury brands',
            'Advanced filtering by brand, price, gender, and scent family',
            'Responsive design optimized for all devices',
            'Fast loading times with optimized images',
            'Intuitive user interface with smooth animations',
            'Secure payment integration ready'
          ]
        },
        filmflockCinema: {
          title: 'FilmFlock Cinema',
          subtitle: 'Complete Cinema Management System',
          description: 'A full-featured cinema management platform that handles ticket booking, movie scheduling, and administrative operations for modern cinemas.',
          overview: 'Built with modern web technologies, this system provides a complete solution for cinema operations including real-time seat selection, automated scheduling, and comprehensive admin dashboard.',
          techStack: 'React, Node.js, Express, MongoDB, Socket.io',
          keyFeatures: [
            'Real-time seat selection and booking',
            'Automated movie scheduling system',
            'Comprehensive admin dashboard',
            'User account management',
            'Payment processing integration',
            'Mobile-responsive design'
          ]
        },
        vertexPlatform: {
          title: 'Vertex Platform',
          subtitle: 'Student Resource Management Platform',
          description: 'A comprehensive platform designed to help students manage resources, track progress, and access educational materials efficiently.',
          overview: 'This platform combines data analytics, visualization tools, and business intelligence features to provide students with powerful tools for academic success and career development.',
          techStack: 'React, Python, Django, PostgreSQL, Chart.js',
          keyFeatures: [
            'Data analytics and visualization dashboard',
            'Resource management and tracking',
            'Progress monitoring tools',
            'Collaborative study groups',
            'Assignment and deadline management',
            'Performance analytics'
          ]
        },
        unoGame: {
          title: 'UNO Game',
          subtitle: 'Multiplayer Card Game Implementation',
          description: 'A digital implementation of the classic UNO card game featuring real-time multiplayer gameplay and interactive user interface.',
          overview: 'Built with modern web technologies, this UNO game provides an engaging multiplayer experience with real-time gameplay, chat functionality, and responsive design.',
          techStack: 'React, Socket.io, Node.js, Express, CSS3',
          keyFeatures: [
            'Real-time multiplayer gameplay',
            'Interactive chat system',
            'Responsive design for all devices',
            'Game state synchronization',
            'Player statistics tracking',
            'Customizable game rules'
          ]
        }
      },
      about: {
        title: 'About Me',
        description1: 'I am Aymen Belkadi, a 3rd year Computer Engineering student specializing in Artificial Intelligence. Passionate about application and web development, I combine my academic knowledge with a practical approach to create innovative solutions.',
        description2: 'My engineering journey has enabled me to acquire solid skills in programming, system design, and web development. With contributions on GitHub in the last year, I maintain a consistent coding practice and am constantly seeking new challenges and opportunities to apply my knowledge and develop new skills.',
        achievements: {
          title: 'Key Achievements',
          contributions: 'GitHub Contributions',
          projects: 'Portfolio Projects',
          student: 'AI Engineering Student',
          developer: 'Full-Stack Developer'
        },
        githubActivity: {
          title: 'GitHub Activity',
          refresh: 'Refresh GitHub Data',
          contributions: 'Contributions in the last year',
          repos: 'Public Repositories',
          commits: 'Commits this year',
          summary: 'Consistent coding activity with regular contributions across multiple projects. Strong commitment to continuous learning and development.'
        }
      },
      skills: {
        title: 'Technical Skills',
        programming: {
          title: 'Programming Languages',
          html: 'HTML',
          css: 'CSS',
          javascript: 'JavaScript',
          react: 'React',
          java: 'Java',
          c: 'C',
          python: 'Python'
        },
        mobile: {
          title: 'Mobile Development',
          flutter: 'Flutter',
          reactNative: 'React Native'
        },
        databases: {
          title: 'Databases & Tools',
          mysql: 'MySQL',
          git: 'Git'
        },
        ai: {
          title: 'Artificial Intelligence',
          python: 'Python'
        }
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'Let\'s collaborate',
        description: 'I\'m always interested in new opportunities and exciting projects. Whether you have a project in mind or just want to chat about technology, feel free to reach out!',
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Message',
          send: 'Send Message',
          sending: 'Sending...',
          success: 'Message sent successfully!',
          error: 'Failed to send message. Please try again.'
        }
      },
      admin: {
        login: {
          title: 'Admin Login',
          subtitle: 'Enter your credentials to access the admin panel',
          email: 'Email',
          password: 'Password',
          login: 'Login',
          loading: 'Logging in...',
          error: 'Invalid credentials'
        },
        dashboard: {
          title: 'Admin Dashboard',
          subtitle: 'Manage contact form messages',
          logout: 'Logout',
          stats: {
            total: 'Total Messages',
            unread: 'Unread'
          },
          filters: {
            title: 'Filters & Search',
            search: 'Search messages...',
            all: 'All Messages',
            unread: 'Unread Only',
            read: 'Read Only',
            clear: 'Clear Filters'
          },
          messages: {
            empty: 'No messages found',
            emptyDesc: 'Messages will appear here when visitors contact you.',
            markRead: 'Mark Read',
            from: 'From',
            email: 'Email',
            date: 'Date',
            message: 'Message'
          },
          statsFooter: {
            title: 'Message Statistics'
          }
        }
      },
      language: {
        english: 'English',
        french: 'Français',
        arabic: 'العربية'
      }
    },
    fr: {
      nav: {
        home: 'Accueil',
        projects: 'Projets',
        about: 'À propos',
        skills: 'Compétences',
        contact: 'Contact'
      },
      hero: {
        title: 'Salut, je suis Aymen Belkadi',
        subtitle: 'Étudiant en Génie Informatique & Développeur Full-Stack',
        description: 'Passionné par la création d\'applications web innovantes et de solutions IA'
      },
      projects: {
        title: 'Projets Phares',
        viewDetails: 'Voir les détails',
        edenParfum: {
          title: 'Eden Parfum',
          description: 'Plateforme e-commerce de parfums de luxe avec 507+ fragrances, filtrage avancé et design responsive pour la vitrine de marques premium.'
        },
        filmflockCinema: {
          title: 'FilmFlock Cinema',
          description: 'Système complet de gestion cinématographique avec réservation de billets, programmation de films et tableau de bord administratif.'
        },
        vertexPlatform: {
          title: 'Vertex Platform',
          description: 'Plateforme complète de ressources étudiantes avec analyse de données, outils de visualisation et fonctionnalités de business intelligence.'
        },
        unoGame: {
          title: 'Jeu UNO',
          description: 'Implémentation de jeu de cartes multijoueur avec gameplay en temps réel et interface utilisateur interactive.'
        }
      },
      projectPages: {
        backToProjects: '← Retour aux Projets',
        technologies: 'Technologies Utilisées',
        features: 'Fonctionnalités Clés',
        screenshots: 'Captures d\'Écran',
        edenParfum: {
          title: 'Eden Parfum',
          subtitle: 'Plateforme E-commerce de Parfums de Luxe',
          description: 'Une solution e-commerce complète pour les parfums de luxe présentant un catalogue étendu de plus de 507 fragrances de marques premium du monde entier.',
          overview: 'Ce projet présente des techniques avancées de développement web avec un focus sur l\'expérience utilisateur, les performances et les principes de design moderne. La plateforme offre une expérience d\'achat fluide avec des options de filtrage sophistiquées et un design responsive.',
          techStack: 'React, Next.js, TypeScript, Tailwind CSS, Firebase',
          keyFeatures: [
            '507+ fragrances premium de marques de luxe',
            'Filtrage avancé par marque, prix, genre et famille olfactive',
            'Design responsive optimisé pour tous les appareils',
            'Temps de chargement rapides avec images optimisées',
            'Interface utilisateur intuitive avec animations fluides',
            'Intégration de paiement sécurisé prête'
          ]
        },
        filmflockCinema: {
          title: 'FilmFlock Cinema',
          subtitle: 'Système Complet de Gestion Cinématographique',
          description: 'Une plateforme de gestion cinématographique complète qui gère la réservation de billets, la programmation de films et les opérations administratives pour les cinémas modernes.',
          overview: 'Construit avec des technologies web modernes, ce système fournit une solution complète pour les opérations cinématographiques incluant la sélection de sièges en temps réel, la programmation automatisée et un tableau de bord d\'administration complet.',
          techStack: 'React, Node.js, Express, MongoDB, Socket.io',
          keyFeatures: [
            'Sélection et réservation de sièges en temps réel',
            'Système de programmation de films automatisé',
            'Tableau de bord d\'administration complet',
            'Gestion des comptes utilisateurs',
            'Intégration de traitement des paiements',
            'Design responsive mobile'
          ]
        },
        vertexPlatform: {
          title: 'Vertex Platform',
          subtitle: 'Plateforme de Gestion des Ressources Étudiantes',
          description: 'Une plateforme complète conçue pour aider les étudiants à gérer les ressources, suivre les progrès et accéder aux matériaux éducatifs efficacement.',
          overview: 'Cette plateforme combine l\'analyse de données, les outils de visualisation et les fonctionnalités de business intelligence pour fournir aux étudiants des outils puissants pour la réussite académique et le développement de carrière.',
          techStack: 'React, Python, Django, PostgreSQL, Chart.js',
          keyFeatures: [
            'Tableau de bord d\'analyse de données et de visualisation',
            'Gestion et suivi des ressources',
            'Outils de surveillance des progrès',
            'Groupes d\'étude collaboratifs',
            'Gestion des devoirs et des délais',
            'Analyses de performance'
          ]
        },
        unoGame: {
          title: 'Jeu UNO',
          subtitle: 'Implémentation de Jeu de Cartes Multijoueur',
          description: 'Une implémentation numérique du jeu de cartes classique UNO avec gameplay multijoueur en temps réel et interface utilisateur interactive.',
          overview: 'Construit avec des technologies web modernes, ce jeu UNO fournit une expérience multijoueur engageante avec gameplay en temps réel, fonctionnalité de chat et design responsive.',
          techStack: 'React, Socket.io, Node.js, Express, CSS3',
          keyFeatures: [
            'Gameplay multijoueur en temps réel',
            'Système de chat interactif',
            'Design responsive pour tous les appareils',
            'Synchronisation de l\'état du jeu',
            'Suivi des statistiques des joueurs',
            'Règles de jeu personnalisables'
          ]
        }
      },
      about: {
        title: 'À Propos de Moi',
        description1: 'Je suis Aymen Belkadi, étudiant en 3ème année de Génie Informatique spécialisé en Intelligence Artificielle. Passionné par le développement d\'applications et web, je combine mes connaissances académiques avec une approche pratique pour créer des solutions innovantes.',
        description2: 'Mon parcours d\'ingénieur m\'a permis d\'acquérir des compétences solides en programmation, conception de systèmes et développement web. Avec des contributions sur GitHub cette dernière année, je maintiens une pratique régulière du code et suis constamment à la recherche de nouveaux défis et opportunités pour appliquer mes connaissances et développer de nouvelles compétences.',
        achievements: {
          title: 'Réalisations Clés',
          contributions: 'Contributions GitHub',
          projects: 'Projets Portfolio',
          student: 'Étudiant en IA',
          developer: 'Développeur Full-Stack'
        },
        githubActivity: {
          title: 'Activité GitHub',
          refresh: 'Actualiser les données GitHub',
          contributions: 'Contributions cette dernière année',
          repos: 'Dépôts publics',
          commits: 'Commits cette année',
          summary: 'Activité de codage régulière avec des contributions continues sur plusieurs projets. Engagement fort envers l\'apprentissage continu et le développement.'
        }
      },
      skills: {
        title: 'Compétences Techniques',
        programming: {
          title: 'Langages de Programmation',
          html: 'HTML',
          css: 'CSS',
          javascript: 'JavaScript',
          react: 'React',
          java: 'Java',
          c: 'C',
          python: 'Python'
        },
        mobile: {
          title: 'Développement Mobile',
          flutter: 'Flutter',
          reactNative: 'React Native'
        },
        databases: {
          title: 'Bases de Données & Outils',
          mysql: 'MySQL',
          git: 'Git'
        },
        ai: {
          title: 'Intelligence Artificielle',
          python: 'Python'
        }
      },
      contact: {
        title: 'Contactez-moi',
        subtitle: 'Collaborons ensemble',
        description: 'Je suis toujours intéressé par de nouvelles opportunités et des projets passionnants. Que vous ayez un projet en tête ou que vous souhaitiez simplement discuter de technologie, n\'hésitez pas à me contacter !',
        form: {
          name: 'Nom',
          email: 'Email',
          message: 'Message',
          send: 'Envoyer le message',
          sending: 'Envoi en cours...',
          success: 'Message envoyé avec succès !',
          error: 'Échec de l\'envoi du message. Veuillez réessayer.'
        }
      },
      admin: {
        login: {
          title: 'Connexion Admin',
          subtitle: 'Entrez vos identifiants pour accéder au panneau d\'administration',
          email: 'Email',
          password: 'Mot de passe',
          login: 'Se connecter',
          loading: 'Connexion...',
          error: 'Identifiants invalides'
        },
        dashboard: {
          title: 'Tableau de Bord Admin',
          subtitle: 'Gérer les messages du formulaire de contact',
          logout: 'Déconnexion',
          stats: {
            total: 'Messages Totaux',
            unread: 'Non lus'
          },
          filters: {
            title: 'Filtres & Recherche',
            search: 'Rechercher des messages...',
            all: 'Tous les messages',
            unread: 'Non lus seulement',
            read: 'Lus seulement',
            clear: 'Effacer les filtres'
          },
          messages: {
            empty: 'Aucun message trouvé',
            emptyDesc: 'Les messages apparaîtront ici lorsque les visiteurs vous contacteront.',
            markRead: 'Marquer comme lu',
            from: 'De',
            email: 'Email',
            date: 'Date',
            message: 'Message'
          },
          statsFooter: {
            title: 'Statistiques des Messages'
          }
        }
      },
      language: {
        english: 'English',
        french: 'Français'
      }
    }
  };

  return translations[language] || translations.en;
};