import React, { useState } from "react";

import Modal from "./components/Modal";
import Button from "./components/Button";
import { ThemeProvider } from "./contexts";
import { themeOptions } from "./theme";
import Dropdown from "./components/Dropdown";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [dropdownSingleIsOpen, setDropdownSingleIsOpen] = useState(false)
  const [dropdownNestedIsOpen, setDropdownNestedIsOpen] = useState(false)
  const [dropdownInnerRightIsOpen, setDropdownInnerRightIsOpen] = useState(false)
  const [dropdownInnerLeftIsOpen, setDropdownInnerLeftIsOpen] = useState(false)
  const [dropdownRightIsOpen, setDropdownRightIsOpen] = useState(false)
  const [dropdownTopIsOpen, setDropdownTopIsOpen] = useState(false)
  const [dropdownLeftIsOpen, setDropdownLeftIsOpen] = useState(false)

  return(
    <>
    <ThemeProvider themeOptions={themeOptions}>

    <div className="p-4">
      
      {/* === Buttons === */}
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
          <Button variant="text" className="ml-2">Text</Button>
        </div>
      </div>

      {/* === Modals === */}
      <div className="my-8">
        <h2 className="text-xl text-gray-800">Modals</h2>
        <div className="mt-3">
          <Button onClick={() => setModalIsOpen(true)}>Open Modal</Button>
        </div>
      </div>

      {/* === Dropdown Menus === */}
      <div className="my-8">
        <h2 className="text-xl text-gray-800">Dropdowns</h2>
        <div className="mt-3 flex items-center">
          <Dropdown.Wrapper isOpen={dropdownSingleIsOpen} setIsOpen={setDropdownSingleIsOpen}>
            <Dropdown.Button>
              Dropdown Menu
            </Dropdown.Button>
            <Dropdown.List>
              <Dropdown.Item> Item One</Dropdown.Item>
              <Dropdown.Item> Item Two</Dropdown.Item>
              <Dropdown.Item> Item with a very very long text</Dropdown.Item>
              <Dropdown.Item> Item Four</Dropdown.Item>
            </Dropdown.List>
          </Dropdown.Wrapper>

          <Dropdown.Wrapper isOpen={dropdownNestedIsOpen} setIsOpen={setDropdownNestedIsOpen} className="ml-2" direction={"down"}>
            <Dropdown.Button variant="secondary">
              Nested Dropdown
            </Dropdown.Button>
            <Dropdown.List>
              <Dropdown.Item>Item One</Dropdown.Item>
              <Dropdown.Item>Item Two</Dropdown.Item>
              <Dropdown.ItemNested>
                <Dropdown.Wrapper isOpen={dropdownInnerRightIsOpen} setIsOpen={setDropdownInnerRightIsOpen} direction="right">
                  <Dropdown.Button variant="text" className="!text-sm px-0">
                    Inner Dropdown Right
                  </Dropdown.Button>
                  <Dropdown.List>
                    <Dropdown.Item>Inner Item One</Dropdown.Item>
                    <Dropdown.Item>Inner Item Two</Dropdown.Item>
                    <Dropdown.Item>Inner Item Three</Dropdown.Item>
                  </Dropdown.List>
                </Dropdown.Wrapper>
              </Dropdown.ItemNested>
              <Dropdown.Item>Item Four</Dropdown.Item>
              <Dropdown.ItemNested>
                <Dropdown.Wrapper isOpen={dropdownInnerLeftIsOpen} setIsOpen={setDropdownInnerLeftIsOpen} direction="left" className="w-full">
                  <Dropdown.Button variant="text" className="!text-sm px-0 w-full">
                    Dropdown Left
                  </Dropdown.Button>
                  <Dropdown.List>
                    <Dropdown.Item>Inner Item One</Dropdown.Item>
                    <Dropdown.Item>Inner Item Two</Dropdown.Item>
                    <Dropdown.Item>Inner Item Three</Dropdown.Item>
                  </Dropdown.List>
                </Dropdown.Wrapper>
              </Dropdown.ItemNested>
            </Dropdown.List>
          </Dropdown.Wrapper>
        </div>

        <div className="mt-3 flex items-center">
          <Dropdown.Wrapper isOpen={dropdownRightIsOpen} setIsOpen={setDropdownRightIsOpen} direction="right">
            <Dropdown.Button variant="neutral">
              Dropdown Right
            </Dropdown.Button>
            <Dropdown.List>
              <Dropdown.Item> Item One</Dropdown.Item>
              <Dropdown.Item> Item Two</Dropdown.Item>
              <Dropdown.Item> Item with a very very long text</Dropdown.Item>
              <Dropdown.Item> Item Four</Dropdown.Item>
            </Dropdown.List>
          </Dropdown.Wrapper>

          <Dropdown.Wrapper isOpen={dropdownTopIsOpen} setIsOpen={setDropdownTopIsOpen} direction="top" className="ml-2">
            <Dropdown.Button variant="neutral">
              Dropdown Top
            </Dropdown.Button>
            <Dropdown.List>
              <Dropdown.Item> Item One</Dropdown.Item>
              <Dropdown.Item> Item Two</Dropdown.Item>
              <Dropdown.Item> Item with a very very long text</Dropdown.Item>
              <Dropdown.Item> Item Four</Dropdown.Item>
            </Dropdown.List>
          </Dropdown.Wrapper>

          <Dropdown.Wrapper isOpen={dropdownLeftIsOpen} setIsOpen={setDropdownLeftIsOpen} direction="left" className="ml-2">
            <Dropdown.Button variant="neutral">
              Dropdown Left
            </Dropdown.Button>
            <Dropdown.List>
              <Dropdown.Item> Item One</Dropdown.Item>
              <Dropdown.Item> Item Two</Dropdown.Item>
              <Dropdown.Item> Item with a very very long text</Dropdown.Item>
              <Dropdown.Item> Item Four</Dropdown.Item>
            </Dropdown.List>
          </Dropdown.Wrapper>
        </div>
          
      </div>

      {/* === Dropdown Menus === */}
      <div className="my-8">
        <h2 className="text-xl text-gray-800">Carousel</h2>
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