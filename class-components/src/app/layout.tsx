import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { AppProvider } from '../components/AppProvider';
import { Header } from '../components/Header';

import '../styles/global.css';
import classes from './page.module.css';

export const metadata: Metadata = {
  title: 'SW search app',
  description: 'Next.js search app for StarWars planets',
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.png',
    },
  ],
};

const montserrat = Montserrat({ subsets: ['latin'], style: 'normal', display: 'swap', weight: ['400', '700'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <script src="https://kit.fontawesome.com/c7802b1604.js" crossOrigin="anonymous" defer />
      </head>
      <body>
        <AppProvider>
          <main className={classes.main}>
            <Header />
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
