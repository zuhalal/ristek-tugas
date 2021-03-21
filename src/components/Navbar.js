import React from 'react'
import Search from './Search'
//import {searchValue, setSearchValue} from '../App'
import { useState, useEffect } from 'react';


export default function Navbar() {
    const [movies, setMovies] = useState([
        
    ])

    const [searchValue, setSearchValue] = useState("")
    const getMovieRequest = async () => {

    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=64fee452`
    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.Search) {
        setMovies(responseJson.Search)
    }
    
}

    useEffect(() => {
    getMovieRequest()}, [searchValue])
    
    return (
        <div>
            <div className="mb-2">
                <nav className="shadow-md w-full flex gap-6 h-16">
                    <div className="flex w-64 justify-center items-center mx-5">
                        <h1 className="text-lg text-purple-500">Movie Ristek App</h1>
                    </div>
                    <div className="search flex justify-center items-center">
                        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
                    </div>
                    <div className="content-navbar flex mx-5 justify-center items-center gap-6">
                        <div className="">
                            <a href="/">Bookmark</a>
                        </div>
                        <div>
                            <a href="/">Liked</a>
                        </div>
                    </div>
                    <div className="flex items-center w-full mr-6 justify-end invisible lg:visible">
                        <div className="flex lg:gap-4  justify-end">
                            <div className="name  ">
                                <h2 className="text-gray-500">Zuhal 'Alimul Hadi</h2>
                            </div>
                            <div className="flex h-8 w-8 rounded-full ring-2 ring-white overflow-hidden items-center">
                                <img src="https://pbs.twimg.com/profile_images/1291624470382182401/2GaubkcR_400x400.jpg" alt=""></img>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

