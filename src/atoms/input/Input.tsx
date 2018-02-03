import * as React from "react"

interface Props {
    type: "text" | "number"
    value?: string | number
    onChange?: (name, value) => void
    name?: string
    placeHolder?: string
}

export class Input extends React.Component<Props> {
    onChange = (e) => {
        this.props.onChange(this.props.name, e.target.value)
    }

    render() {
        return (
            <input
                {...this.props}
                className="form-control"
                type={this.props.type}
                onChange={this.onChange}
                name={this.props.name}
                value={this.props.value && this.props.value.toString()}
            />
        )
    }
}