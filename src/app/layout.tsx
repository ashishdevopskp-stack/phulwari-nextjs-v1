import type { Metadata } from 'next';
import Navbar from '@/app/Navbar';
import Footer from '@/app/footer/page';
import './globals.css';

export const metadata: Metadata = {
  title: 'Phulwari Mother & Child Activity Centre',
  description:
    "Patna's unique mother & child activity centre where children learn, play, grow and explore while mothers stay active, healthy and engaged.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}