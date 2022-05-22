import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ToDoContext = React.createContext();

const ToDoProvider = (props) => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filters, setFilters] = useLocalStorage("todos_filters", {
    state: 'All',
    text: ''
  });

  useEffect(() => {
    let todosTmp = [...todos];

    if (filters.text !== '') todosTmp = todosTmp.filter(todo => todo.text.toLowerCase().includes(filters.text.toLowerCase()));

    switch (filters.state) {
      case 'ToDo':
        todosTmp = todosTmp.filter(todo => !todo.completed);
        break;
      case 'Completed':
        todosTmp = todosTmp.filter(todo => todo.completed);
        break;
      default:
        break;
    }

    todosTmp.sort((a, b) => {
        return Date.parse(a.dateAdd) - Date.parse(b.dateAdd)
    });

    setFilteredTodos(JSON.parse(JSON.stringify(todosTmp)));
  }, [todos, filters]);

  const addTodo = (id, text) => {
    setTodos(prevTodos => {
      let todosTmp = [...prevTodos];
      const todoToUpdateIndex = todosTmp.findIndex(todo => todo.id === id);

      if (todoToUpdateIndex === -1) {
        todosTmp.push({
          id: Math.random(), 
          text, 
          dateAdd: new Date(), 
          completed: false
        });
      } else {
        todosTmp[todoToUpdateIndex].text = text;
      }

      return todosTmp;
    });
  };
  const deleteTodo = (id) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id);
    });
  };
  const changeStateTodo = (id, state) => {
    setTodos(prevTodos => {
      let todosTmp = [...prevTodos];
      const todoToUpdateIndex = todosTmp.findIndex(todo => todo.id === id);

      if (todoToUpdateIndex === -1) return;

      todosTmp[todoToUpdateIndex].completed = state;

      return todosTmp;
    });
  };

  return (
    <ToDoContext.Provider value={{
      todos,
      filteredTodos,
      filters,
      addTodo,
      deleteTodo,
      changeStateTodo,
      setFilteredTodos,
      setFilters
    }}>
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;