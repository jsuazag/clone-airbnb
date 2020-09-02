import React from 'react'
import { Topbar } from './components/Topbar'
import { Title } from './components/Title'

export const HomePage = () => (
    <section>
        <Topbar />
        <Title label="Top 5" />
        <Title label="Lista" />
    </section>
)