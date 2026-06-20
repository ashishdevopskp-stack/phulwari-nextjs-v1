import Hero from '@/app/hero/page';
import AboutUs from '@/app/about/Page';
import Activities from '@/app/activities/page';
import Programs from '@/app/mothers/page';
import Events from '@/app/events/birthday/page';
import Galary from '@/app/galary/page';
import Faq from '@/app/faq/page';
import Contact from '@/app/contact/page';

// Main Page Component
// Navbar and Footer come from app/layout.tsx and render on every route.
// This file only holds the sections unique to the homepage.
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Galary />
      <Activities />
      <Programs />
      <Events />
      <Faq />
      <Contact />
    </main>
  );
}