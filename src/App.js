import React, { useState } from "react";

import Header from "./components/UI/Header/Header";
import Main from "./components/UI/Main/Main";
import Footer from "./components/UI/Footer/Footer";

import FiltersList from "./components/Filters/FiltersList/FiltersList";
import ToDoList from "./components/ToDo/ToDoList/ToDoList";
import AddTodo from "./components/ToDo/AddTodo/AddTodo";

function App() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prevState) => !prevState);
  }; 

  return (
    <>
      <Header />
      <Main>
        <FiltersList />
        <ToDoList />
        <AddTodo
          show={showModal}
          onCloseClick={showModalHandler}
          idTodoupdate='0'
        />
      </Main>
      <Footer onAddClick={showModalHandler} />
    </>
  );
}

export default App;
