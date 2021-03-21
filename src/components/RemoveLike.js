import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'

function RemoveLike() {
    return (
        <>
            <span><FontAwesomeIcon icon={faHeartBroken} /></span>
        </>
    )
}

export default RemoveLike
