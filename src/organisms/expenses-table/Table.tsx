import * as React from "react"
import {Row} from "./Row"

interface Props {
    expenses: any[][]
    keyIndex: number
}

const header = ["Номер", "Дата", "Сумма", "Описание", "Действия"]

export const ExpensesTable = (props: Props) => (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            {header.map((item, index) => <th key={index}>{item}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {props.expenses.map(item => (
                            <Row
                                header={header}
                                key={item[props.keyIndex]}
                                data={item}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        )