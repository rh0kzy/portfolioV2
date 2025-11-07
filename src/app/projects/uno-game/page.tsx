"use client";

import Script from "next/script";
import Link from "next/link";
import { useLanguage } from '../../../../lib/language-context';
import ImageGallery from '../../components/ImageGallery';

export default function UnoGame() {
  const { language } = useLanguage();
  const translations = language === 'fr' ? 
    {
      backToProjects: '← Retour aux Projets',
      features: 'Fonctionnalités Clés',
      unoGame: {
        title: 'Jeu UNO',
        subtitle: 'Implémentation de Jeu de Cartes Multijoueur',
        description: 'Une implémentation numérique du jeu de cartes classique UNO avec gameplay multijoueur en temps réel et interface utilisateur interactive.',
        overview: 'Construit avec des technologies web modernes, ce jeu UNO fournit une expérience multijoueur engageante avec gameplay en temps réel, fonctionnalité de chat et design responsive.',
        keyFeatures: [
          'Gameplay multijoueur en temps réel',
          'Système de chat interactif',
          'Design responsive pour tous les appareils',
          'Synchronisation de l\'état du jeu',
          'Suivi des statistiques des joueurs',
          'Règles de jeu personnalisables'
        ]
      }
    } : 
    {
      backToProjects: '← Back to Projects',
      features: 'Key Features',
      unoGame: {
        title: 'UNO Game',
        subtitle: 'Multiplayer Card Game Implementation',
        description: 'A digital implementation of the classic UNO card game featuring real-time multiplayer gameplay and interactive user interface.',
        overview: 'Built with modern web technologies, this UNO game provides an engaging multiplayer experience with real-time gameplay, chat functionality, and responsive design.',
        keyFeatures: [
          'Real-time multiplayer gameplay',
          'Interactive chat system',
          'Responsive design for all devices',
          'Game state synchronization',
          'Player statistics tracking',
          'Customizable game rules'
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
            <img src="/projects/uno-game/UNO_Logo.svg.png" alt="UNO Game Logo" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
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
            {translations.unoGame.title}
          </h1>
          
          <p style={{
            fontSize: '1.5rem',
            color: '#8b949e',
            marginBottom: '40px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {translations.unoGame.description}
          </p>
          
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '30px'}}>
            <span style={{background: 'linear-gradient(135deg, #238636, #2ea043)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Java</span>
            <span style={{background: 'linear-gradient(135deg, #1f6feb, #58a6ff)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Swing</span>
            <span style={{background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>MVC Architecture</span>
            <span style={{background: 'linear-gradient(135deg, #f97316, #fb923c)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Game AI</span>
            <span style={{background: 'linear-gradient(135deg, #238636, #2ea043)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Object-Oriented Programming</span>
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
            {translations.unoGame.subtitle}
          </h2>
          <p style={{color: '#8b949e', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '25px'}}>
            {translations.unoGame.overview}
          </p>

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
              }}>2,500+</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Lines of Code</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>108</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Game Cards</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>4</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>AI Players</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>Java</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Technology</span>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        <div style={{
          background: '#161b22',
          padding: '40px',
          borderRadius: '20px',
          border: '1px solid #30363d',
          marginBottom: '30px'
        }}>
          <h2 style={{fontSize: '1.8rem', fontWeight: '700', marginBottom: '20px', color: '#e6edf3', display: 'flex', alignItems: 'center', gap: '15px'}}>
            <i className="fas fa-images" style={{color: '#58a6ff'}}></i> 
            Screenshots
          </h2>
          <ImageGallery 
            images={[
              { src: '/projects/uno-game/uno_screenshot.png', alt: 'UNO Game Interface' }
            ]}
            language={language as 'en' | 'fr'}
            title="UNO Game Screenshots"
          />
        </div>
      </div>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js" />
    </div>
  );
}