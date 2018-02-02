import * as React from "react"
import {connect} from "react-redux"
import {createExpense, deleteExpense, startFiltering, stopFiltering} from "../store/reducers/expense/actions"
import {AppState} from "../store/reducers"
import {Expense} from "../store/reducers/expense/reducer"
import {pageLayout} from "../utils/responsive"
import {Filter} from "../organisms/filter/Filter"
import {ExpensesTable} from "../organisms/expenses-table/Table"
import {FilterOptions, getAllExpenses, getFilteredExpenses} from "../store/selectors/expenseSelectors"
import {RouteComponentProps} from "react-router"

type Props = Store & Actions & RouteComponentProps<{}>

class MainPageComponent extends React.Component<Props> {

    onFilter = (filter: FilterOptions) => {
        this.setState({
            filter: {
                ...filter,
            }
        })
        this.props.startFiltering({...filter})
    }

    onFilterReset = () => {
        this.props.stopFiltering()
    }

    createExpense = () => {
        this.props.history.push("/add")
    }

    edit = (id: number) => {
        this.props.history.push("/edit/" + id)
    }

    remove = (id: number) => {
        this.props.deleteExpense(id)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className={pageLayout}>
                        <div className="row">
                            <Filter
                                onAccept={this.onFilter}
                                onReset={this.onFilterReset}
                                createExpense={this.createExpense}
                            />
                        </div>
                        <div className="row">
                            <ExpensesTable
                                edit={this.edit}
                                remove={this.remove}
                                expenses={this.props.expenses}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

interface Store {
    expenses: Expense[]
}

interface Actions {
    createExpense: typeof createExpense
    deleteExpense: typeof deleteExpense
    startFiltering: typeof startFiltering
    stopFiltering: typeof stopFiltering
}

export const MainPage = connect<Store, Actions>((state: AppState) => {
    let expenses = state.expenses.isFiltering ? getFilteredExpenses(state) : getAllExpenses(state)

    return ({
        expenses
    })
}, {
    createExpense,
    deleteExpense,
    startFiltering,
    stopFiltering
})(MainPageComponent)