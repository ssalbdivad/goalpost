import React from "react"
import { render } from "react-dom"
import { Text } from "@re-do/components"

render(
    <React.StrictMode>
        <Text>Hello from Redo!</Text>
    </React.StrictMode>,
    document.getElementById("root")
)
