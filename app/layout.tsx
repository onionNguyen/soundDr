import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'soundDr',
  description: 'slogan',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-custom`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
