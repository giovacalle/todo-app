import React, { useContext } from "react";

import Form from "react-bootstrap/Form";

import FilterState from "../FilterState/FilterState";

import { ToDoContext } from "../../../contexts/ToDoContext";

const FiltersList = () => {
  const {filters, setFilters} = useContext(ToDoContext);

  const textChangeHandler = (e) => {
    setFilters(prevFilters => {
      return { ...prevFilters, text: e.target.value };
    });
  };

  const stateChangeHandler = (e) => {
    setFilters(prevFilters => {
      return { ...prevFilters, state: e.target.id };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mt-2">
        <Form.Label>Find by text</Form.Label>
        <Form.Control type="text" value={filters.text} onChange={textChangeHandler} size="md" placeholder="Order pizzas 😋" />
      </Form.Group>
			<FilterState state={filters.state} onClick={stateChangeHandler} />
    </Form>
  );
};

export default FiltersList;
