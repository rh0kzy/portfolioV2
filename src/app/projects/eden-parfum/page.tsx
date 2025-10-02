"use client";

import Script from "next/script";
import Link from "next/link";
import { useLanguage } from '../../../../lib/language-context';

export default function EdenParfum() {
  const { language } = useLanguage();
  const translations = language === 'fr' ? 
    {
      backToProjects: '← Retour aux Projets',
      features: 'Fonctionnalités Clés',
      edenParfum: {
        title: 'Eden Parfum',
        subtitle: 'Plateforme E-commerce de Parfums de Luxe',
        description: 'Une solution e-commerce complète pour les parfums de luxe présentant un catalogue étendu de plus de 507 fragrances de marques premium du monde entier.',
        overview: 'Ce projet présente des techniques avancées de développement web avec un focus sur l\'expérience utilisateur, les performances et les principes de design moderne. La plateforme offre une expérience d\'achat fluide avec des options de filtrage sophistiquées et un design responsive.',
        keyFeatures: [
          '507+ fragrances premium de marques de luxe',
          'Filtrage avancé par marque, prix, genre et famille olfactive',
          'Design responsive optimisé pour tous les appareils',
          'Temps de chargement rapides avec images optimisées',
          'Interface utilisateur intuitive avec animations fluides',
          'Intégration de paiement sécurisé prête'
        ]
      }
    } : 
    {
      backToProjects: '← Back to Projects',
      features: 'Key Features',
      edenParfum: {
        title: 'Eden Parfum',
        subtitle: 'Luxury Perfume E-commerce Platform',
        description: 'A comprehensive e-commerce solution for luxury perfumes featuring an extensive catalog of over 507 fragrances from premium brands worldwide.',
        overview: 'This project showcases advanced web development techniques with a focus on user experience, performance, and modern design principles. The platform offers a seamless shopping experience with sophisticated filtering options and responsive design.',
        keyFeatures: [
          '507+ premium fragrances from luxury brands',
          'Advanced filtering by brand, price, gender, and scent family',
          'Responsive design optimized for all devices',
          'Fast loading times with optimized images',
          'Intuitive user interface with smooth animations',
          'Secure payment integration ready'
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
            <img src="/projects/eden-parfum/eden%20parfum%20logo.png" alt="Eden Parfum Logo" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
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
            {translations.edenParfum.title}
          </h1>
          
          <p style={{
            fontSize: '1.5rem',
            color: '#8b949e',
            marginBottom: '40px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {translations.edenParfum.description}
          </p>
          
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '30px'}}>
            <span style={{background: 'linear-gradient(135deg, #e34c26, #f16529)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>HTML5</span>
            <span style={{background: 'linear-gradient(135deg, #1572b6, #33a9dc)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>CSS3</span>
            <span style={{background: 'linear-gradient(135deg, #f7df1e, #f0db4f)', color: 'black', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>JavaScript</span>
            <span style={{background: 'linear-gradient(135deg, #563d7c, #7952b3)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Bootstrap</span>
            <span style={{background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>E-commerce</span>
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
            {translations.edenParfum.subtitle}
          </h2>
          <p style={{color: '#8b949e', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '25px'}}>
            {translations.edenParfum.overview}
          </p>

          {/* Key Features */}
          <div style={{marginTop: '30px'}}>
            <h3 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '20px', color: '#e6edf3'}}>{translations.features}</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {translations.edenParfum.keyFeatures.map((feature: string, index: number) => (
                <div key={index} style={{
                  background: '#21262d',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '1px solid #30363d'
                }}>
                  <i className={`fas fa-${index === 0 ? 'shopping-cart' : index === 1 ? 'filter' : index === 2 ? 'mobile-alt' : index === 3 ? 'bolt' : index === 4 ? 'magic' : 'credit-card'}`} style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
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
              }}>15+</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Product Pages</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>100%</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Responsive</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>Modern</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>UI/UX</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>Luxury</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Branding</span>
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
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px', marginTop: '40px'}}>
            <div style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)'}}>
              <img src="/projects/eden-parfum/Eden1.png" alt="Eden Parfum Homepage" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
            <div style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)'}}>
              <img src="/projects/eden-parfum/eden2.png" alt="Eden Parfum Products" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
            <div style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)'}}>
              <img src="/projects/eden-parfum/eden4.png" alt="Eden Parfum Product Details" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
            <div style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)'}}>
              <img src="/projects/eden-parfum/eden5.png" alt="Eden Parfum Shopping Cart" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
            <div style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)'}}>
              <img src="/projects/eden-parfum/eden6.png" alt="Eden Parfum Checkout" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
          </div>
        </div>
      </div>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js" />
    </div>
  );
}