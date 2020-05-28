import React from 'react';
import './Styles/Card.css';
import UseData from './Hooks/UseData';
import { Link } from 'react-router-dom';
import ErrorLoading from './ErrorLoading';
import LoadingContent from './Loading';
import {TiStarFullOutline} from 'react-icons/ti';

function TrendingSeriesWeek () {
    const {loading, items, error} = UseData("https://api.themoviedb.org/3/trending/tv/week?api_key=07a87afa9594ed4d43e740c14f0f5651");
    
    if(loading){return <LoadingContent />}
    
    else if(error){return <ErrorLoading />}
    
    else {
        return(
            <div className="cardbox">
                {
                items.map(item =>{
                return(
                    <div className="card" key={item.id}>
                    <Link to={`/series/${item.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`} alt="" className="thumbnail" />
                        <h3 className="movie-name">{item.name}</h3>
                        <p className="movie-date">Air Date: {item.first_air_date}</p>
                        <p className="rate"><TiStarFullOutline size={18} /> {item.vote_average}</p>
                    </Link>
                    </div>
                )
                })    
                }     
            </div>
        );
    }
}
export default TrendingSeriesWeek;