import Hero from '@/app/hero/page';
import Activities from '@/app/activities/page';
import AboutUs from '@/app/about/page';
import Gallery from '@/app/batch-galary/gallery/page';
import Batch from '@/app/batch-galary/batch/page';
import Events from '@/app/events/summer/page';
import Faq from '@/app/faq/page';
import Contact from '@/app/contact/page';


export default function Home() {
  return (
    <main>
      <Hero />
      <Activities />
      <AboutUs />
      <Gallery />
      <Batch />
      <Events />
      <Faq />
      <Contact />
    </main>
  );
}