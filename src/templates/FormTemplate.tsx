import {pageLayout} from "../utils/responsive"
import * as React from "react"

interface Props {
    title: string
    form: React.ReactNode
    onBack: () => void
}

export const FormTemplate = ({title, form, onBack}: Props) => (
    <div className="container-fluid">
        <div className="row">
            <div className={pageLayout}>
                <div className="row">
                    <div className="card w-100">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-4 col-sm-3">
                                    <button
                                        type="button"
                                        className="btn btn-secondary float-left"
                                        onClick={onBack}
                                    >
                                        Назад
                                    </button>
                                </div>
                                <div className="col-8 col-sm-9 pt-2 text-center w-100">
                                    <span>{title}</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            {form}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)