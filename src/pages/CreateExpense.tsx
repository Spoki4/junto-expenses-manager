import * as React from "react"
import {connect} from "react-redux"
import {createExpense, CreateExpenseData} from "../store/reducers/expense/actions"
import {ExpenseForm} from "../organisms/expense-form/ExpenseForm"
import {RouteComponentProps} from "react-router"
import {FormTemplate} from "../templates/FormTemplate"

type Props = Actions & RouteComponentProps<{}>

class CreateExpenseComponent extends React.Component<Props> {

    onSave = (expense: CreateExpenseData) => {
        this.props.createExpense(expense)
        this.props.history.push("/")
    }

    onBack = () => {
        this.props.history.push("/")
    }

    render() {
        return (
            <FormTemplate
                title="Добавление записи"
                form={
                    <ExpenseForm
                        onSave={this.onSave}
                    />
                }
                onBack={this.onBack}
            />
        )
    }
}

interface Actions {
    createExpense: typeof createExpense
}

export const CreateExpensePage = connect<{}, Actions>(null, {
    createExpense
})(CreateExpenseComponent)