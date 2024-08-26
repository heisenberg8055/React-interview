import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopUp, setShowModalPopUp] = useState(false);

  function handleModal() {
    setShowModalPopUp(!showModalPopUp);
  }

  function onClose() {
    setShowModalPopUp(false);
  }
  return (
    <div>
      <button onClick={handleModal}>Open Modal</button>
      {showModalPopUp && <Modal body={<div>Hello</div>} onClose={onClose} />}
    </div>
  );
}
