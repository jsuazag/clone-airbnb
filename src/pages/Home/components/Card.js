import React from 'react'
import { Link } from 'react-router-dom'

export const Card = (props) => (
    <Link to={ `/detail/${props.id}` }>
        <article 
            style={{ backgroundImage: `url(${props.image})` }}>
            <h2>{ props.description }</h2>
            <h6>{ props.place }</h6>
        </article>
    </Link>
)