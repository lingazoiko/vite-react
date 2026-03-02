import { useState, useEffect } from "react";
import "./style.css";

// Generate star data once outside component
const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  dur: (Math.random() * 3 + 2).toFixed(1),
  delay: (Math.random() * 4).toFixed(1),
}));

/* ================= Astronaut SVG ================= */
function AstronautSVG() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      {/* Body */}
      <ellipse cx="50" cy="65" rx="22" ry="26" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />

      {/* Helmet */}
      <circle cx="50" cy="36" r="20" fill="#c7d2fe" stroke="#6366f1" strokeWidth="2" />

      {/* Visor */}
      <path d="M36 30 Q50 44 64 30" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />

      {/* Arms */}
      <rect
        x="22" y="52" width="10" height="22" rx="5"
        fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5"
        transform="rotate(-15 27 63)"
      />
      <rect
        x="68" y="52" width="10" height="22" rx="5"
        fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5"
        transform="rotate(15 73 63)"
      />

      {/* Legs */}
      <rect x="36" y="86" width="12" height="10" rx="4" fill="#c7d2fe" stroke="#6366f1" strokeWidth="1.5" />
      <rect x="52" y="86" width="12" height="10" rx="4" fill="#c7d2fe" stroke="#6366f1" strokeWidth="1.5" />

      {/* Chest panel */}
      <rect x="43" y="60" width="14" height="10" rx="2" fill="#6366f1" opacity="0.6" />
      <circle cx="47" cy="64" r="1.5" fill="#f43f5e" />
      <circle cx="53" cy="64" r="1.5" fill="#4ade80" />

      {/* Jetpack */}
      <rect
        x="66" y="56" width="8" height="20" rx="3"
        fill="#a5b4fc" stroke="#6366f1" strokeWidth="1.5"
      />

      {/* Star sparkle */}
      <g opacity="0.8">
        <line x1="15" y1="20" x2="15" y2="28" stroke="#fbbf24" strokeWidth="1.5" />
        <line x1="11" y1="24" x2="19" y2="24" stroke="#fbbf24" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

/* ================= 404 PAGE ================= */
export default function NotFound() {
  const [typed, setTyped] = useState("");
  const message = "The page you're looking for drifted into the void.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < message.length) {
        setTyped(message.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 35);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page notfound-page">
      <div className="scanline" />
      <div className="grid" />

      {/* Starfield */}
      <div className="stars">
        {STARS.map((s) => (
          <div
            key={s.id}
            className="star"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              "--dur": `${s.dur}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="orbit-ring" />

      <div className="corner corner-tl" />
      <div className="corner corner-tr" />
      <div className="corner corner-bl" />
      <div className="corner corner-br" />

      <div className="container">
        <div className="glitch-wrapper">
          <div className="glitch">404</div>
        </div>

        <div className="neon-line" />

        <div className="astronaut-wrap">
          <AstronautSVG />
        </div>

        <p className="heading">Lost in Space</p>

        <p className="subtext">
          {typed}
          <span className="cursor" />
        </p>

        <button className="btn" onClick={() => window.history.back()}>
          ← Return Home <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
}