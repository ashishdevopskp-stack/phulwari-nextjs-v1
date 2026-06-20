'use client';

import React from 'react';
import {
  Phone,
  MessageCircle,
  Clock3,
  CalendarDays,
  Baby,
  Users2,
  MapPin,
} from 'lucide-react';

const batches = [
  {
    id: 'toddler',
    badge: 'Mother & Toddler Program',
    timing: '10:30 AM – 11:30 AM',
    days: 'Monday to Saturday',
    age: '1 – 3 Years',
    color: '#FF4D8D',
    bg: '#FFE6EF',
    icon: Baby,
  },
  {
    id: 'premium',
    badge: 'Phulwari Premium Circle',
    timing: '5:00 PM Onwards',
    days: 'Monday to Sunday',
    age: '3+ Years',
    color: '#8B5CF6',
    bg: '#EFE7FE',
    icon: Users2,
  },
  {
    id: 'core',
    badge: 'Phulwari Core',
    timing: '6:30 PM Onwards',
    days: 'Wednesday to Sunday',
    age: '3+ Years',
    color: '#E8A621',
    bg: '#FFF3D9',
    icon: CalendarDays,
  },
];

const tableData = [
  { batch: 'Mother & Toddler Program', age: '1 – 3 Years', timing: '10:30 AM – 11:30 AM', days: 'Mon – Sat',  color: '#FF4D8D', bg: '#FFE6EF' },
  { batch: 'Phulwari Premium Circle',  age: '3+ Years',    timing: '5:00 PM Onwards',     days: 'Mon – Sun',  color: '#8B5CF6', bg: '#EFE7FE' },
  { batch: 'Phulwari Core',            age: '3+ Years',    timing: '6:30 PM Onwards',     days: 'Wed – Sun',  color: '#E8A621', bg: '#FFF3D9' },
];

export default function BatchPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Quicksand:wght@600;700&display=swap');

        @keyframes btFadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes btFloat  { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }

        .bt-page {
          background-color: #FFF7EC;
          font-family: 'Quicksand', sans-serif;
          color: #3F3A52;
          min-height: 100vh;
          padding-bottom: 3rem;
        }

        /* Hero */
        .bt-hero {
          max-width: 48rem;
          margin: 0 auto;
          padding: 3.5rem 1.25rem 2rem;
          text-align: center;
          animation: btFadeUp 0.5s ease both;
        }
        .bt-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1.2rem;
          background-color: #FFD166;
          border-radius: 9999px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #6B4500;
          animation: btFloat 4s ease-in-out infinite;
        }
        .bt-hero-title {
          font-family: 'Baloo 2', sans-serif;
          font-weight: 800;
          font-size: clamp(1.8rem, 3vw + 1rem, 2.6rem);
          line-height: 1.18;
          margin: 1rem 0 0.75rem;
        }
        .bt-hero-title span { color: #FF4D8D; }
        .bt-hero-sub {
          font-size: 0.97rem;
          font-weight: 600;
          color: #6B6480;
          line-height: 1.7;
        }

        /* Batch cards */
        .bt-cards {
          max-width: 64rem;
          margin: 0 auto;
          padding: 0 1.25rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .bt-cards { grid-template-columns: repeat(3, 1fr); }
        }

        .bt-card {
          background-color: #ffffff;
          border-radius: 24px;
          padding: 1.75rem 1.5rem;
          box-shadow: 0 6px 18px rgba(63,58,82,0.07);
          animation: btFadeUp 0.45s ease both;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .bt-card-top {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .bt-card-icon {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .bt-card-icon svg {
          width: 22px;
          height: 22px;
          stroke: #ffffff;
          stroke-width: 2.25;
        }
        .bt-card-name {
          font-family: 'Baloo 2', sans-serif;
          font-weight: 800;
          font-size: 1rem;
          line-height: 1.25;
          color: #3F3A52;
        }

        .bt-card-divider {
          height: 1px;
          background-color: #F0EBE0;
        }

        .bt-card-meta {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }
        .bt-meta-row {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.87rem;
          font-weight: 700;
          color: #5B5570;
        }
        .bt-meta-row svg {
          width: 15px;
          height: 15px;
          stroke-width: 2.25;
          flex-shrink: 0;
        }

        /* Overview table */
        .bt-overview {
          max-width: 64rem;
          margin: 2rem auto 0;
          padding: 0 1.25rem;
        }
        .bt-overview-title {
          font-family: 'Baloo 2', sans-serif;
          font-weight: 800;
          font-size: 1.3rem;
          color: #3F3A52;
          margin-bottom: 0.9rem;
          text-align: center;
        }
        .bt-table-wrap {
          background-color: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(63,58,82,0.07);
        }
        .bt-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.87rem;
          font-weight: 600;
        }
        .bt-table thead tr { background-color: #3F3A52; }
        .bt-table thead th {
          color: #ffffff;
          font-family: 'Baloo 2', sans-serif;
          font-weight: 700;
          font-size: 0.76rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 0.85rem 1.2rem;
          text-align: left;
        }
        .bt-table tbody tr { border-bottom: 1px solid #F0EBE0; }
        .bt-table tbody tr:last-child { border-bottom: none; }
        .bt-table tbody td { padding: 0.9rem 1.2rem; color: #5B5570; vertical-align: middle; }
        .bt-table tbody td:first-child { font-weight: 700; color: #3F3A52; }

        .bt-age-pill {
          display: inline-block;
          padding: 0.2rem 0.65rem;
          border-radius: 9999px;
          font-size: 0.78rem;
          font-weight: 700;
        }
        .bt-batch-name {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .bt-dot {
          width: 9px;
          height: 9px;
          border-radius: 9999px;
          flex-shrink: 0;
        }

        /* CTA */
        .bt-cta {
          max-width: 64rem;
          margin: 1.75rem auto 0;
          padding: 0 1.25rem;
        }
        .bt-cta-card {
          border-radius: 24px;
          padding: 2.25rem 1.75rem;
          background: linear-gradient(135deg, #FFE6EF 0%, #FFF3D9 45%, #EFE7FE 100%);
          text-align: center;
        }
        .bt-cta-title {
          font-family: 'Baloo 2', sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
          color: #3F3A52;
          margin-bottom: 1rem;
        }
        .bt-cta-address {
          display: inline-flex;
          align-items: flex-start;
          gap: 0.5rem;
          background-color: #ffffff;
          border-radius: 14px;
          padding: 0.8rem 1.1rem;
          font-size: 0.84rem;
          font-weight: 700;
          color: #3F3A52;
          line-height: 1.5;
          margin-bottom: 1.25rem;
          max-width: 30rem;
          text-align: left;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }
        .bt-cta-address svg { width: 16px; height: 16px; color: #FF4D8D; flex-shrink: 0; margin-top: 0.15rem; }
        .bt-cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          justify-content: center;
        }
        .bt-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 9999px;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.9rem;
          font-family: 'Quicksand', sans-serif;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 6px 14px rgba(0,0,0,0.12);
          transition: transform 0.15s ease;
        }
        .bt-cta-btn:hover { transform: translateY(-2px); }
        .bt-cta-btn svg { width: 17px; height: 17px; }
        .bt-cta-btn--call { background-color: #FF4D8D; }
        .bt-cta-btn--whatsapp { background-color: #34B36B; }
      `}</style>

      <div className="bt-page">

        {/* Hero */}
        <header className="bt-hero">
          <span className="bt-hero-badge"><CalendarDays size={13} /> Batches & Timings</span>
          <h1 className="bt-hero-title">
            Find the <span>Perfect Schedule</span><br />for Your Child
          </h1>
          <p className="bt-hero-sub">
            We offer flexible batches designed to suit different age groups and interests.
          </p>
        </header>

        {/* Batch cards */}
        <div className="bt-cards">
          {batches.map((batch, i) => {
            const Icon = batch.icon;
            return (
              <div key={batch.id} className="bt-card" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="bt-card-top">
                  <div className="bt-card-icon" style={{ backgroundColor: batch.color }}>
                    <Icon />
                  </div>
                  <span className="bt-card-name">{batch.badge}</span>
                </div>
                <div className="bt-card-divider" />
                <div className="bt-card-meta">
                  <div className="bt-meta-row">
                    <Clock3 style={{ color: batch.color }} />
                    {batch.timing}
                  </div>
                  <div className="bt-meta-row">
                    <CalendarDays style={{ color: batch.color }} />
                    {batch.days}
                  </div>
                  <div className="bt-meta-row">
                    <Baby style={{ color: batch.color }} />
                    {batch.age}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Overview table */}
        <div className="bt-overview">
          <h2 className="bt-overview-title">Batch Overview</h2>
          <div className="bt-table-wrap">
            <table className="bt-table">
              <thead>
                <tr>
                  <th>Batch</th>
                  <th>Age Group</th>
                  <th>Timing</th>
                  <th>Days</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.batch}>
                    <td>
                      <span className="bt-batch-name">
                        <span className="bt-dot" style={{ backgroundColor: row.color }} />
                        {row.batch}
                      </span>
                    </td>
                    <td>
                      <span className="bt-age-pill" style={{ backgroundColor: row.bg, color: row.color }}>
                        {row.age}
                      </span>
                    </td>
                    <td>{row.timing}</td>
                    <td>{row.days}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="bt-cta">
          <div className="bt-cta-card">
            <h2 className="bt-cta-title">Need More Information?</h2>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <div className="bt-cta-address">
                <MapPin />
                M/32, Road No. 25, Sri Krishna Nagar, Kidwaipuri Main Road, Patna, Bihar – 800001
              </div>
            </div>
            <div className="bt-cta-buttons">
              <a className="bt-cta-btn bt-cta-btn--call" href="tel:+916207368839">
                <Phone size={17} /> Call Now
              </a>
              <a
                className="bt-cta-btn bt-cta-btn--whatsapp"
                href="https://wa.me/916207368839"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={17} /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}