"use client";

import Script from "next/script";
import Link from "next/link";
import { useLanguage } from '../../../../lib/language-context';
import ImageGallery from '../../components/ImageGallery';

export default function MedicalClinic() {
  const { language } = useLanguage();
  const translations = language === 'fr' ? 
    { backToProjects: '← Retour aux Projets' } : 
    { backToProjects: '← Back to Projects' };
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
            <img src="/projects/medical-clinic/cabinetlogo.jpg" alt="Medical Clinic Logo" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
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
            Medical Clinic Management
          </h1>
          
          <p style={{
            fontSize: '1.5rem',
            color: '#8b949e',
            marginBottom: '40px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            A comprehensive healthcare management system for patient records, appointments, and medical administration
          </p>
          
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '30px'}}>
            <span style={{background: 'linear-gradient(135deg, #238636, #2ea043)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Java</span>
            <span style={{background: 'linear-gradient(135deg, #1f6feb, #58a6ff)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Swing</span>
            <span style={{background: 'linear-gradient(135deg, #f97316, #fb923c)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>MySQL</span>
            <span style={{background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Healthcare</span>
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
            Project Overview
          </h2>
          <p style={{color: '#8b949e', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '25px'}}>
            A comprehensive medical clinic management system designed to streamline healthcare operations. Built with Java Swing and MySQL, this application provides healthcare professionals with tools to manage patient records, schedule appointments, track medical history, and handle administrative tasks. The system emphasizes data security, user-friendly interfaces, and efficient workflow management to enhance the quality of patient care.
          </p>

          {/* Key Features */}
          <div style={{marginTop: '30px'}}>
            <h3 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '20px', color: '#e6edf3'}}>Key Features</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-user-md" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Patient Management</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Comprehensive patient database with medical history, personal information, and treatment records.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-calendar-check" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Appointment Scheduling</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Advanced scheduling system with conflict detection and automated reminder notifications.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-file-medical" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Medical Records</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Secure electronic health records with treatment history and diagnostic information.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-pills" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Prescription Management</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Digital prescription system with drug interaction checking and dosage tracking.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-chart-line" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Analytics Dashboard</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Comprehensive reporting with patient statistics and clinic performance metrics.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-lock" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Data Security</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  HIPAA-compliant security features with encrypted data storage and access controls.
                </p>
              </div>
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
              }}>4,500+</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Lines of Code</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>15</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Database Tables</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>1000+</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Patient Records</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>Secure</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>HIPAA Compliant</span>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        <ImageGallery 
          images={[
            { src: '/projects/medical-clinic/cabinet1.png', alt: 'Medical Clinic Dashboard' },
            { src: '/projects/medical-clinic/cabinet2.png', alt: 'Patient Management' },
            { src: '/projects/medical-clinic/cabinet3.png', alt: 'Medical Records' }
          ]}
          language={language as 'en' | 'fr'}
          title={language === 'fr' ? 'Galerie du Projet' : 'Screenshots'}
        />
      </div>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js" />
    </div>
  );
}