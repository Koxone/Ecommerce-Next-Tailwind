'use client';
import { Montserrat, Inter } from 'next/font/google';
import '@/app/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import I18nProvider from '@/components/providers/I18nProvider';
import PageTransitionWrapper from '@/components/PageTransitionWrapper';
import { MainContextProvider } from '@/context/MainContext';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <MainContextProvider>
      <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
        <body>
          <I18nProvider>
            <PageTransitionWrapper>{children}</PageTransitionWrapper>
          </I18nProvider>
          <SpeedInsights />
        </body>
      </html>
    </MainContextProvider>
  );
}
