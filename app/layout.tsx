import type { Metadata } from 'next';
import { Titillium_Web } from 'next/font/google';
import './globals.css';
import StoreProvider from './StoreProvider';

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
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
