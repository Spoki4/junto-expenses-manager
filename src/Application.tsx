import * as React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {MainPage} from "./pages/MainPage"

export const Application = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={MainPage}/>
        </Switch>
    </BrowserRouter>
)