import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BsCheck } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="position-fixed w-100 top-0">
      <Container fluid className={"bg-primary h-100"}>
        <Row>
          <Col className="p-3">
            <h2 className="text-center">Ta daa, to doo <BsCheck /></h2>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
