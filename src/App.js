import React, { useState } from "react";

import Modal from "./components/Modal";
import Button from "./components/Button";
import { ThemeProvider } from "./contexts";
import { themeOptions } from "./theme";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";

function App() {

  // Modal States
  const [modalIsOpen, setModalIsOpen] = useState(false)

  // Dropdown States
  const [dropdownSingleIsOpen, setDropdownSingleIsOpen] = useState(false)
  const [dropdownNestedIsOpen, setDropdownNestedIsOpen] = useState(false)

  const [dropdownInnerRightIsOpen, setDropdownInnerRightIsOpen] = useState(false)
  const [dropdownInnerLeftIsOpen, setDropdownInnerLeftIsOpen] = useState(false)
  const [dropdownRightIsOpen, setDropdownRightIsOpen] = useState(false)
  const [dropdownTopIsOpen, setDropdownTopIsOpen] = useState(false)
  const [dropdownLeftIsOpen, setDropdownLeftIsOpen] = useState(false)

  // Navbar States
  const [navbarPrimaryIsOpen, setNavbarPrimaryIsOpen] = useState(false)
  const [navbarDropdown, setNavbarDropdown] = useState(false)

  const [navbarSecondaryIsOpen, setNavbarSecondaryIsOpen] = useState(false)

  return(
    <>
    <ThemeProvider themeOptions={themeOptions}>

    <div className="p-4">
      
      {/* === Buttons === */}

      <div className="my-4">
        <h2 className="text-xl text-gray-800">Buttons</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="neutral">Neutral</Button>
          <Button variant="boxed">Boxed</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="info">Info</Button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button variant="link">Link</Button>
          <Button variant="text">Text</Button>
          <Button variant="primary" disabled>Disabled</Button>
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
        <div className="mt-3 flex flex-wrap gap-2">
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

          <Dropdown.Wrapper isOpen={dropdownNestedIsOpen} setIsOpen={setDropdownNestedIsOpen} direction={"down"}>
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

        <div className="mt-3 flex flex-wrap gap-2">
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

          <Dropdown.Wrapper isOpen={dropdownTopIsOpen} setIsOpen={setDropdownTopIsOpen} direction="top">
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

          <Dropdown.Wrapper isOpen={dropdownLeftIsOpen} setIsOpen={setDropdownLeftIsOpen} direction="left">
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

      {/* === Navbars === */}

      <div className="my-8">
        <h2 className="text-xl text-gray-800">Navbar</h2>
        <div className="mt-3">
          <Navbar.Wrapper isOpen={navbarPrimaryIsOpen} setIsOpen={setNavbarPrimaryIsOpen}>
            <Navbar.Body>
              <Navbar.Brand>Shiva UI</Navbar.Brand>
              <Navbar.List>
                <Button variant="text" className="text-white !text-sm text-left">Home</Button>
                <Dropdown.Wrapper isOpen={navbarDropdown} setIsOpen={setNavbarDropdown}>
                  <Dropdown.Button variant="text" className="w-full text-white uppercase">
                    Dropdown Menu
                  </Dropdown.Button>
                  <Dropdown.List className="max-md:static max-md:w-[calc(100%-.5rem)] max-md:mx-auto max-md:shadow-none max-md:border-0 max-md:rounded-nonem">
                    <Dropdown.Item> Item One</Dropdown.Item>
                    <Dropdown.Item> Item Two</Dropdown.Item>
                    <Dropdown.Item> Item Three</Dropdown.Item>
                  </Dropdown.List>
                </Dropdown.Wrapper>
                <Button variant="text" className="text-white !text-sm text-left">Link</Button>
              </Navbar.List>
            </Navbar.Body>
          </Navbar.Wrapper>
        </div>

        <div className="mt-3">
          <Navbar.Wrapper isOpen={navbarSecondaryIsOpen} setIsOpen={setNavbarSecondaryIsOpen} variant="secondary">
            <Navbar.Body>
              <Navbar.Brand>Shiva UI</Navbar.Brand>
              <Navbar.List className="md:justify-between max-md:bg-white max-md:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center">
                  <Button variant="text" className="!text-base text-left md:text-white" onClick={() => setNavbarSecondaryIsOpen(false)}>Home</Button>
                  <Button variant="text" className="!text-base text-left md:text-white" onClick={() => setNavbarSecondaryIsOpen(false)}>Link</Button>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <Button variant="text" className="!text-base text-left md:text-white" onClick={() => setNavbarSecondaryIsOpen(false)}>Log out</Button>
                </div>
              </Navbar.List>
            </Navbar.Body>
          </Navbar.Wrapper>
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