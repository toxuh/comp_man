import React from 'react';

import './Layout.css';

type Layout = {
  children: React.ReactNode;
};

const Layout: React.FC<Layout> = ({ children }) => {
  return <div className="Layout">{children}</div>;
};

export default Layout;
