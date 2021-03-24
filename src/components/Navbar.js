import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

export default function Navbar() {
    
    return (
        <div>
            <div className="mb-2">
                <nav className="shadow-md w-full flex gap-6 h-16">
                    <div className="flex md:w-64 justify-center items-center mx-5">
                        <h1 className="md:text-lg text-md text-blue-600 font-Comfortaa w-36 md:w-auto">Movie Ristek App</h1>
                    </div>
                    <div className="content-navbar md:flex md:mx-5 md:justify-center md:items-center md:gap-6">
                        <div className="">
                            <Router><Switch><Link to={{pathname:'/bookmark'}}><h2 className="text-blue-600 md:flex hidden">Bookmark</h2></Link></Switch></Router>
                        </div>
                        <div>
                            <Router><Switch><Link to={{pathname:'/liked'}}><h2 className="text-blue-600 md:flex hidden">Liked</h2></Link></Switch></Router>
                        </div>
                    </div>
                    <div className="flex items-center justify-end md:hidden ml-24">
                        <FontAwesomeIcon icon={faAlignJustify} className="text-blue-600" />
                    </div>
                    <div className="md:flex items-center w-full mr-6 justify-end hidden lg:flex">
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

