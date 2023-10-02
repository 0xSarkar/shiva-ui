import React, { useState } from "react";

import Modal from "./components/Modal";
import Button from "./components/Button/Button";
import { ThemeProvider } from "./contexts";
import { themeOptions } from "./theme";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return(
    <>
    <ThemeProvider themeOptions={themeOptions}>

    <div className="p-4">
      <div className="my-4">
        <h2 className="text-xl text-gray-800">Buttons</h2>
        <div className="mt-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary" className="ml-2">Secondary</Button>
          <Button variant="neutral" className="ml-2">Neutral</Button>
          <Button variant="boxed" className="ml-2">Boxed</Button>
        </div>
        <div className="mt-3">
          <Button variant="success">Success</Button>
          <Button variant="danger" className="ml-2">Danger</Button>
          <Button variant="warning" className="ml-2">Warning</Button>
          <Button variant="info" className="ml-2">Info</Button>
        </div>
        <div className="mt-3">
          <Button variant="light">Light</Button>
          <Button variant="dark" className="ml-2">Dark</Button>
          <Button variant="link" className="ml-2">Link</Button>
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-xl text-gray-800">Modals</h2>
        <div className="mt-3">
          <Button onClick={() => setModalIsOpen(true)}>Open Modal</Button>
        </div>
      </div>
    </div>

    <Modal.BackDrop isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
      <Modal.Box>
        <Modal.Header>Awesome Modal Header</Modal.Header>
        <Modal.Body>
          <p>
            Modal's body text goes here...
          </p>
          <p className="mt-2">
            The default width of modals is `max-w-md`. You can update it by passing your desired width class to the `ModalBox` component.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="boxed" onClick={() => setModalIsOpen(false)}>Close</Button>
          <Button className="ml-2">Save Updates</Button>
        </Modal.Footer>
      </Modal.Box>
    </Modal.BackDrop>

    </ThemeProvider>
    </>
  )
}

export default App;