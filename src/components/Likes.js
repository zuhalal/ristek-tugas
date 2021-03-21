import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Likes = (props) => {
    return (
        <>  
            <a className="text-white" onClick={() => props.handleLikeClick(props.movies)}><FontAwesomeIcon icon={faHeart} /></a>
        </>
    )
}

export default Likes;
