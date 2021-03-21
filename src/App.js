import './App.css';
import { useState, useEffect } from 'react';
import Movie from './components/Movie';
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Likes from './components/Likes';

function App() {
  
    const [movies, setMovies] = useState([
        
      ])

    const [likes, setLikes] = useState([
      
    ])
    
    const [bookmarks, setBookmarks] = useState([
      
    ])
  
  const [searchValue, setSearchValue] = useState("")
    
    const getMovieRequest = async () => {

      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=64fee452`
      const response = await fetch(url);

      const responseJson = await response.json();

      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
      
    }
  
    useEffect(() => {
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
    <div className="App">
    <Navbar />
      <div className="gap-3 flex flex-col">
        <Heading heading="Movies" />
        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="flex">
        <Movie handleLikeClick={addLike} movies = {movies} handleBookmarkClick={addBookmarks}/>
      </div>
      <div className="Liked">
        <Heading heading="Liked" />
        <Movie handleLikeClick={removeLikedMovies} movies = {likes} LikesComponent={Likes}/>
      </div>
      <div>
        <Heading heading="Bookmark" />
        <Movie handleBookmarkClick={removeBookmarkedMovies} movies={bookmarks}/>
      </div>
    </div>
  );
}

export default App;
