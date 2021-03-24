import React from 'react'

export default function Heading(props) {
    return (
        <div className="flex items-center p-6">
            <h1 className="text-blue-600 font-Comfortaa">{props.heading}</h1>
        </div>
    )
}
