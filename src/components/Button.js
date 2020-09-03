import React from 'react'

export const Button = ({ label = 'Botón', type = 'button', style = {} }) => (
    <button className="button" style={ style } type={ type }>{ label }</button>
)