import type { Metadata } from 'next';
import { Titillium_Web } from 'next/font/google';
import './globals.css';
import StoreProvider from './StoreProvider';
import { ThemeProvider } from 'next-themes';
import LoadingProgressBar from '@/components/LoadingProgressBar';

const titilliumWeb = Titillium_Web({
  variable: '--font-titillium-web',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Treasure Hunt',
  description: 'A 3D treasure hunt game',
};

const RootLayout: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <html lang="en" className={`${titilliumWeb.className}`}>
      <body className={`${titilliumWeb.variable} dark antialiased`}>
        <StoreProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
          <LoadingProgressBar />
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
