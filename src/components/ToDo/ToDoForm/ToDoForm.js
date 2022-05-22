import React, { useRef, useState, useContext } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";

import Popover from "react-bootstrap/Popover";
import Overlay from "react-bootstrap/Overlay";

import { ToDoContext } from "../../../contexts/ToDoContext";

import { BsTrash, BsPencil } from "react-icons/bs";

const ToDoForm = (props) => {
  const { deleteTodo, changeStateTodo } = useContext(ToDoContext);
  const [popoverShow, setPopoverShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const stateChangeHandler = (e) => {
    changeStateTodo(props.id, e.target.checked);
  };

  const formClickHandler = (event) => {
    const arrTarget = ['FORM', 'SMALL', 'LABEL'];

    if (!arrTarget.includes(event.target.tagName)) return;

    props.onClick();
  };

  return (
    <Form ref={ref} onSubmit={(e) => e.preventDefault()} onClick={formClickHandler} className="d-flex justify-content-between position-relative">
      <style type="text/css">
        {`
        .form-check-todo {
					width: 25px;
					height: 25px;
					border-radius: 15px !important;
				}
        .form-check-todo:checked {
					background-color: var(--bs-quaternary);
    			border-color: var(--bs-quaternary);
				}
        .form-check-todo-label {
					display: block;
          width: 100%;
					white-space: break-spaces;
				}
        .text-barred {
          text-decoration: line-through;
        }
        `}
      </style>
      <Form.Check type="checkbox" id={props.id} style={{'maxWidth': '90%'}}>
        <Form.Check.Input
          type="checkbox"
          className="form-check-todo"
          defaultChecked={props.checked}
          onChange={stateChangeHandler}
        />
        <Form.Check.Label className={`form-check-todo-label ms-2 ${props.checked ? 'text-barred' : ''}`} htmlFor="-">
          {props.text}
        </Form.Check.Label>
        <small className="d-block text-muted ms-2">{`added on ${props.dateAdd
          .replace("T", " ")
          .substring(0, 16)}`}</small>
      </Form.Check>
      <div className="d-flex flex-column gap-2">
        <Button
          variant="default"
          className="btn-sm"
          aria-label="Delete"
          onClick={(e) => {
            setTarget(e.target);
            setPopoverShow(prevShow => !prevShow);
          }}
        >
          <BsTrash />
        </Button>
        <Button
          variant="default"
          className="btn-sm"
          aria-label="Update"
          onClick={props.onClick}
        >
          <BsPencil />
        </Button>
      </div>
      <Overlay show={popoverShow} placement="left" target={target} container={ref}>
        <Popover style={{cursor: 'default'}}>
          <Popover.Header as="h3">
            Attention
            <CloseButton onClick={() => setPopoverShow(false)} className="btn-sm float-end" aria-label="Close" />
          </Popover.Header>
          <Popover.Body>Are you sure delete this to-do ?</Popover.Body>
          <Button
            id="Completed"
            type="button"
            size="sm"
            className="btn-terziary text-white float-end m-2 mt-0"
            onClick={() => { 
							setPopoverShow(false);
							deleteTodo(props.id);
						}}
          >
            Delete
          </Button>
        </Popover>
      </Overlay>
    </Form>
  );
};

export default ToDoForm;
