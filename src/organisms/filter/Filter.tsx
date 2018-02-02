import * as React from "React"
import {RangeDatePicker} from "../../molecules/range-datepicker/RangeDatePicker"
import {Select} from "../../atoms/select/Select"
import {RangeNumberInput} from "../RangeNumberInput"
import {FilterOptions} from "../../store/selectors/expenseSelectors"

interface Props {
    onAccept: (options: FilterOptions) => void
    onReset: () => void
    createExpense: () => void
}

interface State {
    type: "date" | "sum"
    dates: {
        startDate: Date
        endDate: Date
    }
    sums: {
        startSum: number
        endSum: number
    }
}

const initialValue: State = {
    type: "date",
    dates: {
        startDate: new Date(),
        endDate: new Date()
    },
    sums: {
        startSum: 0,
        endSum: 0
    }
}

export class Filter extends React.Component<Props, State> {
    state = {...initialValue}

    onAccept = () => {
        this.props.onAccept(this.state)
    }

    onChange = (name, value) => {
        this.setState({[name]: value})
    }

    onReset = () => {
        this.setState({...initialValue})
        this.props.onReset()
    }

    render() {
        return (
            <div className="card bg-light w-100">
                <div className="card-header">Управление</div>
                <div className="card-body">
                    <h5 className="card-title">Фильтрация и сортировка</h5>
                    <form>
                        <div className="form-group">
                            <label htmlFor="filter-field">Фильтровать по полю</label>
                            <Select
                                id="filter-field"
                                name="type"
                                selected={this.state.type}
                                onChange={this.onChange}
                            >
                                <option value="date">Дата</option>
                                <option value="sum">Сумма</option>
                            </Select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Диапазон</label>
                            {
                                this.state.type === "date"
                                ? <RangeDatePicker
                                    name="dates"
                                    onChange={this.onChange}
                                    values={this.state.dates}
                                />
                                : <RangeNumberInput
                                    name="sums"
                                    onChange={this.onChange}
                                    values={this.state.sums}
                                />
                            }
                        </div>
                        <div className="form-row">
                            <div className="btn-group" role="group">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary"
                                    onClick={this.onAccept}
                                >
                                    Подтвердить
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-warning"
                                    onClick={this.onReset}
                                >
                                    Сбросить
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <h5 className="card-title">Данные</h5>
                    <button type="button" onClick={this.props.createExpense} className="btn btn-outline-success">Добавить</button>
                </div>
            </div>
        )
    }
}