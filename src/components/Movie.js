import React from 'react'
import Bookmark from './Bookmark'
import Likes from './Likes'

const Movie = (props) => {
    
    
    return (
        <div className="">
            <div className="relative flex lg:flex-nowrap lg:flex-row  overflow-x-auto  gap-1  mt-2 w-full h-full hover:bg-opacity-100 " >
                {props.movies.map((movie)=> (
                <>
                <div className="flex hover:scale-105 cursor-pointer transform translate-x-1 translate-y-1 duration-200">
                    <img className="hover:scale-105 cursor-pointer transform translate-x-1 translate-y-1 duration-200  transition-all" src={movie.Poster} alt="image"></img>
                    <div  className="flex w-full gap-x-12 items-center justify-center absolute bottom-0 bg-black ">
                        <div className=""><Likes movies={movie} handleLikeClick={props.handleLikeClick} /></div>
                        <div className=""><Bookmark movies={movie} handleBookmarkClick={props.handleBookmarkClick}/></div>
                    </div>
                    
                </div>
                </>)
                )}  
                
            </div>  
            
        </div>
    )
}

export default Movie;
