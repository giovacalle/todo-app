import React, { useContext } from "react";

import ToDoItem from "../ToDoItem/ToDoItem";

import { FaRegSmileBeam, FaSearch } from "react-icons/fa";
import { RiFocus2Line } from "react-icons/ri";

import { ToDoContext } from "../../../contexts/ToDoContext";

const ToDoList = (props) => {
  const {
    filteredTodos,
    filters
  } = useContext(ToDoContext);

  return (
    <ul className="list-unstyled mt-4 p-0 pb-5 overflow-auto" style={{ maxHeight: '65vh' }}>
      { 
        filteredTodos.length === 0 && filters.text !== '' && 
        <h2 className="mt-5 text-center">
          <span>No to-do found with these filters</span>
          <div className="mt-2">
            <FaSearch />
          </div>
        </h2>
      }
      { 
        filteredTodos.length === 0 && filters.text === '' && filters.state === 'Completed' && 
        <h2 className="mt-5 text-center">
          <span>Nothing finished yet, keep going !</span>
          <div className="mt-2">
            <RiFocus2Line />
          </div>
        </h2>
      }
      { 
        filteredTodos.length === 0 && filters.text === '' && filters.state === 'ToDo' && 
        <h2 className="mt-5 text-center">
          <span>No to-do found, well done !</span>
          <div className="mt-2">
            <FaRegSmileBeam />
          </div>
        </h2>
      }
      {
        filteredTodos.map((todo) => {
          return (
            <ToDoItem
              onClick={() => props.onClickItem(todo.id)}
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              dateAdd={todo.dateAdd}
            />
          );
        })
      }
    </ul>
  );
};

export default ToDoList;
