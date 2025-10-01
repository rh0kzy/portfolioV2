"use client";

import Script from "next/script";
import Link from "next/link";

export default function TeacherManagement() {
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
            <img src="/projects/teacher-management/profLogo.png" alt="Teacher Management Logo" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
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
            Teacher Management System
          </h1>
          
          <p style={{
            fontSize: '1.5rem',
            color: '#8b949e',
            marginBottom: '40px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            A comprehensive faculty management platform for educational institutions with advanced organizational tools
          </p>
          
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '30px'}}>
            <span style={{background: 'linear-gradient(135deg, #238636, #2ea043)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Java</span>
            <span style={{background: 'linear-gradient(135deg, #1f6feb, #58a6ff)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Swing</span>
            <span style={{background: 'linear-gradient(135deg, #f97316, #fb923c)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>MySQL</span>
            <span style={{background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Education</span>
            <span style={{background: 'linear-gradient(135deg, #238636, #2ea043)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Data Management</span>
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
          Back to Portfolio
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
            A sophisticated teacher management system designed for educational institutions to streamline faculty administration. Built with Java Swing and MySQL, this comprehensive platform provides tools for managing teacher profiles, academic records, departmental structures, and organizational hierarchies. The system emphasizes efficient data organization, user-friendly interfaces, and comprehensive reporting capabilities to enhance educational administration.
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
                <i className="fas fa-chalkboard-teacher" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Faculty Profiles</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Comprehensive teacher profile management with personal information, qualifications, and employment history.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-sitemap" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Organizational Structure</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Visual organizational chart with departmental hierarchies and reporting relationships.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-graduation-cap" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Academic Records</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Detailed academic credentials tracking with degree verification and certification management.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-building" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Department Management</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Comprehensive departmental organization with faculty assignments and resource allocation.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-chart-bar" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Reporting System</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Advanced reporting tools with faculty statistics and institutional analytics.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-search" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Advanced Search</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Powerful search and filtering capabilities with multiple criteria and sorting options.
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
              }}>4,000+</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Lines of Code</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>500+</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Faculty Records</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>25</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Departments</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>Hierarchical</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Organization</span>
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
              <img src="/projects/teacher-management/prof1.png" alt="Faculty Management Dashboard" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
            <div style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)'}}>
              <img src="/projects/teacher-management/prof2.png" alt="Teacher Profile Management" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
            <div style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)'}}>
              <img src="/projects/teacher-management/prof3.png" alt="Organizational Chart" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
            <div style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)'}}>
              <img src="/projects/teacher-management/prof4.png" alt="Department Management" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
            <div style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)'}}>
              <img src="/projects/teacher-management/prof5.png" alt="Faculty Search Interface" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
          </div>
        </div>
      </div>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js" />
    </div>
  );
}