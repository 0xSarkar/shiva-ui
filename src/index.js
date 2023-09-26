import React from "react"
import {createRoot} from "react-dom/client"

import "./main.css"
import App from "./App"

let rootElem = document.getElementById('app')
const root = createRoot(rootElem)

root.render(<App />)