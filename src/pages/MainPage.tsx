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
import {Icon} from "../atoms/icon/Icon"
import moment from "moment"

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

    transformExpensesToArray = () => {
        return this.props.expenses.map(item => [
            item.id.toString(),
            moment(item.date).format("DD/MM/YYYY"),
            item.sum.toString(),
            item.description,
            <>
                <a onClick={() => this.edit(item.id)} className="mr-2"><Icon type="pencil"/></a>
                <a onClick={() => this.remove(item.id)}><Icon type="x" /></a>
            </>
        ]).reverse()
    }

    getSum = () => this.props.expenses.reduce((prevSum, nowSum) => prevSum + nowSum.sum, 0)

    render() {
        const tableData = this.transformExpensesToArray()
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className={pageLayout}>
                        <div className="row">
                            <Filter
                                onAccept={this.onFilter}
                                onReset={this.onFilterReset}
                                createExpense={this.createExpense}
                                sum={this.getSum()}
                            />
                        </div>
                        <div className="row">
                            <ExpensesTable
                                keyIndex={0}
                                expenses={tableData}
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