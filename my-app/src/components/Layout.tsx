import React from 'react';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
