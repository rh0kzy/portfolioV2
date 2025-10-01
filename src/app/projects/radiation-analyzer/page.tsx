"use client";

import Script from "next/script";
import Link from "next/link";

export default function RadiationAnalyzer() {
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
            <i className="fas fa-wave-square" style={{fontSize: '4rem', color: 'white'}}></i>
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
            Radiation Pattern Analyzer
          </h1>
          
          <p style={{
            fontSize: '1.5rem',
            color: '#8b949e',
            marginBottom: '40px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Advanced electromagnetic radiation pattern analysis tool with comprehensive visualization and mathematical modeling
          </p>
          
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '30px'}}>
            <span style={{background: 'linear-gradient(135deg, #238636, #2ea043)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Python</span>
            <span style={{background: 'linear-gradient(135deg, #1f6feb, #58a6ff)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>NumPy</span>
            <span style={{background: 'linear-gradient(135deg, #f97316, #fb923c)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Matplotlib</span>
            <span style={{background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Signal Processing</span>
            <span style={{background: 'linear-gradient(135deg, #238636, #2ea043)', color: 'white', padding: '12px 24px', borderRadius: '50px', fontWeight: '600'}}>Data Visualization</span>
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
            An advanced radiation pattern analysis tool developed for electromagnetic wave visualization and modeling. This sophisticated application provides comprehensive analysis of antenna radiation patterns, featuring polar and Cartesian coordinate plotting, mathematical modeling, and detailed signal processing capabilities. Built with Python and scientific computing libraries, it serves as a powerful tool for engineers and researchers working in electromagnetic theory and antenna design.
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
                <i className="fas fa-chart-line" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Pattern Visualization</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Advanced 2D and 3D radiation pattern plotting with polar and Cartesian coordinate systems.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-calculator" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Mathematical Modeling</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Comprehensive mathematical analysis with Fourier transforms and signal processing algorithms.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-wave-square" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Signal Analysis</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Advanced signal processing with frequency domain analysis and pattern optimization.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-file-export" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Data Export</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Comprehensive data export capabilities with multiple format support and report generation.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-sliders-h" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Parameter Control</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  Interactive parameter adjustment with real-time visualization updates and optimization tools.
                </p>
              </div>
              
              <div style={{
                background: '#21262d',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <i className="fas fa-microscope" style={{fontSize: '1.5rem', color: '#58a6ff', marginBottom: '15px'}}></i>
                <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px', color: '#e6edf3'}}>Scientific Computing</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  High-precision numerical methods for electromagnetic field calculations and analysis.
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
              }}>3,200+</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Lines of Code</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>360°</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Pattern Analysis</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>Real-time</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Visualization</span>
            </div>
            <div style={{textAlign: 'center', padding: '15px'}}>
              <span style={{
                display: 'block',
                fontSize: '2.5em',
                fontWeight: '700',
                color: '#58a6ff',
                marginBottom: '5px'
              }}>Scientific</span>
              <span style={{fontSize: '0.9em', color: '#8b949e', fontWeight: '500'}}>Precision</span>
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
              <img src="/projects/radiation-analyzer/pp1.png" alt="Radiation Pattern Analysis Interface" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
            <div style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)'}}>
              <img src="/projects/radiation-analyzer/pp2.png" alt="Polar Plot Visualization" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
            <div style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)'}}>
              <img src="/projects/radiation-analyzer/pp3.png" alt="Parameter Control Panel" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
            <div style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)'}}>
              <img src="/projects/radiation-analyzer/pp4.png" alt="3D Pattern Visualization" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
            <div style={{borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.4)'}}>
              <img src="/projects/radiation-analyzer/pp5.png" alt="Data Analysis Results" style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
          </div>
        </div>
      </div>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js" />
    </div>
  );
}