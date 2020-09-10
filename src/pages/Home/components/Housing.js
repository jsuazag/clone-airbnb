import React from 'react'

export const Housing = (
    { id, score, users, description, image, place }
) => (
    <section className="housing">
        <img src={image} />
        <div>
            <h3>{ description }</h3>
            <h6>{ place }</h6>
            <i class="material-icons">face</i>
        </div>
    </section>
)