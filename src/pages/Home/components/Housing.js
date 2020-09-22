import React from 'react'
import { Score } from '../../../components/Score'

export const Housing = (
    { id, score, users, description, image, place }
) => (
    <section className="housing">
        <img alt="experience" src={image} />
        <div>
            <h3>{ description }</h3>
            <h6>{ place }</h6>
            <Score score={score} users={users} />
        </div>
    </section>
)