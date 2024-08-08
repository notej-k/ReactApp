import React, { ReactNode } from 'react';
import Navbar from '../Navbar';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;