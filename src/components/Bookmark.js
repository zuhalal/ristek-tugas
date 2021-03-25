import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

export default function Favourites(props) {
    return (
        <>  
            <h3 className="text-white" onClick={() => props.handleBookmarkClick(props.movies)}><FontAwesomeIcon icon={faBookmark} /></h3>
        </>
    )
}
