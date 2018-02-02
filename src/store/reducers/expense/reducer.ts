import {createExpense, CreateExpenseData, deleteExpense, startFiltering, stopFiltering, updateExpense} from "./actions"
import {createReducer} from "redux-act"
import {FilterOptions} from "../../selectors/expenseSelectors"

export interface Expense {
    id: number
    description: string
    sum: number
    date: Date
}

export interface ExpenseState {
    counter: number,
    expenses: {
       [key: number]: Expense
    }
    isFiltering: boolean
    filter?: FilterOptions
}

const initialState: ExpenseState = {
    counter: 0,
    expenses: {},
    isFiltering: false
}

const createExpenseHandler = (state: ExpenseState, payload: CreateExpenseData): ExpenseState => {
    const counter = state.counter + 1

    return {
        ...state,
        counter,
        expenses: {
            ...state.expenses,
            [counter]: {
                id: counter,
                ...payload
            },
        }
    }
}

const updateExpenseHandler = (state: ExpenseState, payload: Expense): ExpenseState => ({
    ...state,
    expenses: {
        ...state.expenses,
        [payload.id]: {
            ...state.expenses[payload.id],
            ...payload
        }
    }
})

const deleteExpenseHandler = (state: ExpenseState, payload: number): ExpenseState => {
    const newState = {...state}
    delete newState.expenses[payload]

    return newState
}


export const expenseReducer = createReducer({
    [createExpense as any]: createExpenseHandler,
    [updateExpense as any]: updateExpenseHandler,
    [deleteExpense as any]: deleteExpenseHandler,
    [startFiltering as any]: (state, payload) => ({
        ...state,
        filter: {
            ...payload.filter
        },
        isFiltering: true
    }),
    [stopFiltering as any]: (state) => ({
        ...state,
        filter: {
            ...initialState.filter
        },
        isFiltering: false
    })
}, initialState)