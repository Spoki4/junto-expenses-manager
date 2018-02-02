import * as React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {MainPage} from "./pages/MainPage"
import {Provider} from "react-redux"
import {configureStore} from "./store/configureStore"
import {CreateExpensePage} from "./pages/CreateExpense"
import {EditExpensePage} from "./pages/EditExpensePage"
import {PersistGate} from "redux-persist/es/integration/react"
import {persistStore} from "redux-persist"

const store = configureStore()

const persistor = persistStore(store)

export const Application = () => (
    <Provider store={store}>
        <PersistGate loading={false} persistor={persistor}>
            <BrowserRouter>
                <Switch>
                    <Route path="/add" component={CreateExpensePage}/>
                    <Route path="/edit/:id" component={EditExpensePage}/>
                    <Route path="/" component={MainPage}/>
                </Switch>
            </BrowserRouter>
        </PersistGate>
    </Provider>
)
