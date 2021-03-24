
import React from 'react'
import {useEffect, useState} from 'react'
import { useLocation, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function MovieDetail(props) {
    //let location = useLocation();

    let imdbb = "aaaaa";

    
    const [movies,  setMovies] = useState()


    const [details, setDetails] = useState()


    const getMovieDetail = async (imdbid) => {

        const url = `http://www.omdbapi.com/?i=${imdbid}&apikey=64fee452`

        const response = await fetch(url);
        const responseJson = await response.json();
        
        if (responseJson) {
            console.log('test');
            setMovies(responseJson);
        } 

        console.log(responseJson);

        
    }

    if (props.location.state) {
        console.log(props.location.state.imdbID)
        imdbb = props.location.state.imdbID;

    }
    

    useEffect(() => {
        getMovieDetail(imdbb)}, [])


    const addDetails = (movie) => {
        const newDetailList = [...details, movies];
        setDetails(newDetailList);
        }    

        console.log(movies)
    
    function objectMap(object, mapFn) {
        return Object.keys(object).reduce(function(result, key) {
            result[key] = mapFn(object[key])
            return result
        }, {})
        }
        


    return (
        <>
            <div className="flex gap-2 flex-col p-2">
                <div className="flex items-start px-20">
                    <Link to="/"><button className="border-blue-500 rounded-md p-1 text-white px-2  bg-blue-500">Back</button></Link>
                </div>
                <div className="flex justify-center">
                    <h1>Movie Detail</h1>
                </div>
                <div className="shadow-md">
                    <div className="flex flex-col items-start px-20">
                    {(movies) ? 
                    <div className="w-full flex flex-col">
                        <div className="img-poster flex justify-center">
                            <img width={200} src={movies.Poster}></img>
                        </div>
                        <div className="w-full flex justify-center gap-1">
                            <div className=""><h2>IMDB Link:</h2></div>
                            <div className=""><a href={`https://www.imdb.com/title/${imdbb}`} className="text-purple-500" target="_blank">{`https://www.imdb.com/title/${imdbb}`}</a></div>
                        </div>
                        <div className="items-start flex flex-col w-full gap-1 mb-5">
                            <div className="w-5/6    flex">
                                <div className="w-1/12 justify-start flex">
                                    <h2 className="">Title:  </h2>
                                </div>
                                <div className="w-11/12 justify-start flex">
                                    <h2>{movies.Title}</h2>
                                </div>
                            </div>
                            <div className="w-5/6 flex">
                                <div className="w-1/12 justify-start flex">
                                    <h2 className="">Year:  </h2>
                                </div>
                                <div className="w-11/12 justify-start flex">
                                    <h2>{movies.Year}</h2>
                                </div>
                            </div>
                            <div className="w-5/6  flex">
                                <div className="w-1/12 justify-start flex">
                                    <h2 className="">Plot:  </h2>
                                </div>
                                <div className="w-11/12 justify-start flex">
                                    <h2>{movies.Plot}</h2>
                                </div>
                            </div>
                            <div className="w-5/6 flex">
                                <div className="w-1/12 justify-start flex">
                                    <h2 className="">Actors:  </h2>
                                </div>
                                <div className="w-11/12 justify-start flex">
                                    <h2>{movies.Actors}</h2>
                                </div>
                            </div>
                            <div className="w-5/6 flex">
                                <div className="w-1/12 justify-start flex">
                                    <h2 className="">Awards:  </h2>
                                </div>
                                <div className="w-11/12 justify-start flex">
                                    <h2>{movies.Awards}</h2>
                                </div>
                            </div>
                            <div className="w-5/6 flex">
                                <div className="w-1/12 justify-start flex">
                                    <h2 className="">Genre:  </h2>
                                </div>
                                <div className="w-11/12 justify-start flex">
                                    <h2>{movies.Genre}</h2>
                                </div>
                            </div>
                            <div className="w-5/6 flex">
                                <div className="w-1/12 justify-start flex">
                                    <h2 className="">Rated:  </h2>
                                </div>
                                <div className="w-11/12 justify-start flex">
                                    <h2>{movies.Rated}</h2>
                                </div>
                            </div>
                            <div className="w-5/6 flex">
                                <div className="w-1/12 justify-start flex">
                                    <h2 className="">Runtime:  </h2>
                                </div>
                                <div className="w-11/12 justify-start flex">
                                    <h2>{movies.Runtime}</h2>
                                </div>
                            </div>
                            {/* <div className="w-5/6 flex">
                                <div className="w-1/12 justify-start flex tab">
                                    <h2 className="">Ratings:  </h2>
                                </div>
                                <div className="w-11/12 flex flex-col items-start">
                                    <h2>{movies.Ratings.map((rating)=><h2>{rating.Source}, value: {rating.Value}</h2>)}</h2>
                                </div>
                            </div> */}
                            </div>
                        </div> : 'Loading data...'}
                    </div>
                </div>
                {/* <div>
                    {movies==true ? movies.map((movie)=> (
                    <>
                    <div className="">
                        <h1>{movie.Actors}</h1>
                    </div>
                    </>)
                    ) : 'null'}  
                </div> */}
            </div>
            <Footer/>
        </>
    )
}

export default withRouter(MovieDetail);
