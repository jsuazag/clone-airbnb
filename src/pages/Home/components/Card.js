import React from 'react'

export const Card = (props) => (
    <article>
        <h2>{ props.description }</h2>
        <h6>{ props.place }</h6>
    </article>
)