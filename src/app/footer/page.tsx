'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  MessageCircle,
  Cake,
  Tent,
  Snowflake,
  MapPin,
  Mail,
  Music,
  Disc3,
  Activity,
  Swords,
  Footprints,
  Palette,
  Target,
  Flower2,
  Blocks,
  Baby,
  Dumbbell,
  Users,
  Star,
  Sparkles,
} from 'lucide-react';

interface LinkItem {
  label: string;
  href: string;
}

const quickLinks: LinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Activities', href: '/activities' },
  { label: 'Programs for Mothers', href: '/mothers' },
  { label: 'Birthday Parties', href: '/events/birthday' },
  { label: 'Summer Camp', href: '/events/summer' },
  { label: 'Winter Camp', href: '/events/winter' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

const activities = [
  { icon: Music, label: 'Music Classes', color: '#FF4D8D', href: '/activities/music-dance' },
  { icon: Disc3, label: 'Dance Classes', color: '#3D8BFF', href: '/activities/music-dance' },
  { icon: Activity, label: 'Gymnastics', color: '#34B36B', href: '/activities/gymnastics-mma' },
  { icon: Swords, label: 'MMA Training', color: '#E8A621', href: '/activities/gymnastics-mma' },
  { icon: Footprints, label: 'Roller Skating', color: '#8B5CF6', href: '/activities/roller-skating' },
  { icon: Palette, label: 'Art & Craft', color: '#FF8A3D', href: '/activities/art-craft' },
  { icon: Target, label: 'Cricket Training', color: '#3D8BFF', href: '/activities/yoga-cricket' },
  { icon: Flower2, label: 'Yoga', color: '#34B36B', href: '/activities/yoga-cricket' },
  { icon: Blocks, label: 'Play Zone', color: '#FF4D8D', href: '/activities/play-zone' },
  { icon: Baby, label: 'Mother & Toddler Program', color: '#E8A621', href: '/mothers/toddler-program' },
  { icon: Dumbbell, label: 'Fitness Program for Mothers', color: '#8B5CF6', href: '/mothers/fitness' },
];

const programs = [
  { icon: Users, label: 'Mother & Toddler Program', color: '#3D8BFF', href: '/mothers/toddler-program' },
  { icon: Dumbbell, label: 'Mother Fitness Program', color: '#34B36B', href: '/mothers/fitness' },
  { icon: Tent, label: 'Summer Camp', color: '#34B36B', href: '/events/summer' },
  { icon: Snowflake, label: 'Winter Camp', color: '#3D8BFF', href: '/events/winter' },
  { icon: Cake, label: 'Birthday Celebrations', color: '#FF8A3D', href: '/events/birthday' },
];

const workingHours = [
  {
    icon: Users,
    title: 'Mother & Toddler Program',
    color: '#3D8BFF',
    lines: ['Monday – Saturday', '10:30 AM – 11:30 AM'],
  },
  {
    icon: Star,
    title: 'Premium Circle',
    color: '#FFD166',
    lines: ['Monday – Sunday', '5:00 PM Onwards'],
  },
  {
    icon: Sparkles,
    title: 'Phulwari Core',
    color: '#FF4D8D',
    lines: ['Wednesday – Sunday', '6:30 PM Onwards'],
  },
];

const quickActions = [
  { icon: Phone, label: 'Call Now', bg: '#FF4D8D', href: 'tel:+916207368839', external: true },
  { icon: MessageCircle, label: 'WhatsApp Now', bg: '#34B36B', href: 'https://wa.me/916207368839', external: true },
  { icon: Cake, label: 'Book Birthday Party', bg: '#FF8A3D', href: '/events/birthday', external: false },
  { icon: Tent, label: 'Join Summer Camp', bg: '#3D8BFF', href: '/events/summer', external: false },
  { icon: Snowflake, label: 'Join Winter Camp', bg: '#8B5CF6', href: '/events/winter', external: false },
];

const Footer: React.FC = () => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Quicksand:wght@500;600;700&display=swap');

        .footer-shell {
          position: relative;
          width: 100%;
          background-color: #322D45;
          padding-top: 40px;
          overflow: hidden;
          font-family: 'Quicksand', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Scalloped cap that "closes" the cream section above into the footer,
           mirroring the hero's torn-paper edge. */
        .footer-shell::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 36px;
          background: radial-gradient(circle at 18px 36px, transparent 19px, #FFF7EC 20px);
          background-size: 36px 36px;
          background-repeat: repeat-x;
        }

        .footer-inner {
          position: relative;
          z-index: 1;
          max-width: 80rem;
          margin: 0 auto;
          padding: 1.5rem 1.25rem 0;
        }

        .footer-heading {
          font-family: 'Baloo 2', sans-serif;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        .footer-eyebrow {
          font-family: 'Quicksand', sans-serif;
          font-weight: 700;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #B7AFD1;
          margin-bottom: 0.6rem;
        }

        /* ---------- Brand block ---------- */
        .footer-brand-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.85rem;
        }

        .footer-logo-badge {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          background-color: #FFD166;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .footer-brand-name {
          font-size: 1.3rem;
          line-height: 1.15;
        }

        .footer-tagline {
          font-weight: 700;
          font-size: 0.9rem;
          color: #FFD166;
          margin-bottom: 0.85rem;
        }

        .footer-description {
          font-weight: 600;
          font-size: 0.9rem;
          line-height: 1.65;
          color: #C7C0DC;
          max-width: 26rem;
          margin-bottom: 1.5rem;
        }

        .footer-social-row {
          display: flex;
          gap: 0.6rem;
          margin-bottom: 0.5rem;
        }

        .footer-social-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 0.9rem 0.45rem 0.45rem;
          background-color: rgba(255,255,255,0.07);
          border-radius: 9999px;
          font-weight: 700;
          font-size: 0.78rem;
          color: #ffffff;
          text-decoration: none;
        }

        .footer-social-icon {
          width: 24px;
          height: 24px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .footer-social-icon svg { width: 12px; height: 12px; stroke: #ffffff; stroke-width: 2.5; }

        /* ---------- Grid columns ---------- */
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.25rem;
          padding: 2.5rem 0 2.75rem;
          border-top: 1px solid rgba(255,255,255,0.08);
          margin-top: 1.5rem;
        }

        .footer-col-title {
          font-family: 'Baloo 2', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .footer-links-list a {
          font-weight: 600;
          font-size: 0.88rem;
          color: #C7C0DC;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .footer-links-list a:hover,
        .footer-links-list a.is-active { color: #FFD166; }

        .footer-tag-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-tag-item {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          text-decoration: none;
          transition: transform 0.15s ease;
        }

        .footer-tag-item:hover { transform: translateX(2px); }
        .footer-tag-item:hover .footer-tag-label { color: #FFD166; }

        .footer-tag-icon {
          flex-shrink: 0;
          width: 26px;
          height: 26px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-tag-icon svg { width: 13px; height: 13px; stroke-width: 2.4; }

        .footer-tag-label {
          font-weight: 600;
          font-size: 0.86rem;
          color: #DCD7EB;
          transition: color 0.15s ease;
        }

        /* ---------- Contact ---------- */
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          margin-bottom: 1rem;
        }

        .footer-contact-icon {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 9999px;
          background-color: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.05rem;
        }

        .footer-contact-icon svg { width: 14px; height: 14px; stroke: #FFD166; stroke-width: 2.25; }

        .footer-contact-text {
          font-weight: 600;
          font-size: 0.86rem;
          line-height: 1.55;
          color: #DCD7EB;
        }

        .footer-contact-text a { color: #DCD7EB; text-decoration: none; }
        .footer-contact-text a:hover { color: #FFD166; }

        /* ---------- Working hours ---------- */
        .footer-hours-card {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          padding: 0.75rem;
          background-color: rgba(255,255,255,0.05);
          border-radius: 16px;
          margin-bottom: 0.75rem;
        }

        .footer-hours-icon {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-hours-icon svg { width: 14px; height: 14px; stroke: #ffffff; stroke-width: 2.4; }

        .footer-hours-title {
          font-weight: 700;
          font-size: 0.84rem;
          color: #ffffff;
          margin-bottom: 0.2rem;
        }

        .footer-hours-line {
          font-weight: 600;
          font-size: 0.78rem;
          color: #B7AFD1;
          line-height: 1.45;
        }

        /* ---------- Quick actions band ---------- */
        .footer-actions-band {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.7rem;
          padding-bottom: 2.25rem;
        }

        .footer-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.25rem;
          border: none;
          border-radius: 9999px;
          color: #ffffff;
          font-family: 'Quicksand', sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.15s ease;
        }

        .footer-action-btn:hover { transform: translateY(-2px); }
        .footer-action-btn svg { width: 15px; height: 15px; stroke: #ffffff; stroke-width: 2.4; }

        /* ---------- Bottom bar ---------- */
        .footer-bottom-bar {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 1.25rem 0 1.75rem;
          text-align: center;
        }

        .footer-bottom-text {
          font-weight: 600;
          font-size: 0.78rem;
          color: #9991B3;
          line-height: 1.6;
        }

        .footer-bottom-text strong { color: #C7C0DC; font-weight: 700; }

        .footer-credit {
          font-weight: 600;
          font-size: 0.78rem;
          color: #9991B3;
          margin-top: 0.4rem;
        }

        .footer-credit a {
          color: #FFD166;
          font-weight: 700;
          text-decoration: none;
        }

        .footer-credit a:hover { text-decoration: underline; }

        @media (min-width: 640px) {
          .footer-brand-name { font-size: 1.45rem; }
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1.2fr 0.85fr 1fr 1fr;
            gap: 1.75rem;
          }
        }

        @media (min-width: 1024px) {
          .footer-inner { padding-left: 2rem; padding-right: 2rem; }
        }
      `}</style>

      <footer className="footer-shell">
        <div className="footer-inner">
          {/* ---------- Brand row ---------- */}
          <div>
            <div className="footer-brand-row">
              <span className="footer-logo-badge">🌈</span>
              <h2 className="footer-heading footer-brand-name">
                Phulwari Mother &amp; Child Activity Centre
              </h2>
            </div>
            <p className="footer-tagline">Where Learning, Play &amp; Growth Come Together.</p>
            <p className="footer-description">
              A unique activity centre dedicated to the holistic development of children
              and the well-being of mothers through engaging activities, fitness programs,
              camps, celebrations, and family-focused experiences.
            </p>
          </div>

          {/* ---------- Grid columns ---------- */}
          <div className="footer-grid">
            {/* Quick Links */}
            <div>
              <h3 className="footer-col-title">Quick Links</h3>
              <ul className="footer-links-list">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={isActive(link.href) ? 'is-active' : ''}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities */}
            <div>
              <h3 className="footer-col-title">Our Activities</h3>
              <div className="footer-tag-list">
                {activities.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <Link key={activity.label} href={activity.href} className="footer-tag-item">
                      <span
                        className="footer-tag-icon"
                        style={{ backgroundColor: `${activity.color}26` }}
                      >
                        <Icon style={{ stroke: activity.color }} />
                      </span>
                      <span className="footer-tag-label">{activity.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Programs */}
            <div>
              <h3 className="footer-col-title">Programs</h3>
              <div className="footer-tag-list" style={{ marginBottom: '1.75rem' }}>
                {programs.map((program) => {
                  const Icon = program.icon;
                  return (
                    <Link key={program.label} href={program.href} className="footer-tag-item">
                      <span
                        className="footer-tag-icon"
                        style={{ backgroundColor: `${program.color}26` }}
                      >
                        <Icon style={{ stroke: program.color }} />
                      </span>
                      <span className="footer-tag-label">{program.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Contact + Working hours */}
            <div>
              <h3 className="footer-col-title">Contact Information</h3>

              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <MapPin />
                </span>
                <p className="footer-contact-text">
                  M/32, Road No. 25, Sri Krishna Nagar, Kidwaipuri Main Road, Patna, Bihar – 800001
                </p>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Phone />
                </span>
                <p className="footer-contact-text">
                  <a href="tel:+916207368839">+91 62073 68839</a>
                </p>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Mail />
                </span>
                <p className="footer-contact-text">
                  <a href="mailto:phulwari02@gmail.com">phulwari02@gmail.com</a>
                </p>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <MessageCircle />
                </span>
                <p className="footer-contact-text">
                  <a href="https://wa.me/916207368839" target="_blank" rel="noopener noreferrer">
                    WhatsApp Support Available <br/><span> +91 62073 68839</span>
                  </a>
                </p>
              </div>

              
            
            </div>
          </div>

          
          {/* ---------- Bottom bar ---------- */}
          <div className="footer-bottom-bar">
            <p className="footer-bottom-text">
              © 2026 <strong>Phulwari Mother &amp; Child Activity Centre</strong>. All Rights Reserved.
              <br />
              Designed with ❤️ for Children, Mothers &amp; Families.
            </p>
            <p className="footer-credit">
              Website designed &amp; developed by{' '}
              <a href="https://www.sabkasaathidigitalservices.com/" target="_blank" rel="noopener noreferrer">
                Sabka Saathi Digital Services
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;