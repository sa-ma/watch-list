import React from 'react';
import '../Styles/Card.css';

function Card(){
    return(
        <div className="cardbox">
            <div className="card">
                <img src="https://image.tmdb.org/t/p/w220_and_h330_face/A2YlIrzypvhS3vTFMcDkG3xLvac.jpg" alt="" className="thumbnail" />
                <p className="movie-name">The Wicked</p>
                <p className="movie-date">May 13, 2020</p>
                <p className="rate">100%</p>
            </div>
            <div className="card">
                <img src="https://image.tmdb.org/t/p/w220_and_h330_face/A2YlIrzypvhS3vTFMcDkG3xLvac.jpg" alt="" className="thumbnail" />
                <p className="movie-name">The Wicked</p>
                <p className="movie-date">May 13, 2020</p>
                <p className="rate">100%</p>
            </div>
            <div className="card">
                <img src="https://image.tmdb.org/t/p/w220_and_h330_face/A2YlIrzypvhS3vTFMcDkG3xLvac.jpg" alt="" className="thumbnail" />
                <p className="movie-name">The Wicked</p>
                <p className="movie-date">May 13, 2020</p>
                <p className="rate">100%</p>
            </div>
            <div className="card">
                <img src="https://image.tmdb.org/t/p/w220_and_h330_face/A2YlIrzypvhS3vTFMcDkG3xLvac.jpg" alt="" className="thumbnail" />
                <p className="movie-name">The Wicked</p>
                <p className="movie-date">May 13, 2020</p>
                <p className="rate">100%</p>
            </div>
        </div>
    )
}

export default Card;