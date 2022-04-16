import React from "react";

import Button from "react-bootstrap/Button";

const FilterState = (props) => {
  return (
    <div className="d-flex justify-content-center gap-4 mt-4">
      <style type="text/css">
        {`
        .btn-state {
          border-color: var(--bs-gray-500);
          font-weight: bold;
        }

        .btn-active {
          background-color: var(--bs-terziary) !important;
          border-color: var(--bs-terziary) !important;
          color: white !important;
        }
        .btn-active:focus {
          box-shadow: 0 0 0 0.25rem rgb(240 139 109 / 25%);
        }
        `}
      </style>
      <Button
        id="All"
        size="sm"
        variant="state"
        onClick={props.onClick}
        className={`${props.state === "All" ? 'btn-active' : ''}`}
      >
        All
      </Button>
      <Button
        id="ToDo"
        variant="state"
        size="sm"
        onClick={props.onClick}
        className={`${props.state === "ToDo" ? 'btn-active' : ''}`}
      >
        To do
      </Button>
      <Button
        id="Completed"
        size="sm"
        variant="state"
        onClick={props.onClick}
        className={`${props.state === "Completed" ? 'btn-active' : ''}`}
      >
        Completed
      </Button>
    </div>
  );
};

export default FilterState;
