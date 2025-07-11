import { Montserrat, Inter } from 'next/font/google';
import '@/app/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import I18nProvider from '@/components/providers/I18nProvider';
import PageTransitionWrapper from '@/components/PageTransitionWrapper';
import { MainContextProvider } from '@/context/MainContext';
import Header from '@/components/headers/Header';
import Footer from '@/components/footers/Footer';
import { AuthProvider } from '@/context/AuthContext';
import { PurchaseProvider } from '@/context/PurchaseContext';
import Cart from '@/components/cart/Cart';

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
    <AuthProvider>
      <MainContextProvider>
        <PurchaseProvider>
          <html
            lang="es"
            className={`${montserrat.variable} ${inter.variable} overflow-x-hidden`}
          >
            <body>
              <I18nProvider>
                <Header />
                <PageTransitionWrapper>{children}</PageTransitionWrapper>
                <Footer />
              </I18nProvider>
              <SpeedInsights />
            </body>
          </html>
        </PurchaseProvider>
      </MainContextProvider>
    </AuthProvider>
  );
}
