import React from 'react'

export const Card = (props) => (
    <article 
        style={{ backgroundImage: `url(${props.image})` }}>

        <h2>{ props.description }</h2>
        <h6>{ props.place }</h6>
    </article>
)