import React, { Fragment } from 'react'
import { Topbar } from './../components/Topbar'

export const FramePage = ({ children }) => (
    <Fragment>
        <Topbar />
        <section className="page">
            { children }
        </section>
    </Fragment>
)