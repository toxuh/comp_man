import React from 'react';

type Layout = {
  children: React.ReactNode;
};

const Layout: React.FC<Layout> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
