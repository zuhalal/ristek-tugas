import React from 'react'
import Bookmark from './Bookmark'
import Likes from './Likes'
import {Link} from "react-router-dom";


const Movie = (props) => {

    
    function titleChecker(movies) {
        if (movies.Title.length > 15) {
            return movies.Title.slice(0,14) + "..."
        } else {
            return movies.Title
            }
        
    }

    return (
        <div className="w-full  rounded-lg ">
            <div className="shadow-md md:w-3/4 md:mb-5 md:ml-5 mx-5 mb-2 md:mx-0 md:p-10 py-10 md:py-5 items-center justify-start  relative  flex lg:flex-nowrap lg:flex-row  overflow-x-auto  gap-3  mt-2 h-full hover:bg-opacity-100 " >
                {props.movies.map((movie)=> (
                <>
                {(movie.Type === "movie" || movie.Type ==="series") ?
                <div className=" flex flex-col">
                    <div className="flex hover:scale-105 w-36 md:mb-0 mb-5 cursor-pointer transform translate-x-1 translate-y-1 duration-200">
                        <Link to={{
                        pathname: "/detail",
                        state: { imdbID: movie.imdbID }}}><img width={200} id="btn" className="hover:scale-105 cursor-pointer transform translate-x-1 translate-y-1 duration-200  transition-all" src={movie.Poster} alt="poster" ></img></Link>
                        <div className="flex w-full gap-x-12 items-center justify-center absolute bottom-0 bg-black cursor-pointer transform translate-x-1 translate-y-1 duration-200 ">
                            <div className=""><Likes movies={movie} handleLikeClick={props.handleLikeClick} /></div>
                            <div className=""><Bookmark movies={movie} handleBookmarkClick={props.handleBookmarkClick}/></div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <h2 className="text-center">{(movie) ? titleChecker(movie):"loading..."}</h2>
                    </div>
                </div>
                : ''
                }
                </>)
                )}  
                
            </div>  
        </div>
    )
}

export default Movie;
