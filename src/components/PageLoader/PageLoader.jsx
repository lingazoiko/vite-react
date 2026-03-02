import { useState, useEffect } from 'react';
import logo from '/images/z-logo.png'; // ✅ adjust path if needed

function PageLoader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setProgress(25),  200),
      setTimeout(() => setProgress(50),  600),
      setTimeout(() => setProgress(75),  1000),
      setTimeout(() => setProgress(100), 1400),
      setTimeout(() => setLeaving(true), 1700),
      setTimeout(() => onFinish?.(),     2200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#050508',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      opacity: leaving ? 0 : 1,
      transform: leaving ? 'scale(1.03)' : 'scale(1)',
      transition: leaving ? 'opacity 0.55s ease, transform 0.55s ease' : 'none',
      pointerEvents: leaving ? 'none' : 'all',
    }}>

      {/* Ambient glow blobs */}
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        top: '10%', left: '25%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
        filter: 'blur(60px)', animation: 'lgPulse 4s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 350, height: 350, borderRadius: '50%',
        bottom: '15%', right: '20%',
        background: 'radial-gradient(circle, rgba(236,72,153,0.09) 0%, transparent 70%)',
        filter: 'blur(60px)', animation: 'lgPulse 4s ease-in-out infinite 2s',
      }} />

      {/* Logo + spinning rings */}
      <div style={{ position: 'relative', marginBottom: 48 }}>

        {/* Outer slow dashed ring */}
        <svg style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'lgSpinSlow 8s linear infinite',
          width: 160, height: 160,
        }} viewBox="0 0 160 160">
          <circle cx="80" cy="80" r="74"
            fill="none" stroke="rgba(99,102,241,0.25)"
            strokeWidth="1" strokeDasharray="8 6"
          />
        </svg>

        {/* Inner fast gradient arc */}
        <svg style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'lgSpinFast 1.4s linear infinite',
          width: 140, height: 140,
        }} viewBox="0 0 140 140">
          <defs>
            <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <circle cx="70" cy="70" r="64"
            fill="none" stroke="url(#arcGrad)"
            strokeWidth="2.5" strokeDasharray="80 320"
            strokeLinecap="round"
          />
        </svg>

        {/* Glow behind logo */}
        <div style={{
          position: 'absolute', inset: -6, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)',
          filter: 'blur(14px)',
          animation: 'lgGlow 2s ease-in-out infinite',
        }} />

        {/* Logo circle */}
        <div style={{
          width: 110, height: 110, borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'lgBreathe 2.5s ease-in-out infinite',
          overflow: 'hidden',
        }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: '70%', height: '70%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 8px rgba(99,102,241,0.6))',
            }}
          />
        </div>
      </div>

      {/* Bouncing dots */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 5, height: 5, borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1, #ec4899)',
            animation: 'lgDot 1.2s ease-in-out infinite',
            animationDelay: `${i * 0.2}s`,
          }} />
        ))}
      </div>

      {/* Progress bar */}
      <div style={{
        width: 220, height: 2,
        background: 'rgba(255,255,255,0.06)',
        borderRadius: 99, overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', borderRadius: 99,
          background: 'linear-gradient(90deg, #6366f1, #ec4899)',
          width: `${progress}%`,
          transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: '0 0 10px rgba(99,102,241,0.8)',
        }} />
      </div>

      <div style={{
        fontFamily: "'Courier New', monospace",
        fontSize: 10, letterSpacing: '0.3em',
        color: 'rgba(255,255,255,0.2)', marginTop: 10,
      }}>
        {progress}%
      </div>

      <style>{`
        @keyframes lgSpinSlow  { to { transform: translate(-50%,-50%) rotate(360deg); } }
        @keyframes lgSpinFast  { to { transform: translate(-50%,-50%) rotate(360deg); } }
        @keyframes lgPulse     { 0%,100%{ opacity:1; } 50%{ opacity:0.5; } }
        @keyframes lgGlow      { 0%,100%{ opacity:0.6; } 50%{ opacity:1; } }
        @keyframes lgBreathe   { 0%,100%{ transform:scale(1); } 50%{ transform:scale(0.95); } }
        @keyframes lgDot {
          0%,80%,100% { transform:scale(0.6); opacity:0.3; }
          40%          { transform:scale(1.3); opacity:1; }
        }
      `}</style>
    </div>
  );
}

export default PageLoader;