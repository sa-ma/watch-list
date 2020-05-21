import React from 'react';
import './Styles/Card.css';
import UseData from './Hooks/UseData';
import { Link } from 'react-router-dom';
import LoadingContent from './Loading';
import ErrorLoading from './ErrorLoading';

function TrendingMoviesWeek (){

    const {loading, items, error} = UseData("https://api.themoviedb.org/3/trending/movie/week?api_key=07a87afa9594ed4d43e740c14f0f5651");
    
    if(loading){return <LoadingContent/>}
    else if(error){return <ErrorLoading />}
    else {
        return(
            <div className="cardbox">
                {
                    items.map(item =>{
                    return(
                        <div className="card" key={item.id}>
                        <Link to={`/movie/${item.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`} alt="" className="thumbnail" />
                            <p className="movie-name">{item.title}</p>
                            <p className="movie-date">{item.release_date}</p>
                            <p className="rate">{item.vote_average}</p>
                        </Link>
                        </div>
                    )
                    })    
                }     
            </div>
        );
    }
}
export default TrendingMoviesWeek;