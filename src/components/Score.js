import React from 'react'

const StarFill = () => (
    <i className="material-icons">star</i>
)

const StarOutline = () => (
    <i className="material-icons">star_outline</i>
)

export const Score = ({ score = 0, users = 0 }) => (
    <section className="score">
        <div>
            {
                [1,2,3,4,5].map(el => el <= score ? <StarFill /> : <StarOutline /> )
            }
        </div>
        <p>{ users }</p>
    </section>
)