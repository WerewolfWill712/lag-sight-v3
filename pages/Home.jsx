import { useState, useEffect } from 'react'
import {
    movielst,
    raffleList,
    watchedList,
    silverList,
    bronzeList,
    theBlacklist
    } 
    from "./data/movies.json"
import Header from './components/Header'
import Movie from "./components/Movie"
import "./home.css"

const Home = ()=>{
    const movieListElements = movielst.map(movieInfo=>(
            <Movie
                info={movieInfo}
                key={movieInfo.ID}
            />
        )
    )
    const silverListElements=silverList.map(silverInfo=>(
        <Movie
                info={silverInfo}
                key={silverInfo.ID}
            />
    ))
    const bronzeListElements=bronzeList.map(bronzeInfo=>(
        <Movie
                info={bronzeInfo}
                key={bronzeInfo.ID}
            />
    ))
    return(
        <>
            <Header/>
            <div className="movie-lists">
                <div className="main-list lists">
                    {movieListElements}
                </div>
                <div className="bronze-list lists">
                    {silverListElements}
                </div>
                <div className="silver-list lists">
                    {bronzeListElements}
                </div>
            </div>
        </>
    )
}

export default Home
