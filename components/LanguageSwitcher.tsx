'use client';

import { useLanguage, Language } from '../lib/language-context';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: t('language.english'), flag: '🇺🇸' },
    { code: 'fr', name: t('language.french'), flag: '🇫🇷' }
  ];

  return (
    <div className="language-switcher-navbar">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="language-select-navbar"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '6px',
          color: '#e6edf3',
          padding: '8px 12px',
          fontSize: '14px',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)',
          outline: 'none',
          transition: 'all 0.3s ease',
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          zIndex: '10'
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLSelectElement;
          target.style.background = 'rgba(255, 255, 255, 0.2)';
          target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLSelectElement;
          target.style.background = 'rgba(255, 255, 255, 0.1)';
          target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }}
      >
        {languages.map((lang) => (
          <option
            key={lang.code}
            value={lang.code}
            style={{
              background: '#0d1117',
              color: '#e6edf3'
            }}
          >
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}