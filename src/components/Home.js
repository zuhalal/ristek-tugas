import React, {useState, useEffect} from 'react'
import Movie from './Movie';
import Search from './Search';
import Likes from './Likes';
import Footer from './Footer';
import Heading from './Heading';

export default function Home() {
    const [movies, setMovies] = useState([])

    const [likes, setLikes] = useState([])
    
    const [bookmarks, setBookmarks] = useState([])

    const [searchValue, setSearchValue] = useState([])
    
    const getMovieRequest = async () => {

        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=64fee452`
        const response = await fetch(url);

        const responseJson = await response.json();

        if (responseJson.Search) {
        setMovies(responseJson.Search);
        
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        getMovieRequest()}, [searchValue])

    const addLike = (movie) => {
        const newLikeList = [...likes, movie];
        setLikes(newLikeList);
    }

    const addBookmarks = (movie) => {
        const newBookmarkList = [...bookmarks, movie];
        setBookmarks(newBookmarkList)
    }

    const removeLikedMovies = (movie) => {
        const newLikeList = likes.filter((like)=> like.imdbID !== movie.imdbID);
        setLikes(newLikeList);
    }

    const removeBookmarkedMovies = (movie) => {
        const newBookmarkList = bookmarks.filter((bookmark)=> bookmark.imdbID !== movie.imdbID);
        setBookmarks(newBookmarkList);
    }

    return (
        <>
        <div className="">
            <div className="flex justify-center">
                <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div> 
            <div className="gap-3 flex flex-col">
                <Heading heading="Results" />
                <Movie handleLikeClick={addLike} movies = {movies} handleBookmarkClick={addBookmarks}/>
            </div>
            <div className="Liked">
                <Heading heading="Liked" />
                <Movie handleLikeClick={removeLikedMovies} handleBookmarkClick={addBookmarks} movies = {likes} LikesComponent={Likes}/>
            </div>
            <div className="bookmark">
                <Heading heading="Bookmark" />
                <Movie handleBookmarkClick={removeBookmarkedMovies} handleLikeClick={addLike} movies={bookmarks}/>
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
        </>
    )
}
