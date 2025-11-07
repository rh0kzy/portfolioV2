"use client";

import Script from "next/script";
import Link from "next/link";
import { useLanguage } from '../../../../lib/language-context';
import ImageGallery from '../../components/ImageGallery';

export default function FilmFlockCinema() {
  const { language } = useLanguage();
  const translations = language === 'fr' ? 
    {
      backToProjects: '← Retour aux Projets',
      features: 'Fonctionnalités Clés',
      filmflockCinema: {
        title: 'FilmFlock Cinema',
        subtitle: 'Système Complet de Gestion Cinématographique',
        description: 'Une plateforme de gestion cinématographique complète qui gère la réservation de billets, la programmation de films et les opérations administratives pour les cinémas modernes.',
        overview: 'Construit avec des technologies web modernes, ce système fournit une solution complète pour les opérations cinématographiques incluant la sélection de sièges en temps réel, la programmation automatisée et un tableau de bord d\'administration complet.',
        keyFeatures: [
          'Sélection et réservation de sièges en temps réel',
          'Système de programmation de films automatisé',
          'Tableau de bord d\'administration complet',
          'Gestion des comptes utilisateurs',
          'Intégration de traitement des paiements',
          'Design responsive mobile'
        ]
      }
    } : 
    {
      backToProjects: '← Back to Projects',
      features: 'Key Features',
      filmflockCinema: {
        title: 'FilmFlock Cinema',
        subtitle: 'Complete Cinema Management System',
        description: 'A full-featured cinema management platform that handles ticket booking, movie scheduling, and administrative operations for modern cinemas.',
        overview: 'Built with modern web technologies, this system provides a complete solution for cinema operations including real-time seat selection, automated scheduling, and comprehensive admin dashboard.',
        keyFeatures: [
          'Real-time seat selection and booking',
          'Automated movie scheduling system',
          'Comprehensive admin dashboard',
          'User account management',
          'Payment processing integration',
          'Mobile-responsive design'
        ]
      }
    };
  return (
    <div style={{
      background: '#0d1117',
      color: '#e6edf3',
      minHeight: '100vh',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%)',
        padding: '120px 20px 80px',
        textAlign: 'center'
      }}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <div style={{
            width: '180px',
            height: '180px',
            margin: '0 auto 30px',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
          }}>
            <img src="/projects/filmflock-cinema/cinemaLogo.jpg" alt="FilmFlock Cinema Logo" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
          
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #58a6ff, #a5b4fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {translations.filmflockCinema.title}
          </h1>
          
          <p style={{
            fontSize: '1.5rem',
            color: '#8b949e',
            marginBottom: '40px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {translations.filmflockCinema.description}
          </p>
          
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '30px'}}>
            <span style={{background: 'linear-gradient(135deg, #238636, #2ea043)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Java</span>
            <span style={{background: 'linear-gradient(135deg, #1f6feb, #58a6ff)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Swing</span>
            <span style={{background: 'linear-gradient(135deg, #f97316, #fb923c)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>MySQL</span>
            <span style={{background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>MVC</span>
            <span style={{background: 'linear-gradient(135deg, #238636, #2ea043)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>CRUD Operations</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '80px 20px'}}>
        <Link href="/projects" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          color: '#58a6ff',
          textDecoration: 'none',
          padding: '12px 24px',
          border: '2px solid #58a6ff',
          borderRadius: '50px',
          fontWeight: '600',
          marginBottom: '40px',
          background: 'rgba(88, 166, 255, 0.1)'
        }}>
          <i className="fas fa-arrow-left"></i>
          {translations.backToProjects}
        </Link>

        {/* Project Overview */}
        <div style={{
          background: '#161b22',
          padding: '40px',
          borderRadius: '20px',
          border: '1px solid #30363d',
          marginBottom: '30px'
        }}>
          <h2 style={{fontSize: '1.8rem', fontWeight: '700', marginBottom: '20px', color: '#e6edf3', display: 'flex', alignItems: 'center', gap: '15px'}}>
            <i className="fas fa-info-circle" style={{color: '#58a6ff'}}></i> 
            {translations.filmflockCinema.subtitle}
          </h2>
          <p style={{color: '#8b949e', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '25px'}}>
            {translations.filmflockCinema.overview}
          </p>

          {/* Key Features */}
          <div style={{marginTop: '30px'}}>
            <h3 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '20px', color: '#e6edf3'}}>{translations.features}</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {translations.filmflockCinema.keyFeatures.map((feature: string, index: number) => (
                <div key={index} style={{
                  background: '#21262d',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '1px solid #30363d'
                }}>
                  <i className={`fas fa-${index === 0 ? 'ticket-alt' : index === 1 ? 'calendar-alt' : index === 2 ? 'users' : index === 3 ? 'database' : index === 4 ? 'chart-bar' : 'shield-alt'}`} style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                  <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>{feature.split(':')[0]}</h4>
                  <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '20px',
            margin: '30px 0',
            padding: '25px',
            background: '#21262d',
            borderRadius: '12px',
            border: '1px solid #30363d'
          }}>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>5,000+</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Lines of Code</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>12</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Database Tables</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>300+</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Seat Capacity</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>Real-time</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Updates</span>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        <ImageGallery 
          images={[
            { src: '/projects/filmflock-cinema/cinema1.png', alt: 'FilmFlock Cinema Dashboard' },
            { src: '/projects/filmflock-cinema/cinema2.png', alt: 'FilmFlock Cinema Booking' },
            { src: '/projects/filmflock-cinema/cinema3.png', alt: 'FilmFlock Cinema Management' }
          ]}
          language={language as 'en' | 'fr'}
          title={language === 'fr' ? 'Galerie du Projet' : 'Screenshots'}
        />
      </div>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js" />
    </div>
  );
}