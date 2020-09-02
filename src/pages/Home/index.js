import React from 'react'
import { Topbar } from './components/Topbar'
import { Title } from './components/Title'
import { Ranking } from './components/Ranking'

export const HomePage = () => (
    <section>
        <Topbar />
        <Title label="Top 5" />
        <Ranking />
        <Title label="Lista" />
    </section>
)