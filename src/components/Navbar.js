import React from 'react'

export default function Navbar() {
    
    return (
        <div className="mb-2">
            <nav className="shadow-md w-full flex gap-6 h-16 ">
                <div className="flex md:w-64 justify-center items-center mx-5">
                    <h1 className="md:text-lg text-md text-blue-600 font-Comfortaa w-36 md:w-auto">Movie Ristek App</h1>
                </div>
                <div className="md:flex items-center md:gap-2 w-full mr-6 justify-end lg:flex my-3">
                    <div className="name md:flex hidden">
                        <h2 className="text-gray-500 font-Comfortaa">Zuhal 'Alimul Hadi</h2>
                    </div>
                    <div className="hidden h-8 w-8 rounded-full ring-2 ring-white md:flex justify-end overflow-hidden items-center">
                        <img src="https://pbs.twimg.com/profile_images/1291624470382182401/2GaubkcR_400x400.jpg" alt=""></img>
                    </div>
                </div>
            </nav>
        </div>
    )
}

