import React, { useRef, useState, useContext } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import AddTodo from "../AddTodo/AddTodo";
import DeleteTodo from "../DeleteTodo/DeleteTodo";

import { ToDoContext } from "../../../contexts/ToDoContext";

import { BsTrash, BsPencil } from "react-icons/bs";

const ToDoForm = (props) => {
  const { changeStateTodo } = useContext(ToDoContext);
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const ref = useRef(null);

  const stateChangeHandler = (e) => {
    changeStateTodo(props.id, e.target.checked);
  };

  const updateModalHandler = () => {
    setUpdateModal((prevState) => !prevState);
  };

  const deleteModalHandler = () => {
    setDeleteModal((prevState) => !prevState);
  };

  return (
    <Form ref={ref} onSubmit={(e) => e.preventDefault()} className="d-flex justify-content-between position-relative">
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
          className="btn-sm shadow-none"
          aria-label="Delete"
          onClick={deleteModalHandler}
        >
          <BsTrash />
        </Button>
        <Button
          variant="default"
          className="btn-sm shadow-none"
          aria-label="Update"
          onClick={updateModalHandler}
        >
          <BsPencil />
        </Button>
      </div>
      <AddTodo
        show={updateModal}
        idTodoupdate={props.id}
        onCloseClick={updateModalHandler}
      />
      <DeleteTodo 
        show={deleteModal}
        idTodoDelete={props.id}
        onCloseClick={deleteModalHandler}
      />
    </Form>
  );
};

export default ToDoForm;
