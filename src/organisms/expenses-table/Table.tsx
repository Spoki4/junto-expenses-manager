import * as React from "react"
import {Expense} from "../../store/reducers/expense/reducer"
import {Row} from "./Row"

interface Props {
    expenses: Expense[]
    edit: (id: number) => void
    remove: (id: number) => void
}

export class ExpensesTable extends React.Component<Props> {
    render() {
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Дата</th>
                            <th>Сумма</th>
                            <th>Описание</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.expenses.map(item => (
                            <Row
                                edit={this.props.edit}
                                remove={this.props.remove}
                                key={item.id}
                                expense={item}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}