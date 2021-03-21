import React from 'react'


function Search(props) {
    return (
        <div>
            <input className="rounded-md border-2 flex px-2" value={props.value} onChange={(event)=>props.setSearchValue(event.target.value)} placeholder="Search Movie Here..."></input>
        </div>
    )
}

export default Search;