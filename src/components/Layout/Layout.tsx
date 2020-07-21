import React from 'react';
import { Container } from 'react-bootstrap';

import './Layout.css';

type Layout = {
  children: React.ReactNode;
};

const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div className="Layout">
      <Container className="Layout__Container">{children}</Container>
    </div>
  );
};

export default Layout;
