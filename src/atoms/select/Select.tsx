import * as React from "react"

interface Props {
    id?: string
    name: string
    selected: string
    onChange: (name: string, value: string) => void
}

export class Select extends React.Component<Props> {
    onChange = (e) => {
        this.props.onChange(this.props.name, e.target.value)
    }

    render() {
        return (
            <select
                id={this.props.id}
                name={this.props.name}
                className="form-control"
                onChange={this.onChange}
                value={this.props.selected}
            >
                {this.props.children}
            </select>
        )
    }
}