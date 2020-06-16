import React from "react"
import "typeface-ubuntu"
import { Text, AppBar, DefaultTheme } from "@re-do/components"

export type AppProps = {}

export const App = ({}: AppProps) => {
    return (
        <DefaultTheme>
            <AppBar>
                <Text variant="h4">goalpost</Text>
            </AppBar>
        </DefaultTheme>
    )
}
