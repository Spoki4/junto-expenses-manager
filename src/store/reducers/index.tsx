import {combineReducers} from "redux"
import {expenseReducer, ExpenseState} from "./expense/reducer"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/es/storage"
import {PersistConfig} from "redux-persist/es/types"

export type AppState = {
    expenses: ExpenseState
}

const reducers = {
    expenses: expenseReducer
}

const persistConfig: PersistConfig = {
    key: "root",
    blacklist: ["expenses.filter", "expenses.isFiltering"],
    storage: storage
}


export const rootReducer = persistReducer(persistConfig, combineReducers(reducers))