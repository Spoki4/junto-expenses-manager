import * as React from "react"
import DP from "react-datepicker"
import moment from "moment"

import "react-datepicker/dist/react-datepicker.css"

interface Props {
    name?: string
    onChange: (name: string, value: Date) => void
    value?: Date
    selectsStart?: boolean,
    selectsEnd?: boolean
    startDate?: Date
    endDate?: Date
    id?: string
}

export class DatePicker extends React.Component<Props> {
    onDateChanged = (value: moment.Moment) => {
        this.props.onChange(this.props.name, value.toDate())
    }

    getValue = () => {
        const {value, selectsStart, selectsEnd, startDate, endDate} = this.props

        if (selectsStart)
            return moment(startDate)

        if (selectsEnd)
            return moment(endDate)

        return moment(value)
    }

    render() {
        const {value, selectsStart, selectsEnd, startDate, endDate} = this.props

        const props = {
            onChange: this.onDateChanged,
            selected: this.getValue(),
            selectsStart: selectsStart,
            selectsEnd: selectsEnd,
            startDate: startDate && moment(startDate),
            endDate: endDate && moment(endDate),
            id: this.props.id,
            popperPlacement: "top-end",
            popperModifiers: {
                preventOverflow: {
                    enabled: true,
                    boundariesElement: 'viewport'
                }
            }
        }

        return (
            <DP {...props}/>
        )
    }
}