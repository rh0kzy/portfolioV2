"use client";

import Script from "next/script";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { useLanguage } from '../../../../lib/language-context';

export default function UsthbRecours() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleEscKey);
      return () => window.removeEventListener('keydown', handleEscKey);
    }
  }, [selectedImage]);
  const translations = language === 'fr' ? 
    {
      backToProjects: '← Retour aux Projets',
      features: 'Fonctionnalités Principales',
      usthbRecours: {
        title: 'USTHB Recours',
        subtitle: 'Système de Gestion des Demandes de Changement de Spécialité',
        description: 'Une application web moderne et sécurisée pour digitaliser et automatiser le processus de demande de changement de spécialité à l\'USTHB.',
        overview: 'Ce projet présente une architecture complète full-stack avec authentification multi-couches, sécurité avancée (JWT, 2FA, Rate Limiting), et un dashboard d\'administration complet. Le système automatise le traitement des demandes et offre une interface intuitive pour les étudiants et administrateurs.',
        keyFeatures: [
          'Authentification JWT sécurisée avec 2FA pour Super Admins',
          'Dashboard d\'administration avec statistiques en temps réel',
          'Graphiques interactifs (Recharts) pour l\'analyse des demandes',
          'Système de permissions granulaires (4 rôles, 14 permissions)',
          'Rate limiting et verrouillage automatique des comptes',
          'Recherche intelligente et filtrage avancé',
          'Notifications email automatiques via Nodemailer',
          'Base de données PostgreSQL (Supabase) scalable',
          'Cache Redis pour performance optimale',
          'Appareils de confiance avec bypass 2FA',
          'Session timeout et rafraîchissement automatique JWT',
          'Logs d\'audit complets pour traçabilité'
        ]
      }
    } : 
    {
      backToProjects: '← Back to Projects',
      features: 'Key Features',
      usthbRecours: {
        title: 'USTHB Recours',
        subtitle: 'Student Specialty Change Request Management System',
        description: 'A modern and secure web application to digitalize and automate the specialty change request process at USTHB.',
        overview: 'This project showcases a complete full-stack architecture with multi-layer authentication, advanced security (JWT, 2FA, Rate Limiting), and a comprehensive admin dashboard. The system automates request processing and provides an intuitive interface for students and administrators.',
        keyFeatures: [
          'Secure JWT authentication with 2FA for Super Admins',
          'Admin dashboard with real-time statistics',
          'Interactive charts (Recharts) for request analysis',
          'Granular permission system (4 roles, 14 permissions)',
          'Rate limiting and automatic account lockdown',
          'Intelligent search and advanced filtering',
          'Automatic email notifications via Nodemailer',
          'Scalable PostgreSQL database (Supabase)',
          'Redis cache for optimal performance',
          'Trusted devices with 2FA bypass',
          'Session timeout and automatic JWT refresh',
          'Complete audit logs for traceability'
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
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            background: 'linear-gradient(135deg, #667eea, #764ba2)'
          }}>
            {/* Placeholder icon until image is provided */}
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem'
            }}>
              📋
            </div>
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
            {translations.usthbRecours.title}
          </h1>
          
          <p style={{
            fontSize: '1.5rem',
            color: '#8b949e',
            marginBottom: '40px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {translations.usthbRecours.description}
          </p>
          
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '30px'}}>
            <span style={{background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Next.js 15</span>
            <span style={{background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>React 19</span>
            <span style={{background: 'linear-gradient(135deg, #3178c6, #2b7db9)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>TypeScript</span>
            <span style={{background: 'linear-gradient(135deg, #06b6d4, #0891b2)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Tailwind CSS</span>
            <span style={{background: 'linear-gradient(135deg, #36bcb7, #22a699)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>PostgreSQL</span>
            <span style={{background: 'linear-gradient(135deg, #f23c50, #ec1c24)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Redis</span>
            <span style={{background: 'linear-gradient(135də, #667eea, #764ba2)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>JWT & 2FA</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '80px 20px'}}>
        <Link href="/" style={{
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
            {translations.usthbRecours.subtitle}
          </h2>
          <p style={{color: '#8b949e', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '25px'}}>
            {translations.usthbRecours.overview}
          </p>

          {/* Key Features */}
          <div style={{marginTop: '30px'}}>
            <h3 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '20px', color: '#e6edf3'}}>{translations.features}</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {translations.usthbRecours.keyFeatures.map((feature: string, index: number) => (
                <div key={index} style={{
                  background: '#21262d',
                  padding: '25px',
                  borderRadius: '16px',
                  border: '1px solid #30363d',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '15px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#21262d';
                  e.currentTarget.style.borderColor = '#667eea';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#21262d';
                  e.currentTarget.style.borderColor = '#30363d';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <div style={{color: '#667eea', fontSize: '1.5rem', marginTop: '5px'}}>✓</div>
                  <span style={{color: '#e6edf3', fontSize: '0.95rem', lineHeight: '1.6'}}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{
          background: '#161b22',
          padding: '40px',
          borderRadius: '20px',
          border: '1px solid #30363d',
          marginBottom: '30px'
        }}>
          <h2 style={{fontSize: '1.8rem', fontWeight: '700', marginBottom: '30px', color: '#e6edf3', display: 'flex', alignItems: 'center', gap: '15px'}}>
            <i className="fas fa-code" style={{color: '#58a6ff'}}></i>
            {language === 'fr' ? 'Stack Technologique' : 'Technology Stack'}
          </h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
            <div>
              <h3 style={{color: '#667eea', fontWeight: '700', marginBottom: '15px', fontSize: '1.1rem'}}>Frontend</h3>
              <ul style={{color: '#8b949e', lineHeight: '2'}}>
                <li>• Next.js 15.5.4</li>
                <li>• React 19.1.0</li>
                <li>• TypeScript 5</li>
                <li>• Tailwind CSS 4</li>
                <li>• Recharts 3.3.0</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{color: '#667eea', fontWeight: '700', marginBottom: '15px', fontSize: '1.1rem'}}>Backend</h3>
              <ul style={{color: '#8b949e', lineHeight: '2'}}>
                <li>• Node.js</li>
                <li>• Next.js API Routes</li>
                <li>• PostgreSQL (Supabase)</li>
                <li>• Redis (ioredis)</li>
                <li>• Nodemailer</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{color: '#667eea', fontWeight: '700', marginBottom: '15px', fontSize: '1.1rem'}}>Security</h3>
              <ul style={{color: '#8b949e', lineHeight: '2'}}>
                <li>• JWT (jose)</li>
                <li>• bcryptjs</li>
                <li>• 2FA Authentication</li>
                <li>• Rate Limiting</li>
                <li>• Session Management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Highlights */}
        <div style={{
          background: '#161b22',
          padding: '40px',
          borderRadius: '20px',
          border: '1px solid #30363d',
          marginBottom: '30px'
        }}>
          <h2 style={{fontSize: '1.8rem', fontWeight: '700', marginBottom: '30px', color: '#e6edf3', display: 'flex', alignItems: 'center', gap: '15px'}}>
            <i className="fas fa-star" style={{color: '#58a6ff'}}></i>
            {language === 'fr' ? 'Points Forts' : 'Project Highlights'}
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            <div style={{background: '#21262d', padding: '25px', borderRadius: '16px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#667eea', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <span style={{fontSize: '1.5rem'}}>🔒</span>
                {language === 'fr' ? 'Sécurité Avancée' : 'Advanced Security'}
              </h3>
              <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                {language === 'fr' 
                  ? 'JWT, 2FA pour Super Admins, Rate Limiting, Logs d\'audit complets et appareils de confiance.' 
                  : 'JWT, 2FA for Super Admins, Rate Limiting, Complete audit logs, and trusted devices.'}
              </p>
            </div>

            <div style={{background: '#21262d', padding: '25px', borderRadius: '16px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#667eea', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <span style={{fontSize: '1.5rem'}}>📊</span>
                {language === 'fr' ? 'Dashboard Intelligent' : 'Smart Dashboard'}
              </h3>
              <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                {language === 'fr'
                  ? 'Statistiques en temps réel, graphiques interactifs, filtrage avancé et KPIs détaillés.'
                  : 'Real-time statistics, interactive charts, advanced filtering, and detailed KPIs.'}
              </p>
            </div>

            <div style={{background: '#21262d', padding: '25px', borderRadius: '16px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#667eea', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <span style={{fontSize: '1.5rem'}}>⚡</span>
                {language === 'fr' ? 'Performance Optimale' : 'Optimal Performance'}
              </h3>
              <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                {language === 'fr'
                  ? 'Next.js 15 avec Turbopack, Redis cache, lazy loading et optimisation d\'images.'
                  : 'Next.js 15 with Turbopack, Redis cache, lazy loading, and image optimization.'}
              </p>
            </div>

            <div style={{background: '#21262d', padding: '25px', borderRadius: '16px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#667eea', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <span style={{fontSize: '1.5rem'}}>🤖</span>
                {language === 'fr' ? 'Automatisation' : 'Automation'}
              </h3>
              <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                {language === 'fr'
                  ? 'Transfert automatique des étudiants, emails de notification et traitement batch des demandes.'
                  : 'Automatic student transfer, notification emails, and batch request processing.'}
              </p>
            </div>

            <div style={{background: '#21262d', padding: '25px', borderRadius: '16px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#667eea', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <span style={{fontSize: '1.5rem'}}>📱</span>
                {language === 'fr' ? 'Interface Responsive' : 'Responsive Interface'}
              </h3>
              <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                {language === 'fr'
                  ? 'Design moderne et intuitif sur mobile, tablette et desktop avec Tailwind CSS 4.'
                  : 'Modern and intuitive design on mobile, tablet, and desktop with Tailwind CSS 4.'}
              </p>
            </div>

            <div style={{background: '#21262d', padding: '25px', borderRadius: '16px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#667eea', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <span style={{fontSize: '1.5rem'}}>🏗️</span>
                {language === 'fr' ? 'Architecture Scalable' : 'Scalable Architecture'}
              </h3>
              <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                {language === 'fr'
                  ? 'PostgreSQL scalable, système de permissions granulaires et middleware d\'authentification.'
                  : 'Scalable PostgreSQL, granular permission system, and authentication middleware.'}
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div style={{
          background: '#161b22',
          padding: '40px',
          borderRadius: '20px',
          border: '1px solid #30363d',
          marginBottom: '30px'
        }}>
          <h2 style={{fontSize: '1.8rem', fontWeight: '700', marginBottom: '30px', color: '#e6edf3', display: 'flex', alignItems: 'center', gap: '15px'}}>
            <i className="fas fa-images" style={{color: '#58a6ff'}}></i>
            {language === 'fr' ? 'Galerie du Projet' : 'Project Gallery'}
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {[
              'Screenshot 2025-11-07 163307.png',
              'Screenshot 2025-11-07 163438.png',
              'Screenshot 2025-11-07 163459.png',
              'Screenshot 2025-11-07 163615.png',
              'Screenshot 2025-11-07 163657.png',
              'Screenshot 2025-11-07 163708.png'
            ].map((filename, index) => (
              <div key={index} style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                border: '2px solid #30363d',
                aspectRatio: '16/9',
                background: '#0d1117',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setSelectedImage(`/projects/usthb-recours/${filename}`)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#667eea';
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#30363d';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <img 
                  src={`/projects/usthb-recours/${filename}`}
                  alt={`Screenshot ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0';
                }}>
                  <i className="fas fa-search-plus" style={{fontSize: '2rem', color: '#667eea'}}></i>
                </div>
              </div>
            ))}
          </div>
          
          <p style={{color: '#8b949e', marginTop: '20px', fontSize: '0.9rem', textAlign: 'center'}}>
            {language === 'fr' 
              ? '👆 Cliquez sur une image pour l\'agrandir' 
              : '👆 Click on an image to enlarge it'}
          </p>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              padding: '20px',
              cursor: 'pointer'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <div 
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
                cursor: 'auto'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Full screen" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '12px'
                }}
              />
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '0',
                  background: 'none',
                  border: 'none',
                  color: '#e6edf3',
                  fontSize: '2rem',
                  cursor: 'pointer',
                  padding: '10px',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#667eea';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#e6edf3';
                }}
              >
                ✕
              </button>
              <p style={{
                color: '#8b949e',
                textAlign: 'center',
                marginTop: '20px',
                fontSize: '0.9rem'
              }}>
                {language === 'fr' ? 'Cliquez pour fermer ou appuyez sur Échap' : 'Click to close or press Escape'}
              </p>
            </div>
          </div>
        )}

        {/* Project Links */}
        <div style={{
          background: '#161b22',
          padding: '40px',
          borderRadius: '20px',
          border: '1px solid #30363d',
          textAlign: 'center'
        }}>
          <h2 style={{fontSize: '1.8rem', fontWeight: '700', marginBottom: '30px', color: '#e6edf3'}}>
            {language === 'fr' ? 'Liens du Projet' : 'Project Links'}
          </h2>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px'}}>
            <a href="https://usthbrecours.netlify.app/" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(6, 182, 212, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(6, 182, 212, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(6, 182, 212, 0.3)';
            }}>
              <i className="fas fa-globe"></i>
              {language === 'fr' ? 'Voir le Projet' : 'Visit Live Site'}
            </a>
            <a href="https://github.com/rh0kzy/recours" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
            }}>
              <i className="fab fa-github"></i>
              {language === 'fr' ? 'Code Source' : 'GitHub Repository'}
            </a>
          </div>
          <p style={{color: '#8b949e', marginTop: '20px', fontSize: '0.95rem'}}>
            {language === 'fr' 
              ? 'Version: 0.1.0 | Statut: En production' 
              : 'Version: 0.1.0 | Status: In production'}
          </p>
        </div>
      </div>

      {/* FontAwesome Icons */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" />
    </div>
  );
}
