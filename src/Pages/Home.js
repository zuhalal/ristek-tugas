import React, {useState, useEffect} from 'react'
import Movie from '../components/Movie';
import Search from '../components/Search';
import Likes from '../components/Likes';
import Footer from '../components/Footer';
import Heading from '../components/Heading';

export default function Home() {
    const [movies, setMovies] = useState([])

    const [likes, setLikes] = useState([])

    let Temp = [];
    
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
        var bool = true

        if (likes) {
            // eslint-disable-next-line
            likes.map((like)=>{
                //handle duplicate
                if((Temp.includes(like.Title))) {
                    bool = false;
                } else {
                    Temp.push(like.Title)
                    bool = true;
                }
                
            })
        
            if(bool === true) {
                setLikes(newLikeList);
                return

            } else {
                alert("Terdapat Movie yang sudah di liked sebelumnya, unlike film yang terduplikasi agar dapat menambahkan like yang lain")
                return
            }
        }
    }


    const addBookmarks = (movie) => {
        const newBookmarkList = [...bookmarks, movie];

        var bool = true;
        
        if (bookmarks) {
            // eslint-disable-next-line
            bookmarks.map((bookmark)=>{
                //handle duplicate
                if((Temp.includes(bookmark.Title))) {
                    bool = false;
                    
                } else {
                    Temp.push(bookmark.Title)
                    bool = true;
                    
                }
                
            })
        
            if(bool === true) {
                setBookmarks(newBookmarkList);
                return
            } else {
                alert("Terdapat Movie yang sudah di bookmark sebelumnya, lepas bookmark film yang terduplikasi agar dapat menambahkan bookmark yang lain")
                return
            }
            
        }

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
