import * as React from "react"
import {Select} from "../../atoms/select/Select"
import {RangeDatePicker} from "../../molecules/range-datepicker/RangeDatePicker"
import {RangeNumberInput} from "../../molecules/range-number-input/RangeNumberInput"
import {FilterOptions} from "../../store/selectors/expenseSelectors"

interface Props {
    onAccept: (options: FilterOptions) => void
    onReset: () => void
}
interface State extends FilterOptions {}

const initialState: State = {
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


export class FilterForm extends React.Component<Props, State> {
    state = {...initialState}

    onChange = (name, value) => this.setState({[name]: value})
    onAccept = () => this.props.onAccept(this.state)
    onReset = () => {
        this.setState({...initialState})
        this.props.onReset()
    }

    render() {
        return (
            <form>
                <div className="d-sm-flex justify-content-around">
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
        )
    }
}