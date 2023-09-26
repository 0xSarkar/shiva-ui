import React from "react"
import {createRoot} from "react-dom/client"

import "./main.css"

let rootElem = document.getElementById('app')
const root = createRoot(rootElem)

root.render(<h2 className="text-2xl">Wallah!</h2>)