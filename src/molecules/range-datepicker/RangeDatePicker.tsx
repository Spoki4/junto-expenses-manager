import * as React from "react"
import {DatePicker} from "../../atoms/datepicker/DatePicker"

interface Values {
    startDate?: Date
    endDate?: Date
}

interface Props {
    name: string
    onChange: (name: string, dates: Values) => void
    values: Values
}

export class RangeDatePicker extends React.Component<Props> {

    onDateChange = (name: string, date: Date) => {
        this.props.onChange(this.props.name, {
            ...this.props.values,
            [name]: date
        })
    }

    render() {
        const {values} = this.props

        return (
            <div className="form-group">
                <DatePicker
                    name="startDate"
                    selectsStart
                    onChange={this.onDateChange}
                    startDate={values.startDate}
                    endDate={values.endDate}
                />
                <div className="w-100 text-center"><span>-</span></div>
                <DatePicker
                    name="endDate"
                    selectsEnd
                    onChange={this.onDateChange}
                    startDate={values.startDate}
                    endDate={values.endDate}
                />
            </div>
        )
    }
}