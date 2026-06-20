'use client';

import React from 'react';
import {
  Phone,
  MessageCircle,
  Cake,
  Shield,
  Users,
  Zap,
  Dumbbell,
  Tent,
  Gift,
} from 'lucide-react';

interface HeroProps {
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImage = 'herobg.png' }) => {
  const features = [
    { icon: Shield, label: 'Safe & Child-Friendly Environment', color: '#34B36B', bg: '#E3F7EA' },
    { icon: Users, label: 'Experienced Trainers', color: '#3D8BFF', bg: '#E5EFFF' },
    { icon: Zap, label: 'Activity-Based Learning', color: '#E8A621', bg: '#FFF3D9' },
    { icon: Dumbbell, label: 'Mother Fitness Programs', color: '#FF4D8D', bg: '#FFE6EF' },
    { icon: Tent, label: 'Summer & Winter Camps', color: '#8B5CF6', bg: '#EFE7FE' },
    { icon: Gift, label: 'Birthday Party Celebrations', color: '#FF8A3D', bg: '#FFEADB' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Quicksand:wght@500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { width: 100%; height: 100%; scroll-behavior: smooth; }

        body {
          font-family: 'Quicksand', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #3F3A52;
        }

        h1 {
          font-family: 'Baloo 2', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 800;
          line-height: 1.05;
        }

        /* ---------- Section shell ---------- */
        .hero-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background-color: #FFF7EC;
          padding-bottom: 36px; /* room for the scalloped edge */
        }

        /* Signature detail: a soft scalloped edge, like a torn-paper cloud,
           closing out the section instead of a flat line. */
        .hero-container::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 36px;
          background: radial-gradient(circle at 18px 0, transparent 19px, #ffffff 20px);
          background-size: 36px 36px;
          background-repeat: repeat-x;
        }

        .hero-illustration {
          position: absolute;
          top: 0;
          right: 0;
          height: 80%;
          width: 56%;
          z-index: 0;
          pointer-events: none;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
        }

        .hero-illustration img {
          width: 100%;
          height: auto;
          max-height: 95%;
          object-fit: contain;
          object-position: bottom right;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 3rem 1.25rem;
        }

        .hero-inner {
          max-width: 80rem;
          width: 100%;
          margin: 0 auto;
        }

        .hero-text-col {
          display: flex;
          flex-direction: column;
        }

        /* ---------- Badge ---------- */
        .hero-badge {
          display: inline-flex;
          align-self: flex-start;
          margin-bottom: 1.1rem;
          padding: 0.5rem 1.2rem;
          background-color: #FFD166;
          border-radius: 9999px;
          font-size: 0.7rem;
          font-weight: 700;
          color: #6B4500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          transform: rotate(-2deg);
        }

        /* ---------- Title ---------- */
        .hero-title {
          margin-bottom: 1.1rem;
          font-size: 2.5rem;
          letter-spacing: -0.01em;
        }

        .hero-title-line { display: block; }
        .text-pink { color: #FF4D8D; }
        .text-blue { color: #3D8BFF; }

        /* ---------- Description ---------- */
        .hero-description {
          margin-bottom: 1.75rem;
          font-size: 1rem;
          line-height: 1.6;
          color: #6B6480;
          max-width: 34rem;
          font-weight: 600;
        }

        /* ---------- Buttons ---------- */
        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }

        .hero-button {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.85rem 1.5rem;
          border: none;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.95rem;
          font-family: 'Quicksand', sans-serif;
          border-radius: 9999px;
          cursor: pointer;
          transition: transform 0.15s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        .hero-button:hover { transform: translateY(-2px); }
        .hero-button svg { width: 18px; height: 18px; stroke: #ffffff; stroke-width: 2.25; }

        .btn-call { background-color: #FF4D8D; }
        .btn-whatsapp { background-color: #34B36B; }
        .btn-birthday { background-color: #FF8A3D; }

        /* ---------- Features ---------- */
        .hero-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }

        .hero-feature {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.5rem 0.9rem 0.5rem 0.5rem;
          background-color: #ffffff;
          border-radius: 9999px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }

        .hero-feature-icon {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-feature-icon svg { width: 14px; height: 14px; stroke-width: 2.25; }

        .hero-feature-text {
          font-size: 0.75rem;
          font-weight: 700;
          line-height: 1.3;
          white-space: nowrap;
        }

        /* ---------- Responsive ---------- */
        @media (min-width: 640px) {
          .hero-badge { font-size: 0.8rem; padding: 0.55rem 1.4rem; }
          .hero-title { font-size: 3.25rem; }
          .hero-description { font-size: 1.1rem; margin-bottom: 2rem; }
          .hero-feature-text { font-size: 0.85rem; }
        }

        @media (min-width: 1024px) {
          .hero-title { font-size: 4rem; }
          .hero-text-col { max-width: 44%; }
        }

        @media (max-width: 1023px) {
          .hero-container { display: flex; flex-direction: column; }
          .hero-content { padding: 2.5rem 1.25rem; order: 1; }
          .hero-illustration {
            position: relative;
            width: 100%;
            height: auto;
            justify-content: center;
            margin-top: 1.5rem;
            order: 2;
          }
          .hero-illustration img { width: 100%; max-width: 26rem; max-height: none; }
          .hero-inner { display: flex; flex-direction: column; }
        }
      `}</style>

      <div className="hero-container">
        <div className="hero-illustration">
          <img src={`/${backgroundImage}`} alt="A mother and child playing together" />
        </div>

        <div className="hero-content">
          <div className="hero-inner">
            <div className="hero-text-col">
              <div className="hero-badge">A Fun, Engaging &amp; Active Place</div>

              <h1 className="hero-title">
                <span className="hero-title-line text-pink">For Moms</span>
                <span className="hero-title-line text-blue">&amp; Kids</span>
              </h1>

              <p className="hero-description">
                Patna's unique mother &amp; child activity centre where children learn,
                play, grow and explore while mothers stay active, healthy and engaged.
              </p>

             <div className="hero-buttons">
  <button
    className="hero-button btn-call"
    onClick={() => window.location.href = "tel:+916207368839"}
  >
    <Phone size={18} />
    <span>Call Now</span>
  </button>

  <button
    className="hero-button btn-whatsapp"
    onClick={() =>
      window.open(
        "https://wa.me/916207368839?text=Hello%20Phulwari%20Mother%20%26%20Child%20Activity%20Centre.%20I%20would%20like%20to%20know%20more%20about%20your%20programs%2C%20admissions%2C%20birthday%20parties%20and%20camps.",
        "_blank"
      )
    }
  >
    <MessageCircle size={18} />
    <span>WhatsApp Us</span>
  </button>
</div>

              <div className="hero-features">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="hero-feature">
                      <div className="hero-feature-icon" style={{ backgroundColor: feature.bg }}>
                        <IconComponent style={{ stroke: feature.color }} />
                      </div>
                      <p className="hero-feature-text" style={{ color: feature.color }}>
                        {feature.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;