import React from 'react'



const IMGPATH = "https://image.tmdb.org/t/p/w1280";

 

const Movie = ({title, poster_path, overview, vote_average}) => {
    return (
        <div className="movie">
            <div className="movie-header">
                <img src={IMGPATH + poster_path} alt={title}></img>
                <div className="movie-info">
                    <h3>{title}</h3>
                    <span className="tag">{vote_average}</span>
                </div>
            </div>
            <div className="movie-over">
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie;