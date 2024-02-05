import React from 'react'

function ActorCard({actor}) {
    const {id, name, movies} = actor
    return(
        <article>
            <h2>{name}</h2>
            <ul>
                {movies.map((movie) => {
                    return <li key={movie}>{movie}</li>
                })}
            </ul>
        </article>
    )
}

export default ActorCard