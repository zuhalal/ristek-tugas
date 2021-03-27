import React from 'react'

export default function Detail(props) {
    return (
        <div className="md:w-5/6 w-full flex">
            <div className="md:w-1/12 w-1/3 justify-start flex">
                <p className="text-justify">{props.information}:  </p>
            </div>
            <div className="md:w-11/12 w-2/3 justify-start flex">
                <p className="text-justify">{props.show}</p>
            </div>
        </div>
    )
}
