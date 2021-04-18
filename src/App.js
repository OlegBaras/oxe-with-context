import React, { useContext } from "react";
import CardsList from "./components/CardsList";
import Modal from "./components/Modal";
import { CardsContext } from "./context/cardsContext";
import "./App.css";

function App() {
  //getting states from CardsContext
  const { showModal, setShowModal, addPost, addNewRover } = useContext(
    CardsContext
  );

  return (
    <div className="App">
      <header>
        <h1>Mars Rovers</h1>
      </header>
      <main>
        <CardsList />
      </main>
      <footer>
        <button className="add-post-button" onClick={addPost}>
          New Rover
        </button>
      </footer>
      {showModal ? (
        <Modal setShowModal={setShowModal} addNewRover={addNewRover} />
      ) : null}
    </div>
  );
}

export default App;
