import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Likes = (props) => {
    return (
        <>  
            <h3 className="text-white" onClick={() => props.handleLikeClick(props.movies)}><FontAwesomeIcon icon={faHeart} /></h3>
        </>
    )
}

export default Likes;
