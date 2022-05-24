import React, { useContext } from "react";

import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

import { ToDoContext } from "../../../contexts/ToDoContext";

import { BsExclamationOctagon, BsTrash } from "react-icons/bs";

const ClearCompleted = (props) => {
  const { clearCompleted } = useContext(ToDoContext);

	const submitHandler = (e) => {
    e.preventDefault();

		clearCompleted();

		props.onCloseClick();
  };

	return (
		<Modal show={props.show} onHide={props.onCloseClick} className="h-auto bottom-0" style={{top: 'unset'}}>
			<Form onSubmit={submitHandler}>
				<Modal.Header closeButton>
					<Modal.Title>
						<BsTrash /> Delete completed to-do
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
						<div className="text-center">
							<BsExclamationOctagon className="me-2" />
							<small>
								<b>Attention</b>, all <b>completed to-do</b> will be <b>deleted</b>, this action is <b>not</b> reversible
							</small>
						</div>
				</Modal.Body>
				<Modal.Footer>					
					<Button type="submit" variant="danger" size="lg" className="text-white">
						Clear completed
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};

export default ClearCompleted;