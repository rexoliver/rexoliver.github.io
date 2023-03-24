import React from 'react';
import Header from './Header';

interface MyComponentProps {
  children: React.ReactNode;
}

const Layout: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
