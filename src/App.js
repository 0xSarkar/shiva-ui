import React, { useState } from "react";

import Modal from "./components/Modal";
import ModalBody from "./components/Modal/ModalBody";
import ModalHeader from "./components/Modal/ModalHeader";
import ModalFooter from "./components/Modal/ModalFooter";
import Button from "./components/Button/Button";
import ModalBox from "./components/Modal/ModalBox";
import ModalBackdrop from "./components/Modal/ModalBackdrop";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return(
    <div className="p-4">
      <div>
        <Button onClick={() => setModalIsOpen(true)}>Open Modal</Button>
      </div>

      <ModalBackdrop isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
        <ModalBox>
          <ModalHeader>Awesome Modal Header</ModalHeader>
          <ModalBody>
            <p>
              Modal's body text goes here...
            </p>
            <p className="mt-2">
              The default width of modals is `max-w-md`. You can update it by passing your desired width class to the `ModalBox` component.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setModalIsOpen(false)}>Close</Button>
            <Button className="ml-2">Save Updates</Button>
          </ModalFooter>
        </ModalBox>
      </ModalBackdrop>
    </div>
  )
}

export default App;