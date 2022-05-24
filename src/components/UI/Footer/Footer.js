import React from "react";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { BsPlusCircle } from "react-icons/bs";

const Footer = (props) => {
  return (
    <footer className="position-fixed w-100 bottom-0">
      <Container fluid className={"d-flex align-items-center justify-content-evenly bg-primary h-100"}>
        <Button variant="primary" size="md" onClick={props.onAddClick} className="rounded-circle shadow-none" aria-label="Add" title="Add new todo">
          <BsPlusCircle className="fs-1" />
        </Button>
      </Container>
    </footer>
  );
};

export default Footer;