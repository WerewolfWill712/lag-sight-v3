import React from "react";
import "./movie.css"
const Movie = (props)=>{
    const { info }=props
    return(
        <div className="movie-item">
            <span className="name">{info.movie}</span>
            <img src={`../../images/${info.img}`} alt="movie poster" />
            <a href={`https://www.imdb.com/title/${info.imdbID}/parentalguide`} target="_blank">Content Guide</a>
            <a href={`https://www.youtube.com/watch?v=${info.trailer}`} target="_blank">Trailer</a>
        </div>
    )
}
export default Movie