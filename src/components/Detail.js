import React from 'react'

export default function Detail(props) {
    return (
        <div>
            {props.movies.map((movie)=> (
                <>
                <div className="">
                    <h1>{movie.Actors}</h1>
                </div>
                </>)
                )}  
        </div>
    )
}
