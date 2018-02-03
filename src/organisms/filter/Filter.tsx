import * as React from "React"
import {FilterOptions} from "../../store/selectors/expenseSelectors"
import {FilterForm} from "../filter-form/FilterForm"

interface Props {
    onAccept: (options: FilterOptions) => void
    onReset: () => void
    createExpense: () => void
    sum: number
}

export const Filter = (props: Props) => (
    <div className="card bg-light w-100">
        <div className="card-header">Управление</div>
        <div className="card-body">
            <h5 className="card-title">Фильтрация и сортировка</h5>
            <FilterForm
                onAccept={props.onAccept}
                onReset={props.onReset}
            />
        </div>
        <div className="card-footer">
            <h5 className="card-title">Статистика и действия</h5>
            <div>
                Общая сумма: {props.sum}
            </div>
            <button
                type="button"
                onClick={props.createExpense}
                className="btn btn-outline-success"
            >
                Добавить
            </button>
        </div>
    </div>
)