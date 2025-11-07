import { useState, useEffect } from 'react';

interface ImageGalleryProps {
  images: Array<{ src: string; alt: string }>;
  language?: 'en' | 'fr';
  title?: string;
}

export default function ImageGallery({ images, language = 'en', title }: ImageGalleryProps) {
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

  return (
    <>
      <div style={{
        background: '#161b22',
        padding: '40px',
        borderRadius: '20px',
        border: '1px solid #30363d',
        marginBottom: '30px'
      }}>
        <h2 style={{fontSize: '1.8rem', fontWeight: '700', marginBottom: '30px', color: '#e6edf3', display: 'flex', alignItems: 'center', gap: '15px'}}>
          <i className="fas fa-images" style={{color: '#58a6ff'}}></i>
          {title || (language === 'fr' ? 'Galerie du Projet' : 'Project Gallery')}
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {images.map((image, index) => (
            <div 
              key={index}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                border: '2px solid #30363d',
                aspectRatio: '16/9',
                background: '#0d1117',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setSelectedImage(image.src)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#667eea';
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#30363d';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img 
                src={image.src}
                alt={image.alt}
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
    </>
  );
}
