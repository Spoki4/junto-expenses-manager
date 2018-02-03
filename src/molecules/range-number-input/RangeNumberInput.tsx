import * as React from "react"
import {Input} from "../../atoms/input/Input"

interface Props {
    name: string
    values: {
        startSum: number
        endSum: number
    }
    onChange: (name: string, values) => void
}

export class RangeNumberInput extends React.Component<Props> {

    onChange = (name: string, value: string) => {
        this.props.onChange(this.props.name, {
            ...this.props.values,
            [name]: parseInt(value, 10)
        })
    }

    render() {
        return (
            <div className="form-group">
                <Input
                    type="number"
                    value={this.props.values.startSum}
                    onChange={this.onChange}
                    name="startSum"
                />
                <div className="w-100 text-center"><span>-</span></div>
                <Input
                    type="number"
                    value={this.props.values.endSum}
                    onChange={this.onChange}
                    name="endSum"
                />
            </div>
        )
    }
}