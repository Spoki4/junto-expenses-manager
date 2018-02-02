import {Expense} from "./reducer"
import {createAction} from "redux-act"
import {FilterOptions} from "../../selectors/expenseSelectors"

export type ActionsType = CreateExpenseData | Expense | number

export interface CreateExpenseData {
    description: string
    sum: number
    date: Date
}

export const createExpense = createAction("CREATE_EXPENSE", (data: CreateExpenseData) => data)
export const updateExpense = createAction("UPDATE_EXPENSE", (data: Expense) => data)
export const deleteExpense = createAction("DELETE_EXPENSE", (id: number) => id)
export const startFiltering = createAction("START_FILTERING_EXPENSE", (filter: FilterOptions) => ({filter}))
export const stopFiltering = createAction("STOP_FILTERING_EXPENSE")