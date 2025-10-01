"use client";

import Script from "next/script";
import Link from "next/link";

export default function VertexPlatform() {
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
            background: 'linear-gradient(135deg, #58a6ff, #a5b4fc)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <i className="fas fa-cube" style={{fontSize: '4rem', color: 'white'}}></i>
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
            Vertex Platform
          </h1>
          
          <p style={{
            fontSize: '1.5rem',
            color: '#8b949e',
            marginBottom: '40px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            A next-generation business intelligence platform with advanced analytics and data visualization capabilities
          </p>
          
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '30px'}}>
            <span style={{background: 'linear-gradient(135deg, #e34c26, #f16529)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>HTML5</span>
            <span style={{background: 'linear-gradient(135deg, #1572b6, #33a9dc)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>CSS3</span>
            <span style={{background: 'linear-gradient(135deg, #f7df1e, #f0db4f)', color: 'black', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>JavaScript</span>
            <span style={{background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Business Intelligence</span>
            <span style={{background: 'linear-gradient(135deg, #238636, #2ea043)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Data Analytics</span>
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
            Vertex Platform is a cutting-edge business intelligence solution designed to transform raw data into actionable insights. Built with modern web technologies, this comprehensive platform provides advanced analytics, interactive dashboards, and powerful data visualization tools. The system empowers organizations to make data-driven decisions through intuitive interfaces, real-time reporting, and sophisticated analytical capabilities that scale with business needs.
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
                <i className="fas fa-chart-bar" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Interactive Dashboards</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Dynamic and customizable dashboards with real-time data visualization and interactive elements.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-brain" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Advanced Analytics</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Sophisticated analytical algorithms with predictive modeling and machine learning integration.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-database" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Data Integration</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Seamless integration with multiple data sources and automated data pipeline management.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-eye" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Data Visualization</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Rich visualization library with charts, graphs, and interactive maps for comprehensive data presentation.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-clock" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Real-time Processing</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Live data streaming and real-time analytics with instant updates and alert notifications.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-cogs" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Custom Workflows</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Flexible workflow automation with custom business logic and rule-based processing.
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
              }}>6,000+</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Lines of Code</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>50+</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Data Sources</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>Real-time</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Analytics</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>Enterprise</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Grade</span>
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
              <img src="/projects/vertex-platform/Screenshot%202025-08-24%20162542.png" alt="Vertex Platform Dashboard" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
            <div style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)'}}>
              <img src="/projects/vertex-platform/Screenshot%202025-08-24%20162626.png" alt="Data Analytics Interface" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
            <div style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)'}}>
              <img src="/projects/vertex-platform/Screenshot%202025-08-24%20162651.png" alt="Visualization Tools" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
            <div style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)'}}>
              <img src="/projects/vertex-platform/Screenshot%202025-08-24%20162720.png" alt="Business Intelligence Reports" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
          </div>
        </div>
      </div>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js" />
    </div>
  );
}