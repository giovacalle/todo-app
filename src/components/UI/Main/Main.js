import React from "react";

import Container from "react-bootstrap/Container";

const Main = (props) => {
  return (
    <main className="p-3">
      <Container fluid>
        { props.children }
      </Container>
    </main>
  );
};

export default Main;
