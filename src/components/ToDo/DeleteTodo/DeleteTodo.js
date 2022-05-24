import React, { useState, useContext, useEffect } from "react";

import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

import { ToDoContext } from "../../../contexts/ToDoContext";

import { BsExclamationOctagon, BsTrash } from "react-icons/bs";

const DeleteTodo = (props) => {
	const [todoDelete, setTodoDelete] = useState({});
  const { todos, deleteTodo } = useContext(ToDoContext);

	useEffect(() => {
		let todoItem = todos.find(todo => todo.id === props.idTodoDelete);

		if (todoItem) {
			setTodoDelete({ id: todoItem.id, text: todoItem.text });
		} else {
			props.onCloseClick();
		}
	}, [props, todos]);

	const submitHandler = (e) => {
    e.preventDefault();

		deleteTodo(todoDelete.id);

		props.onCloseClick();
  };

	return (
		<Modal show={props.show} onHide={props.onCloseClick} className="h-auto bottom-0" style={{top: 'unset'}}>
			<Form onSubmit={submitHandler}>
				<Modal.Header closeButton>
					<Modal.Title>
						<BsTrash /> Delete todo
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
						<div className="text-center">
							<BsExclamationOctagon className="me-2" />
							<small>
								<b>Attention</b>, this action is <b>not</b> reversible
							</small>
						</div>
						<Form.Group className="mt-2">
							<Form.Label>Your text</Form.Label>
							<Form.Control as="textarea" defaultValue={todoDelete.text} rows={5} placeholder="Order pizzas 😋" disabled />
						</Form.Group>
				</Modal.Body>
				<Modal.Footer>					
					<Button type="submit" variant="danger" size="lg" className="text-white">
						Delete
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};

export default DeleteTodo;