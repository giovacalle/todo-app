import React, { useContext } from "react";

import Form from "react-bootstrap/Form";

import FilterState from "../FilterState/FilterState";

import { ToDoContext } from "../../../contexts/ToDoContext";
import { Button } from "react-bootstrap";

import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';

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

  const dateChangeHandler = (e) => {
    setFilters(prevFilters => {
      return { ...prevFilters, dateAsc: !prevFilters.dateAsc };
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
      <Button className="mt-2 shadow-none float-end text-dark" onClick={dateChangeHandler}>
        <span>order by date </span>
        {filters.dateAsc || <AiOutlineSortAscending /> }
        {filters.dateAsc && <AiOutlineSortDescending /> }
      </Button>
    </Form>
  );
};

export default FiltersList;
