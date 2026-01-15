"use client";

import Script from "next/script";
import Link from "next/link";
import { useLanguage } from '../../../../lib/language-context';
import ImageGallery from '../../components/ImageGallery';

export default function DoxaAiAgent() {
  const { language } = useLanguage();
  const translations = language === 'fr' ? 
    {
      backToProjects: '← Retour aux Projets',
      features: 'Fonctionnalités Clés',
      livePreview: 'Démo en Ligne',
      githubRepo: 'Dépôt GitHub',
      doxaAiAgent: {
        title: 'Doxa AI Agent',
        subtitle: 'Système de Gestion de Tickets de Support par IA',
        description: 'Système intelligent de gestion de tickets de support et agent IA conçu pour automatiser et simplifier les demandes réglementaires et opérationnelles via RAG.',
        overview: 'Ce projet présente une architecture full-stack complète avec un moteur d\'orchestration piloté par l\'IA. Il automatise le traitement des tickets d\'utilisateurs et des demandes de support en analysant les documents réglementaires (DOXA) et en générant des réponses intelligentes et contextuelles.',
        keyFeatures: [
          'Pipeline Orchestré par l\'IA (Pré-vérification, Détection PII, Recherche RAG)',
          'RAG (Génération Augmentée par Récupération) avec ChromaDB',
          'Évaluation Intelligente et Seuils de Confiance pour l\'escalade humaine',
          'Sécurité Avancée : JWT et Désinfection PII par Regex',
          'Contrôle d\'Accès granulaire basé sur les rôles (4 rôles)',
          'Tableau de Bord Admin en temps réel et Notifications SMTP'
        ]
      }
    } : 
    {
      backToProjects: '← Back to Projects',
      features: 'Key Features',
      livePreview: 'Live Preview',
      githubRepo: 'GitHub Repository',
      doxaAiAgent: {
        title: 'Doxa AI Agent',
        subtitle: 'AI-Powered Support Ticket Management System',
        description: 'An intelligent support ticket management system and AI agent designed to automate and streamline regulatory and operational inquiries using RAG.',
        overview: 'This project showcases a complete full-stack architecture featuring an AI-driven orchestration engine. It automates the processing of user tickets and support requests by analyzing regulatory documents (DOXA) and generating intelligent, context-aware responses.',
        keyFeatures: [
          'AI-Orchestrated Pipeline (Precheck, PII Detection, RAG Search)',
          'RAG (Retrieval-Augmented Generation) with ChromaDB',
          'Intelligent Feedback & Confidence Thresholds for human escalation',
          'Advanced Security: JWT & Regex PII Sanitization',
          'Granular Role-Based Access Control (4 roles)',
          'Real-time Admin Dashboard & SMTP Notifications'
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
            background: '#161b22',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <i className="fas fa-robot" style={{fontSize: '80px', color: '#58a6ff'}}></i>
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
            {translations.doxaAiAgent.title}
          </h1>
          
          <p style={{
            fontSize: '1.5rem',
            color: '#8b949e',
            marginBottom: '40px',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {translations.doxaAiAgent.description}
          </p>
          
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '30px'}}>
            <span style={{background: 'linear-gradient(135deg, #238636, #2ea043)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Next.js 16</span>
            <span style={{background: 'linear-gradient(135deg, #1f6feb, #58a6ff)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>FastAPI</span>
            <span style={{background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Mistral AI</span>
            <span style={{background: 'linear-gradient(135deg, #f97316, #fb923c)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>ChromaDB</span>
            <span style={{background: 'linear-gradient(135deg, #1f6feb, #58a6ff)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Tailwind CSS 4</span>
          </div>

          <div style={{display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px'}}>
            <a href="https://aitc12.netlify.app/" target="_blank" rel="noopener noreferrer" style={{
              background: 'linear-gradient(135deg, #238636, #2ea043)',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '12px',
              fontWeight: '700',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 4px 15px rgba(35, 134, 54, 0.3)'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(35, 134, 54, 0.4)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(35, 134, 54, 0.3)';
            }}>
              <i className="fas fa-external-link-alt"></i>
              {translations.livePreview}
            </a>
            <a href="https://github.com/rh0kzy/AiTC12" target="_blank" rel="noopener noreferrer" style={{
              background: '#21262d',
              color: '#e6edf3',
              padding: '15px 30px',
              borderRadius: '12px',
              fontWeight: '700',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid #30363d',
              transition: 'transform 0.2s ease, background 0.2s ease',
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.background = '#30363d';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = '#21262d';
            }}>
              <i className="fab fa-github"></i>
              {translations.githubRepo}
            </a>
          </div>
        </div>
      </div>

      <div style={{maxWidth: '1200px', margin: '-40px auto 100px', padding: '0 20px'}}>
        <Link href="/#projects" style={{
          display: 'inline-flex',
          alignItems: 'center',
          color: '#58a6ff',
          textDecoration: 'none',
          marginBottom: '30px',
          fontWeight: '600',
          transition: 'transform 0.2s ease'
        }}>
          {translations.backToProjects}
        </Link>

        {/* Overview Section */}
        <div style={{
          background: '#161b22',
          padding: '40px',
          borderRadius: '20px',
          border: '1px solid #30363d',
          marginBottom: '30px'
        }}>
          <h2 style={{fontSize: '1.8rem', fontWeight: '700', marginBottom: '20px', color: '#e6edf3'}}>Project Overview</h2>
          <p style={{fontSize: '1.15rem', color: '#8b949e', lineHeight: '1.7'}}>
            {translations.doxaAiAgent.overview}
          </p>
        </div>

        {/* Features Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '30px'
        }}>
          <div style={{
            background: '#161b22',
            padding: '40px',
            borderRadius: '20px',
            border: '1px solid #30363d'
          }}>
            <h2 style={{fontSize: '1.8rem', fontWeight: '700', marginBottom: '20px', color: '#e6edf3', display: 'flex', alignItems: 'center', gap: '15px'}}>
              <i className="fas fa-microchip" style={{color: '#58a6ff'}}></i> 
              {translations.features}
            </h2>
            <ul style={{listStyle: 'none', padding: 0}}>
              {translations.doxaAiAgent.keyFeatures.map((feature, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '15px',
                  color: '#8b949e',
                  fontSize: '1.1rem'
                }}>
                  <i className="fas fa-check" style={{color: '#3fb950'}}></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div style={{
            background: '#161b22',
            padding: '40px',
            borderRadius: '20px',
            border: '1px solid #30363d'
          }}>
            <h2 style={{fontSize: '1.8rem', fontWeight: '700', marginBottom: '20px', color: '#e6edf3', display: 'flex', alignItems: 'center', gap: '15px'}}>
              <i className="fas fa-chart-line" style={{color: '#58a6ff'}}></i> 
              Project Impact
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px'
            }}>
              <div style={{textAlign: 'center', padding: '15px'}}>
                <span style={{
                  display: 'block',
                  fontSize: '2.5em',
                  fontWeight: '700',
                  color: '#58a6ff',
                  marginBottom: '5px'
                }}>4</span>
                <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Distinct Roles</span>
              </div>
              <div style={{textAlign: 'center', padding: '15px'}}>
                <span style={{
                  display: 'block',
                  fontSize: '2.5em',
                  fontWeight: '700',
                  color: '#58a6ff',
                  marginBottom: '5px'
                }}>Real-time</span>
                <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Orchestration</span>
              </div>
              <div style={{textAlign: 'center', padding: '15px'}}>
                <span style={{
                  display: 'block',
                  fontSize: '2.5em',
                  fontWeight: '700',
                  color: '#58a6ff',
                  marginBottom: '5px'
                }}>Secure</span>
                <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>PII Masking</span>
              </div>
              <div style={{textAlign: 'center', padding: '15px'}}>
                <span style={{
                  display: 'block',
                  fontSize: '2.5em',
                  fontWeight: '700',
                  color: '#58a6ff',
                  marginBottom: '5px'
                }}>Full-Stack</span>
                <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Architecture</span>
              </div>
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
              { src: '/projects/Doxa-Ai-Agent/Screenshot%202025-12-29%20014859.png', alt: 'Doxa AI Agent Dashboard' },
              { src: '/projects/Doxa-Ai-Agent/Screenshot%202025-12-29%20015025.png', alt: 'Ticket Management' },
              { src: '/projects/Doxa-Ai-Agent/Screenshot%202025-12-29%20015056.png', alt: 'AI Response Generation' },
              { src: '/projects/Doxa-Ai-Agent/Screenshot%202025-12-29%20015213.png', alt: 'User Settings and Roles' }
            ]}
            language={language as 'en' | 'fr'}
            title="Doxa AI Agent Screenshots"
          />
        </div>
      </div>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js" />
    </div>
  );
}
