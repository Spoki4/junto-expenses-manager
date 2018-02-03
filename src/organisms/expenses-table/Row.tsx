import * as React from "react"

import "./row.css"

interface Props {
    data: string[]
    header: string[]
}

export const Row = ({header, data}: Props) => (
    <tr>
        {data.map((item, index) => <td key={index} data-label={header[index]}>{item}</td>)}
    </tr>
)