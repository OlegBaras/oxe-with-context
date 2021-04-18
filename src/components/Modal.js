import { useContext } from "react";
import "../css/Modal.css";
import InputForm from "./InputForm.js";
import { CardsContext } from "../context/cardsContext";

//Modal Component
export default function Modal() {
  const { inputValue, setInputValue, addNewRover, setShowModal } = useContext(
    CardsContext
  );

  //on modal background click
  const exitModal = () => {
    setShowModal(false);
  };

  // on modal card click
  const selectModalContent = (e) => {
    e.stopPropagation();
  };

  //cancel button handler
  const handleCancelClick = () => {
    setShowModal(false);
  };

  return (
    <div className="modal" onClick={exitModal}>
      <div className="modal-content" onClick={selectModalContent}>
        <div className="modal-title">
          <h2>New Rover</h2>
        </div>
        <div className="modal-body">
          <InputForm setInputValue={setInputValue} addNewRover={addNewRover} />
        </div>
        <div className="control-buttons">
          <button className="modal-button" onClick={handleCancelClick}>
            Cancel
          </button>
          <button
            className="modal-button"
            disabled={inputValue < 1}
            onClick={addNewRover}
          >
            Launch
          </button>
        </div>
      </div>
    </div>
  );
}
