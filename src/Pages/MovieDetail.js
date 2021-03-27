
import React from 'react'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Detail from '../components/Detail';
import Footer from '../components/Footer';

function MovieDetail(props) {

    let imdbid = "";

    const [movies,  setMovies] = useState()


    const getMovieDetail = async (imdbid) => {

        const url = `http://www.omdbapi.com/?i=${imdbid}&apikey=64fee452`

        const response = await fetch(url);
        const responseJson = await response.json();
        
        if (responseJson) {
            setMovies(responseJson);
        } 
        
    }

    if (props.location.state) {
        imdbid = props.location.state.imdbID;
    }
    
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        getMovieDetail(imdbid)}, [])

    return (
        <>
            <div className="flex gap-2 flex-col p-2">
                <div className="flex items-start md:px-20 px-2">
                    <Link to="/"><button className="border-blue-500 rounded-md p-1 text-white px-2  bg-blue-500">Back</button></Link>
                </div>
                <div className="shadow-md">
                    <div className="flex flex-col items-start md:px-20">
                    {(movies) ? 
                        <div className="w-full flex flex-col">
                            <div className="flex justify-center">
                                <h1 className="text-lg font-Comfortaa">{movies.Title} ({movies.Year})</h1>
                            </div>
                            <div className="img-poster flex justify-center">
                                <img width={200} src={movies.Poster} alt="Movie Poster"></img>
                            </div>
                            <div className="w-full flex justify-center gap-1">
                                <div className="md:flex hidden"><p>IMDB Link:</p></div>
                                <div className=""><a href={`https://www.imdb.com/title/${imdbid}`} className="text-purple-500" target="_blank" rel="noreferrer">{`https://www.imdb.com/title/${imdbid}`}</a></div>
                            </div>
                            <div className="items-start flex flex-col w-full gap-1 mb-5 p-5 md:p-0">
                                <Detail information={"Title"} show={movies.Title} />
                                <Detail information={"Year"} show={movies.Year} />
                                <Detail information={"Genre"} show={movies.Genre} />
                                <Detail information={"Rating"} show={movies.Rated} />
                                <Detail information={"Director"} show={movies.Director} />
                                <Detail information={"Runtime"} show={movies.Runtime} />
                                <Detail information={"Plot"} show={movies.Plot} />
                                <Detail information={"Actors"} show={movies.Actors} />
                                <Detail information={"Awards"} show={movies.Awards} />
                                <Detail information={"Type"} show={movies.Type} />
                            </div>
                        </div> : 'Loading data...'}
                    </div>
                </div>
            </div>
            <div className="">
                <Footer />
            </div>
        </>
    )
}

export default MovieDetail;
