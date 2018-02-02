import {combineReducers} from "redux"
import {expenseReducer, ExpenseState} from "./expense/reducer"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/es/storage"

export type AppState = {
    expenses: ExpenseState
}

const reducers = {
    expenses: expenseReducer
}

const persistConfig = {
    key: "root",
    storage: storage
}


export const rootReducer = persistReducer(persistConfig, combineReducers(reducers))