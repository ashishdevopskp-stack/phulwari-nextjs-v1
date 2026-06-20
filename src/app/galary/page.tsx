'use client';

import React, { useState } from 'react';
import {
  Camera,
  Cake,
  Tent,
  Snowflake,
  X,
  Heart,
  CheckCircle2,
  Trophy,
  Users2,
  Play,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Gallery items (photos + video)                                           */
/* -------------------------------------------------------------------------- */

interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  tall?: boolean;
  /** Poster frame shown for video items before they're opened in the lightbox */
  poster?: string;
}

/* Add matching files to /public — photos as galaryN.png, the clip as gallery-video.mp4 —
   or update the src paths below to point at your own assets. */
const galleryItems: GalleryItem[] = [
  { type: 'video', src: '/phulwariplayback.mp4', alt: '', tall: true, poster: '/phulwariplayback.mp4' },

  { src: '/galary2.png', alt: '', type: 'image' },
  { src: '/galary3.png', alt: '', type: 'image' },
  { src: '/galary4.png', alt: '', type: 'image' },
  { src: '/galary5.png', alt: '', type: 'image', tall: true },
  { src: '/galary6.png', alt: '', type: 'image' },
  { src: '/galary7.png', alt: '', type: 'image' },
  { src: '/galary8.png', alt: '', type: 'image' },

  { src: '/galary9.png', alt: '', type: 'image', tall: true },
  { src: '/galary10.png', alt: '', type: 'image' },
  { src: '/galary11.png', alt: '', type: 'image' },
  { src: '/galary12.png', alt: '', type: 'image' },

  { src: '/galary13.png', alt: '', type: 'image', tall: true },
  { src: '/galary14.png', alt: '', type: 'image' },
  { src: '/galary15.png', alt: '', type: 'image' },
  { src: '/galary16.png', alt: '', type: 'image' },
];

const featuredMoments = [
  { icon: Camera, text: 'Best Activity Photos' },
  { icon: Tent, text: 'Summer Camp Highlights' },
  { icon: Snowflake, text: 'Winter Camp Highlights' },
  { icon: Cake, text: 'Birthday Celebrations' },
  { icon: Trophy, text: 'Award Ceremonies' },
  { icon: Users2, text: 'Family Engagement Activities' },
  { icon: Heart, text: 'Mother & Child Programs' },
];

const memoryValues = [
  'Learning',
  'Creativity',
  'Confidence',
  'Friendship',
  'Family Bonding',
  'Fun Experiences',
  'Personal Growth',
];

/* -------------------------------------------------------------------------- */
/*  Component                                                                */
/* -------------------------------------------------------------------------- */

export default function GalleryPage() {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Quicksand:wght@500;600;700&display=swap');

        @keyframes glFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glPopIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes glFloatBadge {
          0%, 100% { transform: rotate(-2deg) translateY(0); }
          50% { transform: rotate(-2deg) translateY(-4px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .gl-intro-badge, .gl-grid-item, .gl-intro, .gl-lightbox-img { animation: none !important; }
        }

        .gl-page { background-color: #FFF7EC; font-family: 'Quicksand', sans-serif; color: #3F3A52; }

        /* ---------- Intro ---------- */
        .gl-intro {
          max-width: 56rem; margin: 0 auto; padding: 4rem 1.25rem 2rem; text-align: center;
          animation: glFadeUp 0.6s ease both;
        }
        .gl-intro-badge {
          display: inline-flex; padding: 0.5rem 1.2rem; margin-bottom: 1rem; background-color: #FFD166;
          border-radius: 9999px; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.04em;
          text-transform: uppercase; color: #6B4500; animation: glFloatBadge 4s ease-in-out infinite;
        }
        .gl-intro-title { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 2.2rem; line-height: 1.15; margin-bottom: 0.9rem; }
        .gl-intro-title span { color: #FF4D8D; }
        .gl-intro-text { font-weight: 600; font-size: 1.02rem; line-height: 1.7; color: #6B6480; }

        /* ---------- Masonry grid ---------- */
        .gl-grid {
          max-width: 72rem; margin: 0 auto; padding: 0 1.25rem 1rem;
          column-count: 2; column-gap: 0.75rem;
        }
        .gl-grid-item {
          break-inside: avoid; margin-bottom: 0.75rem; position: relative; border-radius: 18px;
          overflow: hidden; cursor: pointer; box-shadow: 0 6px 16px rgba(63,58,82,0.08);
          animation: glPopIn 0.45s ease both;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .gl-grid-item:hover { box-shadow: 0 12px 26px rgba(63,58,82,0.16); transform: translateY(-3px); }
        .gl-grid-item img,
        .gl-grid-item video { width: 100%; display: block; object-fit: cover; transition: transform 0.35s ease; background-color: #F0ECE2; }
        .gl-grid-item.tall img,
        .gl-grid-item.tall video { aspect-ratio: 3 / 4; }
        .gl-grid-item:not(.tall) img,
        .gl-grid-item:not(.tall) video { aspect-ratio: 4 / 3; }
        .gl-grid-item:hover img,
        .gl-grid-item:hover video { transform: scale(1.07); }
        .gl-grid-overlay {
          position: absolute; inset: 0; background: linear-gradient(to top, rgba(63,58,82,0.55), transparent 55%);
          opacity: 0; transition: opacity 0.2s ease; display: flex; align-items: flex-end; padding: 0.7rem;
        }
        .gl-grid-item:hover .gl-grid-overlay { opacity: 1; }
        .gl-grid-overlay span { color: #ffffff; font-size: 0.72rem; font-weight: 700; }
        .gl-play-badge {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 54px; height: 54px; border-radius: 9999px; background-color: rgba(255,255,255,0.92);
          display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 20px rgba(0,0,0,0.25);
          transition: transform 0.2s ease;
        }
        .gl-grid-item:hover .gl-play-badge { transform: translate(-50%, -50%) scale(1.08); }
        .gl-play-badge svg { width: 22px; height: 22px; color: #FF4D8D; stroke-width: 2.5; margin-left: 3px; }
        .gl-empty {
          text-align: center; padding: 3rem 1.25rem; font-weight: 700; color: #6B6480; font-size: 0.95rem;
        }

        @media (min-width: 640px) { .gl-grid { column-count: 3; } }
        @media (min-width: 1024px) { .gl-grid { column-count: 4; } }

        /* ---------- Lightbox ---------- */
        .gl-lightbox {
          position: fixed; inset: 0; z-index: 100; background-color: rgba(63,58,82,0.88);
          display: flex; align-items: center; justify-content: center; padding: 1.5rem;
          animation: glFadeUp 0.2s ease both;
        }
        .gl-lightbox-img {
          max-width: 90vw; max-height: 85vh; border-radius: 16px; box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          animation: glPopIn 0.25s ease both;
        }
        .gl-lightbox-close {
          position: absolute; top: 1.25rem; right: 1.25rem; width: 42px; height: 42px; border-radius: 9999px;
          background-color: #ffffff; display: flex; align-items: center; justify-content: center; border: none;
          cursor: pointer; transition: transform 0.15s ease;
        }
        .gl-lightbox-close:hover { transform: scale(1.08); }
        .gl-lightbox-close svg { width: 20px; height: 20px; color: #3F3A52; stroke-width: 2.5; }

        /* ---------- Section shell ---------- */
        .gl-section { max-width: 72rem; margin: 0 auto; padding: 3rem 1.25rem; }
        .gl-section-head { text-align: center; max-width: 42rem; margin: 0 auto 2.25rem; }
        .gl-section-title { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 1.9rem; margin-bottom: 0.6rem; }
        .gl-section-title span { color: #3D8BFF; }
        .gl-section-text { font-weight: 600; color: #6B6480; line-height: 1.6; }

        /* ---------- Featured moments ---------- */
        .gl-featured-grid { display: grid; grid-template-columns: 1fr; gap: 0.75rem; }
        .gl-featured-item {
          display: flex; align-items: center; gap: 0.7rem; background-color: #ffffff;
          border-radius: 16px; padding: 1rem 1.1rem; box-shadow: 0 6px 16px rgba(63,58,82,0.05);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .gl-featured-item:hover { transform: translateY(-2px); box-shadow: 0 10px 22px rgba(63,58,82,0.1); }
        .gl-featured-icon {
          width: 38px; height: 38px; border-radius: 9999px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center; background-color: #FFE6EF;
        }
        .gl-featured-icon svg { width: 18px; height: 18px; color: #FF4D8D; stroke-width: 2.25; }
        .gl-featured-item span { font-weight: 700; font-size: 0.88rem; }
        @media (min-width: 640px) { .gl-featured-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .gl-featured-grid { grid-template-columns: repeat(4, 1fr); } }

        /* ---------- Why gallery matters ---------- */
        .gl-values { display: flex; flex-wrap: wrap; gap: 0.6rem; justify-content: center; }
        .gl-value-pill {
          display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.1rem;
          background-color: #ffffff; border-radius: 9999px; box-shadow: 0 2px 6px rgba(0,0,0,0.04);
          font-weight: 700; font-size: 0.85rem; transition: transform 0.18s ease;
        }
        .gl-value-pill:hover { transform: translateY(-2px); }
        .gl-value-pill svg { width: 16px; height: 16px; color: #34B36B; stroke-width: 2.5; }
      `}</style>

      <div className="gl-page">
        {/* Intro */}
        <section className="gl-intro">
          <span className="gl-intro-badge">Gallery</span>
          <h1 className="gl-intro-title">
            Capturing Moments of <span>Learning, Fun &amp; Growth</span>
          </h1>
          <p className="gl-intro-text">
            Every smile, every achievement and every joyful moment tells a story — explore
            activities, celebrations, camps and special events from the Phulwari family.
          </p>
        </section>

        {/* Photo + video grid */}
        {galleryItems.length > 0 ? (
          <div className="gl-grid">
            {galleryItems.map((item, i) => (
              <div
                className={`gl-grid-item ${item.tall ? 'tall' : ''}`}
                key={`${item.src}-${i}`}
                style={{ animationDelay: `${Math.min(i, 10) * 0.04}s` }}
                onClick={() => setLightboxItem(item)}
              >
                {item.type === 'video' ? (
                  <>
                    <video src={item.src} poster={item.poster} muted playsInline preload="metadata" />
                    <span className="gl-play-badge">
                      <Play />
                    </span>
                  </>
                ) : (
                  <img src={item.src} alt={item.alt} loading="lazy" />
                )}
                <div className="gl-grid-overlay">
                  <span>{item.alt}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="gl-empty">More photos are coming soon.</p>
        )}

        {/* Featured moments */}
        <section className="gl-section">
          <div className="gl-section-head">
            <h2 className="gl-section-title">
              Featured <span>Moments</span>
            </h2>
            <p className="gl-section-text">A handpicked collection of our most memorable moments.</p>
          </div>
          <div className="gl-featured-grid">
            {featuredMoments.map((m, i) => {
              const Icon = m.icon;
              return (
                <div className="gl-featured-item" key={i}>
                  <span className="gl-featured-icon">
                    <Icon />
                  </span>
                  <span>{m.text}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why gallery matters */}
        <section className="gl-section">
          <div className="gl-section-head">
            <h2 className="gl-section-title">
              Why Our <span>Gallery Matters</span>
            </h2>
            <p className="gl-section-text">
              At Phulwari, we don&apos;t just conduct activities — we create experiences and
              memories that last a lifetime.
            </p>
          </div>
          <div className="gl-values">
            {memoryValues.map((v, i) => (
              <span className="gl-value-pill" key={i}>
                <CheckCircle2 />
                {v}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {lightboxItem && (
        <div className="gl-lightbox" onClick={() => setLightboxItem(null)}>
          <button className="gl-lightbox-close" onClick={() => setLightboxItem(null)} type="button">
            <X />
          </button>
          {lightboxItem.type === 'video' ? (
            <video
              className="gl-lightbox-img"
              src={lightboxItem.src}
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              className="gl-lightbox-img"
              src={lightboxItem.src}
              alt={lightboxItem.alt}
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </>
  );
}