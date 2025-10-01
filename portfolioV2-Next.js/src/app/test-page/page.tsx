"use client";

export default function TestPage() {
  return (
    <div style={{
      background: '#0d1117',
      color: '#e6edf3',
      minHeight: '100vh',
      padding: '40px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        color: '#58a6ff',
        fontSize: '3rem',
        marginBottom: '20px'
      }}>
        Test Page - Can You See This?
      </h1>
      <p style={{
        color: '#8b949e',
        fontSize: '1.2rem',
        marginBottom: '20px'
      }}>
        This is a test to see if text is visible on project pages.
      </p>
      <div style={{
        background: '#161b22',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #30363d'
      }}>
        <h2 style={{color: '#e6edf3'}}>Test Section</h2>
        <p style={{color: '#8b949e'}}>If you can see this text, then the issue is with the CSS in the main project pages.</p>
      </div>
    </div>
  );
}