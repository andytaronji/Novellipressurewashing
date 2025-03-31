"use client";

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <div className="hidden lg:block w-16 bg-accent" />
        <main className="flex-grow">
          {children}
        </main>
        <div className="hidden lg:block w-16 bg-accent" />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
