import React from 'react';
import { Container, Row } from 'react-bootstrap';

import './Layout.css';

type Layout = {
  children: React.ReactNode;
};

const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <Container className="Layout">
      <Row>{children}</Row>
    </Container>
  );
};

export default Layout;
