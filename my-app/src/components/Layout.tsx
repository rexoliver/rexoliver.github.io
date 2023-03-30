import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface MyComponentProps {
  children: React.ReactNode;
}

const Layout: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
