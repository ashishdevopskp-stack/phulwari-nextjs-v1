'use client';

import React, { useEffect, useState } from 'react';
import {
  Shield,
  UserCheck,
  Database,
  CreditCard,
  Share2,
  Camera,
  Lock,
  Baby,
  Cookie,
  FileText,
  Link,
  RefreshCw,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Info,
  MessageCircle,
  Heart,
  ArrowUp,
  CalendarDays,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Section metadata                                                          */
/* -------------------------------------------------------------------------- */

interface SectionMeta {
  id: string;
  num: string;
  label: string;
  icon: React.ComponentType<{ style?: React.CSSProperties; size?: number }>;
  color: string;
  bg: string;
}

const sectionsMeta: SectionMeta[] = [
  { id: 'intro',       num: '01', label: 'Our Commitment',       icon: Shield,      color: '#FF4D8D', bg: '#FFE6EF' },
  { id: 'collection',  num: '02', label: 'Information We Collect', icon: Database,   color: '#3D8BFF', bg: '#E5EFFF' },
  { id: 'usage',       num: '03', label: 'How We Use It',         icon: FileText,    color: '#34B36B', bg: '#E3F7EA' },
  { id: 'payments',    num: '04', label: 'Payment Information',   icon: CreditCard,  color: '#E8A621', bg: '#FFF3D9' },
  { id: 'sharing',     num: '05', label: 'Sharing of Information', icon: Share2,     color: '#8B5CF6', bg: '#EFE7FE' },
  { id: 'media',       num: '06', label: 'Photography & Media',   icon: Camera,      color: '#FF8A3D', bg: '#FFEADB' },
  { id: 'security',    num: '07', label: 'Data Security',         icon: Lock,        color: '#14B8A6', bg: '#DFF7F1' },
  { id: 'children',    num: '08', label: "Children's Privacy",    icon: Baby,        color: '#F43F5E', bg: '#FFE1E6' },
  { id: 'cookies',     num: '09', label: 'Cookies',               icon: Cookie,      color: '#3D8BFF', bg: '#E5EFFF' },
  { id: 'rights',      num: '10', label: 'Your Rights',           icon: UserCheck,   color: '#34B36B', bg: '#E3F7EA' },
  { id: 'third-party', num: '11', label: 'Third-Party Links',     icon: Link,        color: '#E8A621', bg: '#FFF3D9' },
  { id: 'changes',     num: '12', label: 'Changes to Policy',     icon: RefreshCw,   color: '#8B5CF6', bg: '#EFE7FE' },
  { id: 'contact',     num: '13', label: 'Contact Us',            icon: Mail,        color: '#FF4D8D', bg: '#FFE6EF' },
];

/* -------------------------------------------------------------------------- */
/*  Small reusable pieces                                                     */
/* -------------------------------------------------------------------------- */

function ContactCard() {
  return (
    <div className="pp-contact-card">
      <div className="pp-contact-row">
        <MapPin size={16} />
        <span>M/32, Road No. 25, Sri Krishna Nagar, Kidwaipuri Main Road, Patna, Bihar – 800001</span>
      </div>
      <div className="pp-contact-row">
        <Phone size={16} />
        <a href="tel:+916207368839">+91 6207368839</a>
      </div>
      <div className="pp-contact-row">
        <Mail size={16} />
        <a href="mailto:phulwari02@gmail.com">phulwari02@gmail.com</a>
      </div>
    </div>
  );
}

function PrivacySection({ id, children }: { id: string; children: React.ReactNode }) {
  const meta = sectionsMeta.find((s) => s.id === id);
  if (!meta) return null;
  const Icon = meta.icon;
  return (
    <section id={meta.id} className="pp-section" style={{ ['--accent' as any]: meta.color }}>
      <div className="pp-section-head">
        <span className="pp-section-icon" style={{ backgroundColor: meta.bg }}>
          <Icon style={{ stroke: meta.color }} />
        </span>
        <div>
          <span className="pp-section-num">{meta.num}</span>
          <h2 className="pp-section-title">{meta.label}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function PrivacyPage() {
  const [activeId, setActiveId] = useState(sectionsMeta[0].id);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-110px 0px -65% 0px', threshold: 0 }
    );
    sectionsMeta.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const jumpTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Quicksand:wght@500;600;700&display=swap');

        @keyframes ppFadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ppPopIn  { from { opacity: 0; transform: scale(0.94); }     to { opacity: 1; transform: scale(1); } }
        @keyframes ppFloat  { 0%, 100% { transform: rotate(-2deg) translateY(0); } 50% { transform: rotate(-2deg) translateY(-4px); } }

        @media (prefers-reduced-motion: reduce) {
          .pp-hero, .pp-badge, .pp-section, .pp-top-btn { animation: none !important; transition: none !important; }
        }

        .pp-page { background-color: #FFF7EC; font-family: 'Quicksand', sans-serif; color: #3F3A52; }

        /* ---------- Hero ---------- */
        .pp-hero { max-width: 50rem; margin: 0 auto; padding: 3.25rem 1.25rem 1.75rem; text-align: center; animation: ppFadeUp 0.6s ease both; }
        .pp-badge {
          display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.5rem 1.2rem;
          background-color: #D1FAE5; border-radius: 9999px; font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.04em; text-transform: uppercase; color: #065F46;
          animation: ppFloat 4s ease-in-out infinite;
        }
        .pp-updated {
          display: inline-flex; align-items: center; gap: 0.4rem; margin: 0.85rem 0 0; padding: 0.4rem 0.9rem;
          background-color: #ffffff; border-radius: 9999px; font-size: 0.78rem; font-weight: 700; color: #6B6480;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
        .pp-updated svg { width: 14px; height: 14px; color: #FF4D8D; }
        .pp-title { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: clamp(2rem, 3.6vw + 1rem, 2.9rem); line-height: 1.15; margin: 1rem 0 1rem; }
        .pp-title span { color: #3D8BFF; }
        .pp-intro-text { font-weight: 600; font-size: 1rem; line-height: 1.75; color: #6B6480; max-width: 40rem; margin: 0 auto 1.5rem; }

        .pp-quick-contact { display: flex; flex-wrap: wrap; gap: 0.6rem; justify-content: center; }
        .pp-quick-pill {
          display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.05rem; background-color: #ffffff;
          border-radius: 9999px; box-shadow: 0 2px 6px rgba(0,0,0,0.05); font-weight: 700; font-size: 0.82rem;
          color: #3F3A52; text-decoration: none; transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .pp-quick-pill:hover { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(0,0,0,0.1); }
        .pp-quick-pill svg { width: 15px; height: 15px; color: #3D8BFF; }

        /* ---------- Mobile chip nav ---------- */
        .pp-chip-nav {
          position: sticky; top: 84px; z-index: 20; display: flex; gap: 0.5rem; overflow-x: auto;
          padding: 0.75rem 1.25rem; margin-bottom: 0.25rem; background-color: #FFF7EC;
          -webkit-overflow-scrolling: touch; scrollbar-width: none;
        }
        .pp-chip-nav::-webkit-scrollbar { display: none; }
        .pp-chip {
          flex-shrink: 0; display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.5rem 0.9rem 0.5rem 0.6rem;
          background-color: #ffffff; border-radius: 9999px; font-size: 0.78rem; font-weight: 700; color: #6B6480;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05); white-space: nowrap; border: none; cursor: pointer;
          transition: background-color 0.18s ease, color 0.18s ease, box-shadow 0.18s ease;
        }
        .pp-chip-icon { width: 20px; height: 20px; border-radius: 9999px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .pp-chip-icon svg { width: 11px; height: 11px; stroke-width: 2.5; }
        .pp-chip.active { background-color: var(--accent); color: #ffffff; box-shadow: 0 6px 14px rgba(0,0,0,0.18); }
        .pp-chip.active .pp-chip-icon { background-color: rgba(255,255,255,0.25) !important; }
        .pp-chip.active .pp-chip-icon svg { stroke: #ffffff !important; }

        @media (min-width: 1024px) { .pp-chip-nav { display: none; } }

        /* ---------- Shell / layout ---------- */
        .pp-shell { max-width: 72rem; margin: 0 auto; padding: 0 1.25rem 2rem; display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
        @media (min-width: 1024px) { .pp-shell { grid-template-columns: 16rem 1fr; gap: 3rem; align-items: start; } }

        /* ---------- Desktop sidebar TOC ---------- */
        .pp-toc { display: none; }
        @media (min-width: 1024px) {
          .pp-toc { display: block; position: sticky; top: 7rem; max-height: calc(100vh - 9rem); overflow-y: auto; padding-right: 0.5rem; }
        }
        .pp-toc-label { font-size: 0.7rem; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #A39CB5; margin-bottom: 0.75rem; padding-left: 0.75rem; }
        .pp-toc-list { display: flex; flex-direction: column; gap: 0.1rem; }
        .pp-toc-link {
          display: flex; align-items: center; gap: 0.6rem; padding: 0.5rem 0.7rem; border-radius: 12px;
          font-size: 0.82rem; font-weight: 700; color: #6B6480; text-decoration: none;
          border-left: 3px solid transparent; transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
        }
        .pp-toc-link:hover { background-color: #ffffff; color: #3F3A52; }
        .pp-toc-link.active { background-color: #ffffff; color: var(--accent); border-left-color: var(--accent); box-shadow: 0 2px 8px rgba(63,58,82,0.06); }
        .pp-toc-num { font-variant-numeric: tabular-nums; opacity: 0.55; font-size: 0.72rem; flex-shrink: 0; }
        .pp-toc-link:focus-visible { outline: 2px solid #3F3A52; outline-offset: 2px; }

        /* ---------- Content sections ---------- */
        .pp-content { display: flex; flex-direction: column; gap: 1.1rem; min-width: 0; }
        .pp-section {
          scroll-margin-top: 6.5rem; background-color: #ffffff; border-radius: 22px; padding: 1.75rem 1.5rem;
          box-shadow: 0 6px 18px rgba(63,58,82,0.06); animation: ppPopIn 0.4s ease both;
        }
        .pp-section-head { display: flex; align-items: center; gap: 0.85rem; margin-bottom: 1.1rem; }
        .pp-section-icon { width: 42px; height: 42px; border-radius: 9999px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
        .pp-section-icon svg { width: 19px; height: 19px; stroke-width: 2.25; }
        .pp-section-num { display: block; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 0.74rem; color: #C9C2D6; margin-bottom: 0.1rem; }
        .pp-section-title { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 1.2rem; color: #3F3A52; line-height: 1.25; }

        .pp-section p { font-size: 0.93rem; line-height: 1.75; color: #5B5570; margin-bottom: 0.85rem; }
        .pp-section p:last-child { margin-bottom: 0; }
        .pp-section ul { list-style: none; margin: 0 0 0.85rem; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
        .pp-section ul:last-child { margin-bottom: 0; }
        .pp-section li { display: flex; align-items: flex-start; gap: 0.55rem; font-size: 0.9rem; line-height: 1.6; color: #5B5570; }
        .pp-section li svg { width: 15px; height: 15px; flex-shrink: 0; margin-top: 0.2rem; color: var(--accent); }

        /* Sub-group label inside a section */
        .pp-sub-label { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 0.9rem; color: #3F3A52; margin: 1rem 0 0.4rem; }

        .pp-note { background-color: #FFF7EC; border: 1.5px dashed #EADFC8; border-radius: 16px; padding: 1rem 1.1rem; margin: 0.25rem 0 0.85rem; }
        .pp-note:last-child { margin-bottom: 0; }
        .pp-note-label { display: flex; align-items: center; gap: 0.4rem; font-weight: 800; font-size: 0.76rem; text-transform: uppercase; letter-spacing: 0.04em; color: #C9821E; margin-bottom: 0.65rem; }
        .pp-note-label svg { width: 14px; height: 14px; }
        .pp-note ul { margin-bottom: 0; }

        .pp-contact-card { display: flex; flex-direction: column; gap: 0.65rem; background-color: #FFF7EC; border-radius: 16px; padding: 1.1rem 1.2rem; margin-top: 0.25rem; }
        .pp-contact-row { display: flex; align-items: flex-start; gap: 0.65rem; font-size: 0.87rem; font-weight: 700; color: #3F3A52; line-height: 1.5; }
        .pp-contact-row svg { width: 16px; height: 16px; color: #3D8BFF; flex-shrink: 0; margin-top: 0.15rem; }
        .pp-contact-row a { color: inherit; text-decoration: none; }
        .pp-contact-row a:hover { text-decoration: underline; }

        /* ---------- Closing banner ---------- */
        .pp-thanks { max-width: 72rem; margin: 0.5rem auto 4rem; padding: 0 1.25rem; }
        .pp-thanks-card {
          position: relative; overflow: hidden; text-align: center; border-radius: 28px; padding: 2.75rem 1.75rem;
          background: linear-gradient(135deg, #E5EFFF 0%, #DFF7F1 35%, #EFE7FE 70%, #FFE6EF 100%);
        }
        .pp-thanks-icon { width: 56px; height: 56px; border-radius: 9999px; background-color: #ffffff; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.1rem; box-shadow: 0 8px 20px rgba(0,0,0,0.1); }
        .pp-thanks-icon svg { width: 24px; height: 24px; color: #3D8BFF; }
        .pp-thanks-title { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 1.5rem; margin-bottom: 0.65rem; color: #3F3A52; }
        .pp-thanks-text { font-weight: 600; color: #6B6480; line-height: 1.75; max-width: 36rem; margin: 0 auto 1.6rem; }
        .pp-thanks-actions { display: flex; flex-wrap: wrap; gap: 0.65rem; justify-content: center; }
        .pp-thanks-btn {
          display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.8rem 1.4rem; border: none; border-radius: 9999px;
          color: #ffffff; font-weight: 700; font-size: 0.9rem; font-family: 'Quicksand', sans-serif; cursor: pointer;
          text-decoration: none; box-shadow: 0 6px 14px rgba(0,0,0,0.12); transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .pp-thanks-btn:hover { transform: translateY(-2px); }
        .pp-thanks-btn svg { width: 17px; height: 17px; }
        .pp-thanks-btn--call { background-color: #3D8BFF; }
        .pp-thanks-btn--whatsapp { background-color: #34B36B; }

        /* ---------- Back to top ---------- */
        .pp-top-btn {
          position: fixed; right: 1.25rem; bottom: 1.25rem; z-index: 30; width: 44px; height: 44px; border-radius: 9999px;
          background-color: #3F3A52; color: #ffffff; border: none; display: flex; align-items: center; justify-content: center;
          cursor: pointer; box-shadow: 0 10px 24px rgba(63,58,82,0.3); opacity: 0; visibility: hidden; transform: translateY(10px);
          transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;
        }
        .pp-top-btn.is-visible { opacity: 1; visibility: visible; transform: translateY(0); }
        .pp-top-btn svg { width: 19px; height: 19px; }
        .pp-top-btn:focus-visible { outline: 3px solid #3D8BFF; outline-offset: 3px; }
      `}</style>

      <div className="pp-page">
        {/* Hero */}
        <header className="pp-hero">
          <span className="pp-badge"><Shield size={13} /> Privacy Policy</span>
          <div>
            <span className="pp-updated">
              <CalendarDays />
              Last Updated: June 2026
            </span>
          </div>
          <h1 className="pp-title">
            Your <span>Privacy</span> Matters
          </h1>
          <p className="pp-intro-text">
            At Phulwari – Mother &amp; Child Activity Centre, we value the privacy and trust of every
            child, parent, guardian, and visitor. This policy explains how we collect, use, and
            protect your personal information.
          </p>
          <div className="pp-quick-contact">
            <a className="pp-quick-pill" href="tel:+916207368839">
              <Phone size={15} /> Call Us
            </a>
            <a
              className="pp-quick-pill"
              href="https://wa.me/916207368839"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={15} /> WhatsApp Us
            </a>
            <a className="pp-quick-pill" href="mailto:phulwari02@gmail.com">
              <Mail size={15} /> Email Us
            </a>
          </div>
        </header>

        {/* Mobile chip nav */}
        <nav className="pp-chip-nav" aria-label="Jump to section">
          {sectionsMeta.map((s) => {
            const Icon = s.icon;
            const active = activeId === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={jumpTo(s.id)}
                className={`pp-chip ${active ? 'active' : ''}`}
                style={{ ['--accent' as any]: s.color }}
                aria-current={active}
              >
                <span className="pp-chip-icon" style={{ backgroundColor: s.bg }}>
                  <Icon style={{ stroke: s.color }} />
                </span>
                {s.label}
              </a>
            );
          })}
        </nav>

        <div className="pp-shell">
          {/* Desktop sidebar TOC */}
          <aside className="pp-toc" aria-label="Table of contents">
            <p className="pp-toc-label">On this page</p>
            <div className="pp-toc-list">
              {sectionsMeta.map((s) => {
                const active = activeId === s.id;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={jumpTo(s.id)}
                    className={`pp-toc-link ${active ? 'active' : ''}`}
                    style={{ ['--accent' as any]: s.color }}
                    aria-current={active}
                  >
                    <span className="pp-toc-num">{s.num}</span>
                    {s.label}
                  </a>
                );
              })}
            </div>
          </aside>

          {/* Section content */}
          <main className="pp-content">

            <PrivacySection id="intro">
              <p>
                Phulwari – Mother &amp; Child Activity Centre is committed to protecting the privacy of
                every child, parent, and guardian who interacts with our services or visits our website.
              </p>
              <p>
                By using our website or enrolling in our programs, you agree to the practices described
                in this Privacy Policy.
              </p>
              <ContactCard />
            </PrivacySection>

            <PrivacySection id="collection">
              <p>We may collect personal information during registration, admissions, inquiries, event bookings, camp registrations, and website interactions.</p>

              <p className="pp-sub-label">Parent / Guardian Information</p>
              <ul>
                <li><CheckCircle2 /> Full Name</li>
                <li><CheckCircle2 /> Mobile Number</li>
                <li><CheckCircle2 /> Email Address</li>
                <li><CheckCircle2 /> Residential Address</li>
                <li><CheckCircle2 /> Emergency Contact Details</li>
              </ul>

              <p className="pp-sub-label">Child Information</p>
              <ul>
                <li><CheckCircle2 /> Child's Name</li>
                <li><CheckCircle2 /> Age &amp; Date of Birth</li>
                <li><CheckCircle2 /> Medical Information (voluntarily provided)</li>
                <li><CheckCircle2 /> Allergy Information</li>
                <li><CheckCircle2 /> Special Needs Information (if applicable)</li>
              </ul>

              <p className="pp-sub-label">Additional Information</p>
              <ul>
                <li><CheckCircle2 /> Payment Information</li>
                <li><CheckCircle2 /> Event Registration Details</li>
                <li><CheckCircle2 /> Photographs &amp; Videos (subject to consent)</li>
                <li><CheckCircle2 /> Website Usage &amp; Device Information</li>
              </ul>
            </PrivacySection>

            <PrivacySection id="usage">
              <p>The information we collect may be used for:</p>
              <ul>
                <li><CheckCircle2 /> Processing admissions and registrations</li>
                <li><CheckCircle2 /> Managing classes and attendance</li>
                <li><CheckCircle2 /> Birthday Party, Summer Camp &amp; Winter Camp bookings</li>
                <li><CheckCircle2 /> Parent communication and notifications</li>
                <li><CheckCircle2 /> Customer support and assistance</li>
                <li><CheckCircle2 /> Improving services and programs</li>
                <li><CheckCircle2 /> Ensuring child safety and well-being</li>
                <li><CheckCircle2 /> Managing events and activities</li>
                <li><CheckCircle2 /> Sending updates, announcements, and promotional messages (with consent)</li>
              </ul>
            </PrivacySection>

            <PrivacySection id="payments">
              <p>Online payments may be processed through secure third-party payment providers.</p>
              <div className="pp-note">
                <p className="pp-note-label"><Info /> Important</p>
                <ul>
                  <li><CheckCircle2 /> Phulwari does not store complete debit card, credit card, UPI, or banking information on its servers.</li>
                  <li><CheckCircle2 /> All payment transactions are handled through secure payment gateways.</li>
                </ul>
              </div>
            </PrivacySection>

            <PrivacySection id="sharing">
              <p>We respect your privacy and do not sell, rent, or trade personal information to third parties.</p>
              <p>Information may only be shared with:</p>
              <ul>
                <li><CheckCircle2 /> Authorized staff members</li>
                <li><CheckCircle2 /> Payment processing partners</li>
                <li><CheckCircle2 /> Emergency medical personnel (when necessary)</li>
                <li><CheckCircle2 /> Government authorities when legally required</li>
                <li><CheckCircle2 /> Law enforcement agencies as required by applicable laws</li>
              </ul>
            </PrivacySection>

            <PrivacySection id="media">
              <p>Photographs and videos may be captured during Activity Classes, Birthday Celebrations, Summer Camps, Winter Camps, Competitions, and Events.</p>
              <p>These materials may be used for:</p>
              <ul>
                <li><CheckCircle2 /> Website galleries</li>
                <li><CheckCircle2 /> Social media content</li>
                <li><CheckCircle2 /> Marketing materials</li>
                <li><CheckCircle2 /> Promotional campaigns</li>
              </ul>
              <p>Parents who do not wish their child to appear in photographs or videos may submit a written request before participation.</p>
            </PrivacySection>

            <PrivacySection id="security">
              <p>
                We implement reasonable administrative, technical, and physical safeguards to protect
                personal information against unauthorized access, disclosure, misuse, alteration, loss,
                or destruction.
              </p>
              <p>
                While we strive to maintain strong security standards, no online system can guarantee
                absolute security.
              </p>
            </PrivacySection>

            <PrivacySection id="children">
              <p>Protecting children's privacy is extremely important to us.</p>
              <ul>
                <li><CheckCircle2 /> Information relating to children is collected only with the knowledge and consent of parents or legal guardians.</li>
                <li><CheckCircle2 /> We take appropriate measures to safeguard children's information and use it only for legitimate operational purposes.</li>
              </ul>
            </PrivacySection>

            <PrivacySection id="cookies">
              <p>Our website may use cookies and similar technologies to improve user experience, analyse website traffic, and enhance functionality.</p>
              <div className="pp-note">
                <p className="pp-note-label"><Info /> Please Note</p>
                <ul>
                  <li><CheckCircle2 /> Users can manage or disable cookies through their browser settings.</li>
                  <li><CheckCircle2 /> Some website features may not function properly if cookies are disabled.</li>
                </ul>
              </div>
            </PrivacySection>

            <PrivacySection id="rights">
              <p>You have the right to:</p>
              <ul>
                <li><CheckCircle2 /> Request access to your personal information</li>
                <li><CheckCircle2 /> Request correction of inaccurate information</li>
                <li><CheckCircle2 /> Request deletion of personal information (subject to legal obligations)</li>
                <li><CheckCircle2 /> Withdraw consent for marketing communications</li>
                <li><CheckCircle2 /> Request updates to personal records</li>
              </ul>
              <p>To exercise any of these rights, please contact us using the details below.</p>
              <ContactCard />
            </PrivacySection>

            <PrivacySection id="third-party">
              <p>Our website may contain links to third-party platforms including Facebook, Instagram, YouTube, Google Maps, and Payment Providers.</p>
              <p>
                We are not responsible for the privacy practices, policies, or content of external
                websites. Users are encouraged to review the privacy policies of those services
                separately.
              </p>
            </PrivacySection>

            <PrivacySection id="changes">
              <p>Phulwari reserves the right to modify or update this Privacy Policy at any time.</p>
              <p>Any updates will be published on this page along with the revised "Last Updated" date.</p>
              <p>Continued use of our services after changes are posted constitutes acceptance of the updated Privacy Policy.</p>
            </PrivacySection>

            <PrivacySection id="contact">
              <p>If you have any questions regarding this Privacy Policy or the handling of your personal information, please contact us.</p>
              <ContactCard />
            </PrivacySection>

          </main>
        </div>

        {/* Closing banner */}
        <div className="pp-thanks">
          <div className="pp-thanks-card">
            <div className="pp-thanks-icon">
              <Heart fill="#3D8BFF" />
            </div>
            <h2 className="pp-thanks-title">Your Privacy is in Safe Hands</h2>
            <p className="pp-thanks-text">
              At Phulwari, we are committed to maintaining the privacy, safety, and trust of every
              child and family who becomes part of our community.
            </p>
            <div className="pp-thanks-actions">
              <a className="pp-thanks-btn pp-thanks-btn--call" href="tel:+916207368839">
                <Phone /> Call Us
              </a>
              <a
                className="pp-thanks-btn pp-thanks-btn--whatsapp"
                href="https://wa.me/916207368839"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        className={`pp-top-btn ${showTop ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp />
      </button>
    </>
  );
}