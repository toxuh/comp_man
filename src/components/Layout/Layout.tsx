import React from 'react';
import { Container } from 'react-bootstrap';

import './Layout.css';

type Layout = {
  children: React.ReactNode;
};

const Layout: React.FC<Layout> = ({ children }) => {
  return <Container className="Layout">{children}</Container>;
};

export default Layout;
