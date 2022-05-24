import React, { useState, useContext } from "react";

import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import ClearCompleted from "../../ToDo/ClearCompleted/ClearCompleted";

import FilterState from "../FilterState/FilterState";

import { ToDoContext } from "../../../contexts/ToDoContext";

import {
  AiOutlineSortAscending,
  AiOutlineSortDescending
} from "react-icons/ai";

const ClearButton = () => {
  const [clearModal, setClearModal] = useState(false);

  const clearModalHandler = () => {
    setClearModal((prevState) => !prevState);
  };

  return (
    <>
      <Button
        variant="danger"
        size="sm"
        className="mt-2 shadow-none float-start text-white"
        onClick={clearModalHandler}
      >
        clear all
      </Button>
      <ClearCompleted show={clearModal} onCloseClick={clearModalHandler} />
    </>
  );
};

const FiltersList = () => {
  const { filters, setFilters } = useContext(ToDoContext);

  const textChangeHandler = (e) => {
    setFilters((prevFilters) => {
      return { ...prevFilters, text: e.target.value };
    });
  };

  const stateChangeHandler = (e) => {
    setFilters((prevFilters) => {
      return { ...prevFilters, state: e.target.id };
    });
  };

  const dateChangeHandler = (e) => {
    setFilters((prevFilters) => {
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
        <Form.Control
          type="text"
          value={filters.text}
          onChange={textChangeHandler}
          size="md"
          placeholder="Order pizzas 😋"
        />
      </Form.Group>
      <FilterState state={filters.state} onClick={stateChangeHandler} />
      {filters.state === "Completed" && <ClearButton />}
      <Button
        className="mt-2 shadow-none float-end text-dark"
        onClick={dateChangeHandler}
      >
        <span>order by date </span>
        {filters.dateAsc || <AiOutlineSortAscending />}
        {filters.dateAsc && <AiOutlineSortDescending />}
      </Button>
    </Form>
  );
};

export default FiltersList;
