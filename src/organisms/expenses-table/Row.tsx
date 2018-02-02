import {Expense} from "../../store/reducers/expense/reducer"
import * as React from "react"
import moment from "moment"

interface Props {
    expense: Expense
    remove: (id: number) => void
    edit: (id: number) => void
}

export const Row = ({expense, remove, edit}: Props) => (
    <tr>
        <td>{moment(expense.date).format("MM/DD/YYYY")}</td>
        <td>{expense.sum}</td>
        <td>{expense.description}</td>
        <td>
            <a onClick={() => edit(expense.id)}>Редактировать</a>
            <a onClick={() => remove(expense.id)}>Удалить</a>
        </td>
    </tr>
)