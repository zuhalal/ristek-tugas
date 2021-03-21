import React from 'react'

export default function MovieHead(props) {
    return (
        <div className="flex items-center">
            <h1 className="text-purple-500">{props.heading}</h1>
        </div>
    )
}
