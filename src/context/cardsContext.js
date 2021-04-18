import React, { useEffect, createContext, useState } from "react";

export const CardsContext = createContext();

const CardsProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([]);

  //GET Method
  useEffect(() => {
    fetch("http://localhost:4444/rovers")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      });
  }, [showModal]);

  //POST METHOD
  const addNewRover = () => {
    const options = {
      method: "POST",
    };
    fetch(`http://localhost:4444/add-rover/${inputValue}`, options).catch(
      (error) => {
        console.log("Error");
      }
    );
    setShowModal(false);
  };

  //Trigger Modal
  const addPost = () => {
    setShowModal(!showModal);
  };

  return (
    <CardsContext.Provider
      value={{
        inputValue,
        setInputValue,
        showModal,
        setShowModal,
        addPost,
        cards,
        setCards,
        addNewRover,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export default CardsProvider;
