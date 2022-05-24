import React, { useState, useRef, useContext, useEffect } from "react";

import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

import { ToDoContext } from "../../../contexts/ToDoContext";

import { BsPencil } from "react-icons/bs";

const AddTodo = (props) => {
	const [todoUpdate, setTodoUpdate] = useState({});
  const { todos, addTodo } = useContext(ToDoContext);
	const refText = useRef();

	useEffect(() => {
		let todoItem = todos.find(todo => todo.id === props.idTodoupdate);

		if (todoItem) {
			setTodoUpdate({ id: todoItem.id, text: todoItem.text });
		} else {
			setTodoUpdate({ id: 0, text: ''})
		}
	}, [props.idTodoupdate, todos]);

	const submitHandler = (e) => {
    e.preventDefault();

		addTodo(todoUpdate.id, refText.current.value);
		props.onCloseClick();
  };

	return (
		<Modal show={props.show} onHide={props.onCloseClick} className="h-auto bottom-0" style={{top: 'unset'}}>
			<Form onSubmit={submitHandler}>
				<Modal.Header closeButton>
					<Modal.Title>
						<BsPencil />
						{`${todoUpdate.id === 0 ? ' Add new ' : ' Modify '} to-do`}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
						<Form.Group>
							<Form.Label>Your text</Form.Label>
							<Form.Control as="textarea" defaultValue={todoUpdate.text} ref={refText} rows={5} placeholder="Order pizzas 😋" />
						</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button type="submit" variant="terziary" size="lg" className="text-white">
						Save
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};

export default AddTodo;