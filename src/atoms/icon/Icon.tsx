import * as octicons from "react-component-octicons"
import Octicon from "react-component-octicons"
import * as React from "react"

interface Props {
    type: octicons.OcticonSymbol
}

export const Icon = ({type}: Props) => <Octicon zoom="x1.5" name={type}/>
