import React from "react";

import Card from "react-bootstrap/Card";

import ToDoForm from "../ToDoForm/ToDoForm";

const ToDoItem = (props) => {
  return (
    <li className="mb-2" style={{cursor: "pointer"}}>
      <Card>
        <Card.Body>
          <ToDoForm
            id={props.id}
            text={props.text}
            dateAdd={props.dateAdd}
            checked={props.completed}
            onClick={props.onClick}
          />
        </Card.Body>
      </Card>
    </li>
  );
};

export default ToDoItem;
