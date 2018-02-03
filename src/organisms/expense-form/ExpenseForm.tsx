import * as React from "react"
import {CreateExpenseData} from "../../store/reducers/expense/actions"
import {DatePicker} from "../../atoms/datepicker/DatePicker"
import {Expense} from "../../store/reducers/expense/reducer"
import {Input} from "../../atoms/input/Input"

interface Props {
    onSave: (data: CreateExpenseData) => void
    data?: Partial<Expense>
}

interface State {
    id?: number
    date: Date
    description: string
    sum: string
}

const initialState: State = {
    date: new Date(),
    description: "",
    sum: "0"
}

export class ExpenseForm extends React.Component<Props, State> {
    state = {...initialState}
    componentWillMount() {
        if (this.props.data)
            return this.setState({...this.props.data} as any)
    }

    onChange = (name, value) => {
        this.setState({[name]: value})
    }

    onSave = () => {
        const data = {...this.state, sum: parseInt(this.state.sum, 10) || 0}
        this.props.onSave(data)
    }

    render() {
        return (
            <form>
                <div className="row form-group">
                    <label htmlFor="date" className="col-form-label col-5">Дата:</label>
                    <div className="col-7">
                        <DatePicker id="date" name="date" value={this.state.date} onChange={this.onChange}/>
                    </div>
                </div>
                <div className="row form-group">

                    <label htmlFor="date" className="col-form-label col-5">Сумма:</label>
                    <div className="col-7">
                        <Input type="number" name="sum" value={this.state.sum} onChange={this.onChange}/>
                    </div>
                </div>
                <div className="row form-group">
                    <label htmlFor="description" className="col-form-label col-5">Описание:</label>
                    <div className="col-7">
                        <Input type="text" name="description" value={this.state.description} onChange={this.onChange}/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-7">
                        <button type="button" className="btn btn-outline-success" onClick={this.onSave}>Сохранить</button>
                    </div>
                </div>
            </form>
        )
    }
}