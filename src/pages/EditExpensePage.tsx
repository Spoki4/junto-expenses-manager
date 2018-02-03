import * as React from "react"
import {connect} from "react-redux"
import {updateExpense} from "../store/reducers/expense/actions"
import {ExpenseForm} from "../organisms/expense-form/ExpenseForm"
import {RouteComponentProps} from "react-router"
import {AppState} from "../store/reducers"
import {Expense} from "../store/reducers/expense/reducer"
import {FormTemplate} from "../templates/FormTemplate"

interface ComponentProps extends RouteComponentProps<{ id: string }> {

}

type Props = Storage & Actions & ComponentProps

class EditExpenseComponent extends React.Component<Props> {

    onSave = (expense: Expense) => {
        this.props.updateExpense(expense)
        this.goBack()
    }

    goBack = () => this.props.history.push("/")

    render() {
        return (
            <FormTemplate
                title="Редактирование записи"
                form={
                    <ExpenseForm
                        onSave={this.onSave}
                        data={this.props.expense}
                    />
                }
                onBack={this.goBack}
            />
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