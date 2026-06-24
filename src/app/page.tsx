import Hero from '@/app/hero/page';
import Activities from '@/app/activities/page';
import AboutUs from '@/app/about/page';
import Gallery from '@/app/batch-galary/gallery/page';
import Batch from '@/app/batch-galary/batch/page';
import Contact from '@/app/contact/page';
import Testinomals from '@/app/testinomals/page';


export default function Home() {
  return (
    <main>
      <Hero />
      <Activities />
      <AboutUs />
      <Gallery />
      <Batch />
      <Testinomals />
      <Contact />
    </main>
  );
}