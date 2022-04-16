import React, { useState } from "react";

import Header from "./components/UI/Header/Header";
import Main from "./components/UI/Main/Main";
import Footer from "./components/UI/Footer/Footer";

import FiltersList from "./components/Filters/FiltersList/FiltersList";
import ToDoList from "./components/ToDo/ToDoList/ToDoList";
import AddTodo from "./components/ToDo/AddTodo/AddTodo";

function App() {
  const [idTodoupdate, setIdTodoupdate] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setIdTodoupdate(0);
    setShowModal((prevState) => !prevState);
  } 

  return (
    <>
      <Header />
      <Main>
        <FiltersList />
        <ToDoList
          onClickItem={(id) => {
            setIdTodoupdate(id);
            setShowModal(true);
          }}
        />
        <AddTodo
          show={showModal}
          onCloseClick={showModalHandler}
          idTodoupdate={idTodoupdate}
        />
      </Main>
      <Footer onAddClick={showModalHandler} />
    </>
  );
}

export default App;
