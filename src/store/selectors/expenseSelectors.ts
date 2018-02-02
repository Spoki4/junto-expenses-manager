import {AppState} from "../reducers"
import {Expense} from "../reducers/expense/reducer"

export const getAllExpenses = (state: AppState): Expense[] => {
    const arr = []
    Object.keys(state.expenses.expenses).map(key=>state.expenses.expenses[key]).map(x => arr.push(x))
    return arr
}

export interface FilterOptions {
    type: "date" | "sum",
    dates: {
        startDate: Date
        endDate: Date
    }
    sums: {
        startSum: number
        endSum: number
    }
}

export const getFilteredExpenses = (state: AppState) => {
    const filter = state.expenses.filter

    const startDate = filter.dates.startDate.getTime()
    const endDate = filter.dates.endDate.getTime()

    return getAllExpenses(state)
        .filter((item) => {
            if(
                filter.type === "date" &&
                (startDate <= item.date.getTime() && item.date.getTime() <= endDate)
            )
                return true
            else if (
                filter.type === "sum" &&
                (filter.sums.startSum <= item.sum && item.sum <= filter.sums.endSum)
            )
                return true

            return false
        })
}