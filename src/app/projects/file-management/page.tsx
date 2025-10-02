"use client";

import Script from "next/script";
import Link from "next/link";
import { useLanguage } from '../../../../lib/language-context';

export default function FileManagement() {
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
            <img src="/projects/file-management-system/getionLogo.jpg" alt="File Management System Logo" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
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
            Secondary Memory File Management System
          </h1>
          
          <p style={{
            fontSize: '1.5rem',
            color: '#8b949e',
            marginBottom: '40px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Secondary memory management system that simulates file storage operations with dynamic memory allocation and CRUD functionality
          </p>
          
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '30px'}}>
            <span style={{background: 'linear-gradient(135deg, #f97316, #fb923c)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>C</span>
            <span style={{background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Data Structures</span>
            <span style={{background: 'linear-gradient(135deg, #1f6feb, #58a6ff)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Memory Management</span>
            <span style={{background: 'linear-gradient(135deg, #238636, #2ea043)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>File Systems</span>
            <span style={{background: 'linear-gradient(135deg, #238636, #2ea043)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Algorithms</span>
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
            A <strong style={{color: '#e6edf3'}}>comprehensive secondary memory management system</strong> that simulates file storage and manipulation operations in C. This project demonstrates advanced understanding of data structures, memory allocation, and file system concepts through a complete implementation of file management operations.
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
              }}>1,405</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Lines of Code</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>13</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Core Functions</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>4</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Data Structures</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>C</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Language</span>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div style={{
          background: '#161b22',
          padding: '40px',
          borderRadius: '20px',
          border: '1px solid #30363d',
          marginBottom: '30px'
        }}>
          <h2 style={{fontSize: '1.8rem', fontWeight: '700', marginBottom: '20px', color: '#e6edf3', display: 'flex', alignItems: 'center', gap: '15px'}}>
            <i className="fas fa-cogs" style={{color: '#58a6ff'}}></i> 
            Key Features
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px'}}>
            <div style={{background: '#21262d', padding: '30px', borderRadius: '16px', border: '1px solid #30363d'}}>
              <h3 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px', color: '#e6edf3'}}>Dynamic Memory Management</h3>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{color: '#8b949e', marginBottom: '10px', paddingLeft: '20px', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: '#238636', fontWeight: 'bold'}}>✓</span>
                  Custom memory allocation algorithms
                </li>
                <li style={{color: '#8b949e', marginBottom: '10px', paddingLeft: '20px', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: '#238636', fontWeight: 'bold'}}>✓</span>
                  Efficient garbage collection
                </li>
                <li style={{color: '#8b949e', marginBottom: '10px', paddingLeft: '20px', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: '#238636', fontWeight: 'bold'}}>✓</span>
                  Memory fragmentation handling
                </li>
              </ul>
            </div>
            <div style={{background: '#21262d', padding: '30px', borderRadius: '16px', border: '1px solid #30363d'}}>
              <h3 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px', color: '#e6edf3'}}>File Operations</h3>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{color: '#8b949e', marginBottom: '10px', paddingLeft: '20px', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: '#238636', fontWeight: 'bold'}}>✓</span>
                  Create, Read, Update, Delete
                </li>
                <li style={{color: '#8b949e', marginBottom: '10px', paddingLeft: '20px', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: '#238636', fontWeight: 'bold'}}>✓</span>
                  File system simulation
                </li>
                <li style={{color: '#8b949e', marginBottom: '10px', paddingLeft: '20px', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: '#238636', fontWeight: 'bold'}}>✓</span>
                  Directory management
                </li>
              </ul>
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
              <img src="/projects/file-management-system/getionLogo.jpg" alt="File Management System Interface" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
          </div>
        </div>
      </div>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js" />
    </div>
  );
}