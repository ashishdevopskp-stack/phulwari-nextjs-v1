'use client';

import React, { useEffect, useState } from 'react';
import {
  Sparkles,
  UserCheck,
  ClipboardList,
  Wallet,
  RotateCcw,
  Clock,
  HeartPulse,
  Camera,
  Users,
  Copyright,
  Scale,
  Gavel,
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
/*  Section metadata — drives the sidebar, the mobile chip nav, and the       */
/*  icon/number header rendered above each section's content.                */
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
  { id: 'about', num: '01', label: 'About Phulwari', icon: Sparkles, color: '#FF4D8D', bg: '#FFE6EF' },
  { id: 'eligibility', num: '02', label: 'Eligibility', icon: UserCheck, color: '#3D8BFF', bg: '#E5EFFF' },
  { id: 'registration', num: '03', label: 'Registration & Enrollment', icon: ClipboardList, color: '#34B36B', bg: '#E3F7EA' },
  { id: 'fees', num: '04', label: 'Fees & Payments', icon: Wallet, color: '#E8A621', bg: '#FFF3D9' },
  { id: 'cancellation', num: '05', label: 'Cancellation & Refunds', icon: RotateCcw, color: '#8B5CF6', bg: '#EFE7FE' },
  { id: 'attendance', num: '06', label: 'Attendance & Punctuality', icon: Clock, color: '#FF8A3D', bg: '#FFEADB' },
  { id: 'health-safety', num: '07', label: 'Health & Safety', icon: HeartPulse, color: '#14B8A6', bg: '#DFF7F1' },
  { id: 'media-consent', num: '08', label: 'Photography & Media', icon: Camera, color: '#F43F5E', bg: '#FFE1E6' },
  { id: 'conduct', num: '09', label: 'Code of Conduct', icon: Users, color: '#3D8BFF', bg: '#E5EFFF' },
  { id: 'ip', num: '10', label: 'Intellectual Property', icon: Copyright, color: '#34B36B', bg: '#E3F7EA' },
  { id: 'liability', num: '11', label: 'Limitation of Liability', icon: Scale, color: '#E8A621', bg: '#FFF3D9' },
  { id: 'governing-law', num: '12', label: 'Governing Law', icon: Gavel, color: '#8B5CF6', bg: '#EFE7FE' },
  { id: 'changes', num: '13', label: 'Changes to Terms', icon: RefreshCw, color: '#FF8A3D', bg: '#FFEADB' },
  { id: 'contact', num: '14', label: 'Contact Us', icon: Mail, color: '#FF4D8D', bg: '#FFE6EF' },
];

/* -------------------------------------------------------------------------- */
/*  Small reusable pieces                                                     */
/* -------------------------------------------------------------------------- */

function ContactCard() {
  return (
    <div className="tc-contact-card">
      <div className="tc-contact-row">
        <MapPin size={16} />
        <span>M/32, Road No. 25, Sri Krishna Nagar, Kidwaipuri Main Road, Patna, Bihar – 800001</span>
      </div>
      <div className="tc-contact-row">
        <Phone size={16} />
        <a href="tel:+916207368839">+91 6207368839</a>
      </div>
      <div className="tc-contact-row">
        <Mail size={16} />
        <a href="mailto:phulwari02@gmail.com">phulwari02@gmail.com</a>
      </div>
    </div>
  );
}

function TermsSection({ id, children }: { id: string; children: React.ReactNode }) {
  const meta = sectionsMeta.find((s) => s.id === id);
  if (!meta) return null;
  const Icon = meta.icon;
  return (
    <section id={meta.id} className="tc-section" style={{ ['--accent' as any]: meta.color }}>
      <div className="tc-section-head">
        <span className="tc-section-icon" style={{ backgroundColor: meta.bg }}>
          <Icon style={{ stroke: meta.color }} />
        </span>
        <div>
          <span className="tc-section-num">{meta.num}</span>
          <h2 className="tc-section-title">{meta.label}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function TermsPage() {
  const [activeId, setActiveId] = useState(sectionsMeta[0].id);
  const [showTop, setShowTop] = useState(false);

  // Scroll-spy: highlight whichever section is currently nearest the top of the viewport.
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

        @keyframes tcFadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes tcPopIn { from { opacity: 0; transform: scale(0.94); } to { opacity: 1; transform: scale(1); } }
        @keyframes tcFloat { 0%, 100% { transform: rotate(-2deg) translateY(0); } 50% { transform: rotate(-2deg) translateY(-4px); } }

        @media (prefers-reduced-motion: reduce) {
          .tc-hero, .tc-badge, .tc-section, .tc-top-btn { animation: none !important; transition: none !important; }
        }

        .tc-page { background-color: #FFF7EC; font-family: 'Quicksand', sans-serif; color: #3F3A52; }

        /* ---------- Hero ---------- */
        .tc-hero { max-width: 50rem; margin: 0 auto; padding: 3.25rem 1.25rem 1.75rem; text-align: center; animation: tcFadeUp 0.6s ease both; }
        .tc-badge {
          display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.5rem 1.2rem; background-color: #FFD166;
          border-radius: 9999px; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
          color: #6B4500; animation: tcFloat 4s ease-in-out infinite;
        }
        .tc-updated {
          display: inline-flex; align-items: center; gap: 0.4rem; margin: 0.85rem 0 0; padding: 0.4rem 0.9rem;
          background-color: #ffffff; border-radius: 9999px; font-size: 0.78rem; font-weight: 700; color: #6B6480;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
        .tc-updated svg { width: 14px; height: 14px; color: #FF4D8D; }
        .tc-title { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: clamp(2rem, 3.6vw + 1rem, 2.9rem); line-height: 1.15; margin: 1rem 0 1rem; }
        .tc-title span { color: #FF4D8D; }
        .tc-intro-text { font-weight: 600; font-size: 1rem; line-height: 1.75; color: #6B6480; max-width: 40rem; margin: 0 auto 1.5rem; }

        .tc-quick-contact { display: flex; flex-wrap: wrap; gap: 0.6rem; justify-content: center; }
        .tc-quick-pill {
          display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.05rem; background-color: #ffffff;
          border-radius: 9999px; box-shadow: 0 2px 6px rgba(0,0,0,0.05); font-weight: 700; font-size: 0.82rem;
          color: #3F3A52; text-decoration: none; transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .tc-quick-pill:hover { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(0,0,0,0.1); }
        .tc-quick-pill svg { width: 15px; height: 15px; color: #FF4D8D; }

        /* ---------- Mobile chip nav ---------- */
        .tc-chip-nav {
          position: sticky; top: 84px; z-index: 20; display: flex; gap: 0.5rem; overflow-x: auto;
          padding: 0.75rem 1.25rem; margin-bottom: 0.25rem; background-color: #FFF7EC;
          -webkit-overflow-scrolling: touch; scrollbar-width: none;
        }
        .tc-chip-nav::-webkit-scrollbar { display: none; }
        .tc-chip {
          flex-shrink: 0; display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.5rem 0.9rem 0.5rem 0.6rem;
          background-color: #ffffff; border-radius: 9999px; font-size: 0.78rem; font-weight: 700; color: #6B6480;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05); white-space: nowrap; border: none; cursor: pointer;
          transition: background-color 0.18s ease, color 0.18s ease, box-shadow 0.18s ease;
        }
        .tc-chip-icon { width: 20px; height: 20px; border-radius: 9999px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .tc-chip-icon svg { width: 11px; height: 11px; stroke-width: 2.5; }
        .tc-chip.active { background-color: var(--accent); color: #ffffff; box-shadow: 0 6px 14px rgba(0,0,0,0.18); }
        .tc-chip.active .tc-chip-icon { background-color: rgba(255,255,255,0.25) !important; }
        .tc-chip.active .tc-chip-icon svg { stroke: #ffffff !important; }

        @media (min-width: 1024px) { .tc-chip-nav { display: none; } }

        /* ---------- Shell / layout ---------- */
        .tc-shell { max-width: 72rem; margin: 0 auto; padding: 0 1.25rem 2rem; display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
        @media (min-width: 1024px) { .tc-shell { grid-template-columns: 16rem 1fr; gap: 3rem; align-items: start; } }

        /* ---------- Desktop sidebar TOC ---------- */
        .tc-toc { display: none; }
        @media (min-width: 1024px) {
          .tc-toc { display: block; position: sticky; top: 7rem; max-height: calc(100vh - 9rem); overflow-y: auto; padding-right: 0.5rem; }
        }
        .tc-toc-label { font-size: 0.7rem; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #A39CB5; margin-bottom: 0.75rem; padding-left: 0.75rem; }
        .tc-toc-list { display: flex; flex-direction: column; gap: 0.1rem; }
        .tc-toc-link {
          display: flex; align-items: center; gap: 0.6rem; padding: 0.5rem 0.7rem; border-radius: 12px;
          font-size: 0.82rem; font-weight: 700; color: #6B6480; text-decoration: none;
          border-left: 3px solid transparent; transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
        }
        .tc-toc-link:hover { background-color: #ffffff; color: #3F3A52; }
        .tc-toc-link.active { background-color: #ffffff; color: var(--accent); border-left-color: var(--accent); box-shadow: 0 2px 8px rgba(63,58,82,0.06); }
        .tc-toc-num { font-variant-numeric: tabular-nums; opacity: 0.55; font-size: 0.72rem; flex-shrink: 0; }
        .tc-toc-link:focus-visible { outline: 2px solid #3F3A52; outline-offset: 2px; }

        /* ---------- Content sections ---------- */
        .tc-content { display: flex; flex-direction: column; gap: 1.1rem; min-width: 0; }
        .tc-section {
          scroll-margin-top: 6.5rem; background-color: #ffffff; border-radius: 22px; padding: 1.75rem 1.5rem;
          box-shadow: 0 6px 18px rgba(63,58,82,0.06); animation: tcPopIn 0.4s ease both;
        }
        .tc-section-head { display: flex; align-items: center; gap: 0.85rem; margin-bottom: 1.1rem; }
        .tc-section-icon { width: 42px; height: 42px; border-radius: 9999px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
        .tc-section-icon svg { width: 19px; height: 19px; stroke-width: 2.25; }
        .tc-section-num { display: block; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 0.74rem; color: #C9C2D6; margin-bottom: 0.1rem; }
        .tc-section-title { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 1.2rem; color: #3F3A52; line-height: 1.25; }

        .tc-section p { font-size: 0.93rem; line-height: 1.75; color: #5B5570; margin-bottom: 0.85rem; }
        .tc-section p:last-child { margin-bottom: 0; }
        .tc-section ul { list-style: none; margin: 0 0 0.85rem; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
        .tc-section ul:last-child { margin-bottom: 0; }
        .tc-section li { display: flex; align-items: flex-start; gap: 0.55rem; font-size: 0.9rem; line-height: 1.6; color: #5B5570; }
        .tc-section li svg { width: 15px; height: 15px; flex-shrink: 0; margin-top: 0.2rem; color: var(--accent); }

        .tc-note { background-color: #FFF7EC; border: 1.5px dashed #EADFC8; border-radius: 16px; padding: 1rem 1.1rem; margin: 0.25rem 0 0.85rem; }
        .tc-note:last-child { margin-bottom: 0; }
        .tc-note-label { display: flex; align-items: center; gap: 0.4rem; font-weight: 800; font-size: 0.76rem; text-transform: uppercase; letter-spacing: 0.04em; color: #C9821E; margin-bottom: 0.65rem; }
        .tc-note-label svg { width: 14px; height: 14px; }
        .tc-note ul { margin-bottom: 0; }

        .tc-contact-card { display: flex; flex-direction: column; gap: 0.65rem; background-color: #FFF7EC; border-radius: 16px; padding: 1.1rem 1.2rem; margin-top: 0.25rem; }
        .tc-contact-row { display: flex; align-items: flex-start; gap: 0.65rem; font-size: 0.87rem; font-weight: 700; color: #3F3A52; line-height: 1.5; }
        .tc-contact-row svg { width: 16px; height: 16px; color: #FF4D8D; flex-shrink: 0; margin-top: 0.15rem; }
        .tc-contact-row a { color: inherit; text-decoration: none; }
        .tc-contact-row a:hover { text-decoration: underline; }

        /* ---------- Closing banner ---------- */
        .tc-thanks { max-width: 72rem; margin: 0.5rem auto 4rem; padding: 0 1.25rem; }
        .tc-thanks-card {
          position: relative; overflow: hidden; text-align: center; border-radius: 28px; padding: 2.75rem 1.75rem;
          background: linear-gradient(135deg, #FFE6EF 0%, #FFF3D9 35%, #E3F7EA 70%, #E5EFFF 100%);
        }
        .tc-thanks-icon { width: 56px; height: 56px; border-radius: 9999px; background-color: #ffffff; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.1rem; box-shadow: 0 8px 20px rgba(0,0,0,0.1); }
        .tc-thanks-icon svg { width: 24px; height: 24px; color: #FF4D8D; }
        .tc-thanks-title { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 1.5rem; margin-bottom: 0.65rem; color: #3F3A52; }
        .tc-thanks-text { font-weight: 600; color: #6B6480; line-height: 1.75; max-width: 36rem; margin: 0 auto 1.6rem; }
        .tc-thanks-actions { display: flex; flex-wrap: wrap; gap: 0.65rem; justify-content: center; }
        .tc-thanks-btn {
          display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.8rem 1.4rem; border: none; border-radius: 9999px;
          color: #ffffff; font-weight: 700; font-size: 0.9rem; font-family: 'Quicksand', sans-serif; cursor: pointer;
          text-decoration: none; box-shadow: 0 6px 14px rgba(0,0,0,0.12); transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .tc-thanks-btn:hover { transform: translateY(-2px); }
        .tc-thanks-btn svg { width: 17px; height: 17px; }
        .tc-thanks-btn--call { background-color: #FF4D8D; }
        .tc-thanks-btn--whatsapp { background-color: #34B36B; }

        /* ---------- Back to top ---------- */
        .tc-top-btn {
          position: fixed; right: 1.25rem; bottom: 1.25rem; z-index: 30; width: 44px; height: 44px; border-radius: 9999px;
          background-color: #3F3A52; color: #ffffff; border: none; display: flex; align-items: center; justify-content: center;
          cursor: pointer; box-shadow: 0 10px 24px rgba(63,58,82,0.3); opacity: 0; visibility: hidden; transform: translateY(10px);
          transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;
        }
        .tc-top-btn.is-visible { opacity: 1; visibility: visible; transform: translateY(0); }
        .tc-top-btn svg { width: 19px; height: 19px; }
        .tc-top-btn:focus-visible { outline: 3px solid #FF4D8D; outline-offset: 3px; }
      `}</style>

      <div className="tc-page">
        {/* Hero */}
        <header className="tc-hero">
          <span className="tc-badge">Legal</span>
          <div>
            <span className="tc-updated">
              <CalendarDays />
              Last Updated: June 2026
            </span>
          </div>
          <h1 className="tc-title">
            Terms &amp; <span>Conditions</span>
          </h1>
          <p className="tc-intro-text">
            Welcome to Phulwari – Mother &amp; Child Activity Centre. By enrolling in our programs,
            participating in activities, using our website, or accessing our services, you agree to
            comply with the terms laid out below. Please read them carefully.
          </p>
          <div className="tc-quick-contact">
            <a className="tc-quick-pill" href="tel:+916207368839">
              <Phone size={15} /> Call Us
            </a>
            <a
              className="tc-quick-pill"
              href="https://wa.me/916207368839"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={15} /> WhatsApp Us
            </a>
            <a className="tc-quick-pill" href="mailto:phulwari02@gmail.com">
              <Mail size={15} /> Email Us
            </a>
          </div>
        </header>

        {/* Mobile chip nav */}
        <nav className="tc-chip-nav" aria-label="Jump to section">
          {sectionsMeta.map((s) => {
            const Icon = s.icon;
            const active = activeId === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={jumpTo(s.id)}
                className={`tc-chip ${active ? 'active' : ''}`}
                style={{ ['--accent' as any]: s.color }}
                aria-current={active}
              >
                <span className="tc-chip-icon" style={{ backgroundColor: s.bg }}>
                  <Icon style={{ stroke: s.color }} />
                </span>
                {s.label}
              </a>
            );
          })}
        </nav>

        <div className="tc-shell">
          {/* Desktop sidebar TOC */}
          <aside className="tc-toc" aria-label="Table of contents">
            <p className="tc-toc-label">On this page</p>
            <div className="tc-toc-list">
              {sectionsMeta.map((s) => {
                const active = activeId === s.id;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={jumpTo(s.id)}
                    className={`tc-toc-link ${active ? 'active' : ''}`}
                    style={{ ['--accent' as any]: s.color }}
                    aria-current={active}
                  >
                    <span className="tc-toc-num">{s.num}</span>
                    {s.label}
                  </a>
                );
              })}
            </div>
          </aside>

          {/* Section content */}
          <main className="tc-content">
            <TermsSection id="about">
              <p>
                Phulwari – Mother &amp; Child Activity Centre is dedicated to providing educational,
                recreational, fitness, creative, and developmental programs for children and parents.
              </p>
              <ContactCard />
            </TermsSection>

            <TermsSection id="eligibility">
              <p>Children must be enrolled by a parent or legal guardian who is at least 18 years of age.</p>
              <p>
                Parents and guardians are responsible for providing accurate, complete, and up-to-date
                information during registration and enrollment.
              </p>
            </TermsSection>

            <TermsSection id="registration">
              <p>Admission to any program is subject to seat availability.</p>
              <p>Enrollment will be confirmed only after:</p>
              <ul>
                <li><CheckCircle2 /> Successful payment of applicable fees</li>
                <li><CheckCircle2 /> Submission of required documents</li>
                <li><CheckCircle2 /> Verification of registration details</li>
              </ul>
              <p>
                Phulwari reserves the right to refuse, suspend, or cancel admission if any information
                provided is found to be incorrect, misleading, fraudulent, or incomplete.
              </p>
            </TermsSection>

            <TermsSection id="fees">
              <p>All program fees must be paid in advance unless otherwise specified.</p>
              <p>Parents are responsible for ensuring timely payment of all applicable charges.</p>
              <div className="tc-note">
                <p className="tc-note-label">
                  <Info /> Important Notes
                </p>
                <ul>
                  <li><CheckCircle2 /> Fees once paid are generally non-transferable.</li>
                  <li><CheckCircle2 /> Promotional offers and discounts may be subject to separate terms.</li>
                  <li><CheckCircle2 /> Prices and fee structures may be revised from time to time without prior notice.</li>
                </ul>
              </div>
            </TermsSection>

            <TermsSection id="cancellation">
              <p>Registration fees, admission fees, and booking fees are generally non-refundable.</p>
              <p>Missed classes, camps, workshops, or activities are not eligible for refunds, transfers, or compensation.</p>
              <p>Any refund request will be reviewed solely at the discretion of the management.</p>
              <p>Management reserves the right to make the final decision regarding refund requests.</p>
            </TermsSection>

            <TermsSection id="attendance">
              <p>Parents and guardians are responsible for ensuring timely arrival and pick-up of children.</p>
              <p>Repeated delays in pick-up may result in administrative action or additional charges where applicable.</p>
              <p>Children arriving excessively late may not be permitted to participate in certain activities for safety and operational reasons.</p>
            </TermsSection>

            <TermsSection id="health-safety">
              <p>The safety and well-being of every child is our highest priority.</p>
              <p>Parents must disclose the following before their child participates in any program:</p>
              <ul>
                <li><CheckCircle2 /> Medical conditions</li>
                <li><CheckCircle2 /> Allergies</li>
                <li><CheckCircle2 /> Special needs</li>
                <li><CheckCircle2 /> Dietary restrictions</li>
                <li><CheckCircle2 /> Emergency contact information</li>
              </ul>
              <p>Children who are ill or suffering from contagious conditions should not attend activities until medically fit.</p>
              <p>
                In emergency situations, Phulwari may arrange immediate medical assistance. Any related
                expenses shall be the responsibility of the parent or guardian.
              </p>
            </TermsSection>

            <TermsSection id="media-consent">
              <p>
                Photographs and videos may be taken during classes, camps, events, birthday celebrations,
                competitions, and activities. These materials may be used for:
              </p>
              <ul>
                <li><CheckCircle2 /> Promotional purposes</li>
                <li><CheckCircle2 /> Social media content</li>
                <li><CheckCircle2 /> Website galleries</li>
                <li><CheckCircle2 /> Marketing materials</li>
                <li><CheckCircle2 /> Event highlights</li>
              </ul>
              <p>
                Parents who do not wish their child to appear in photographs or videos must submit a
                written request before participation.
              </p>
            </TermsSection>

            <TermsSection id="conduct">
              <p>To ensure a positive environment for all participants:</p>
              <ul>
                <li><CheckCircle2 /> Children must behave respectfully toward instructors and fellow participants.</li>
                <li><CheckCircle2 /> Parents and guardians must maintain respectful communication with staff and other families.</li>
                <li><CheckCircle2 /> Any behavior that disrupts activities or compromises safety may result in removal from the program.</li>
              </ul>
              <p>Phulwari reserves the right to suspend or terminate participation if conduct standards are not followed.</p>
            </TermsSection>

            <TermsSection id="ip">
              <p>
                All content available through Phulwari, including but not limited to the items below, is
                the intellectual property of Phulwari – Mother &amp; Child Activity Centre:
              </p>
              <ul>
                <li><CheckCircle2 /> Logos</li>
                <li><CheckCircle2 /> Website content</li>
                <li><CheckCircle2 /> Graphics</li>
                <li><CheckCircle2 /> Illustrations</li>
                <li><CheckCircle2 /> Photographs</li>
                <li><CheckCircle2 /> Videos</li>
                <li><CheckCircle2 /> Designs</li>
                <li><CheckCircle2 /> Written materials</li>
              </ul>
              <p>Unauthorized reproduction, distribution, modification, or commercial use is strictly prohibited without prior written permission.</p>
            </TermsSection>

            <TermsSection id="liability">
              <p>
                While Phulwari takes reasonable precautions to provide a safe and supervised environment,
                participation in physical and recreational activities carries inherent risks.
              </p>
              <p>Except where liability is required under applicable law, Phulwari shall not be liable for:</p>
              <ul>
                <li><CheckCircle2 /> Personal injuries</li>
                <li><CheckCircle2 /> Loss of personal belongings</li>
                <li><CheckCircle2 /> Property damage</li>
                <li><CheckCircle2 /> Indirect or consequential losses</li>
              </ul>
            </TermsSection>

            <TermsSection id="governing-law">
              <p>These Terms &amp; Conditions shall be governed and interpreted in accordance with the laws of India.</p>
              <p>Any disputes arising from the use of our services shall be subject to the exclusive jurisdiction of the courts located in Patna, Bihar.</p>
            </TermsSection>

            <TermsSection id="changes">
              <p>Phulwari reserves the right to update, revise, or modify these Terms &amp; Conditions at any time without prior notice.</p>
              <p>Updated versions will be published on our website and will become effective immediately upon publication.</p>
              <p>Continued use of our services constitutes acceptance of the revised Terms &amp; Conditions.</p>
            </TermsSection>

            <TermsSection id="contact">
              <p>If you have any questions regarding these Terms &amp; Conditions, please contact us.</p>
              <ContactCard />
            </TermsSection>
          </main>
        </div>

        {/* Closing banner */}
        <div className="tc-thanks">
          <div className="tc-thanks-card">
            <div className="tc-thanks-icon">
              <Heart fill="#FF4D8D" />
            </div>
            <h2 className="tc-thanks-title">Thank You for Being Part of the Phulwari Family</h2>
            <p className="tc-thanks-text">
              We are committed to creating a safe, joyful, and enriching environment where children
              learn, play, and grow while families build lasting memories together.
            </p>
            <div className="tc-thanks-actions">
              <a className="tc-thanks-btn tc-thanks-btn--call" href="tel:+916207368839">
                <Phone /> Call Us
              </a>
              <a
                className="tc-thanks-btn tc-thanks-btn--whatsapp"
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
        className={`tc-top-btn ${showTop ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp />
      </button>
    </>
  );
}