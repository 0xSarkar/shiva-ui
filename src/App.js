import React, { useState } from "react";

import Modal from "./components/Modal";
import ModalBody from "./components/Modal/ModalBody";
import ModalHeader from "./components/Modal/ModalHeader";
import ModalFooter from "./components/Modal/ModalFooter";
import Button from "./components/Button/Button";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return(
    <div className="p-4">
      <div>
        <Button onClick={() => setModalIsOpen(true)}>Open Modal</Button>
      </div>

      <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
        <ModalHeader>Modal Header Here</ModalHeader>
        <ModalBody>
          <p>
            Modal's body text goes here...
          </p>
          <p className="mt-2">
            The default width of modals is `max-w-md`. You can update it by passing your desired width class to the `ModalBody` component.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setModalIsOpen(false)}>Close</Button>
          <Button className="ml-2">Save Updates</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default App;