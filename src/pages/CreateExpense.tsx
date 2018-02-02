import * as React from "react"
import {connect} from "react-redux"
import {createExpense, CreateExpenseData} from "../store/reducers/expense/actions"
import {pageLayout} from "../utils/responsive"
import {ExpenseForm} from "../organisms/expense-form/ExpenseForm"
import {RouteComponentProps} from "react-router"

type Props = Actions & RouteComponentProps<{}>

class CreateExpenseComponent extends React.Component<Props> {

    onSave = (expense: CreateExpenseData) => {
        this.props.createExpense(expense)
        this.props.history.push("/")
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className={pageLayout}>
                        <div className="row">
                            <div className="card w-100">
                                <div className="card-header">Создать запись</div>
                                <div className="card-body">
                                    <ExpenseForm
                                        onSave={this.onSave}
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

interface Actions {
    createExpense: typeof createExpense
}

export const CreateExpensePage = connect<{}, Actions>(null, {
    createExpense
})(CreateExpenseComponent)