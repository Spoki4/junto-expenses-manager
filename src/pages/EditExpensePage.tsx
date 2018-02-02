import * as React from "react"
import {connect} from "react-redux"
import {updateExpense} from "../store/reducers/expense/actions"
import {pageLayout} from "../utils/responsive"
import {ExpenseForm} from "../organisms/expense-form/ExpenseForm"
import {RouteComponentProps} from "react-router"
import {AppState} from "../store/reducers"
import {Expense} from "../store/reducers/expense/reducer"

interface ComponentProps extends RouteComponentProps<{id: string}> {

}

type Props = Storage & Actions & ComponentProps

class EditExpenseComponent extends React.Component<Props> {

    onSave = (expense: Expense) => {
        this.props.updateExpense(expense)
        this.props.history.push("/")
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className={pageLayout}>
                        <div className="row">
                            <div className="card w-100">
                                <div className="card-header">Редактировать запись</div>
                                <div className="card-body">
                                    <ExpenseForm
                                        onSave={this.onSave}
                                        data={this.props.expense}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

interface Storage {
    expense: Expense
}

interface Actions {
    updateExpense: typeof updateExpense
}

export const EditExpensePage = connect<Storage, Actions, ComponentProps>(
    (state: AppState, ownProps: ComponentProps) => ({
        expense: state.expenses.expenses[ownProps.match.params.id]
    }), {
        updateExpense
    }
)(EditExpenseComponent)