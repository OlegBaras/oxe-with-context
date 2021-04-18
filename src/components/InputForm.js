import React, { useContext } from "react";
import { CardsContext } from "../context/cardsContext";

export default function InputForm() {
  const { addNewRover, setInputValue } = useContext(CardsContext);
  return (
    <form onSubmit={addNewRover}>
      <label>Launch new rover to mars</label>
      <input
        type="text"
        placeholder="Rover Name"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </form>
  );
}
