import React from 'react'
import { Link } from 'react-router-dom'

export const Button = (
    { 
        label = 'Botón',
        type = 'button',
        isLink = false,
        linkTo = '/',
        style = {},
        disabled = false
    }
) => (
    isLink 
    ? <Link to={linkTo}>
        <button disabled={disabled} className="button" style={ style } type="button">{ label }</button>
    </Link>
    : <button disabled={disabled} className="button" style={ style } type={ type }>{ label }</button>
)