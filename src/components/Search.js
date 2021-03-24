import React from 'react'


function Search(props) {
    return (
        <div className="flex flex-col gap-5">
            <div className="">
                <h2 className="font-Comfortaa text-blue-600 md:text-lg text-sm">Find Millions of Movies Just With One Search</h2>
            </div>
            <div className="justify-center flex">
                <input className="rounded-xl border-2 px-12 py-2 flex border-blue-600" value={props.value} onChange={(event)=>props.setSearchValue(event.target.value)} placeholder="Search Movie Here..."></input>
            </div>
        </div>
    )
}

export default Search;