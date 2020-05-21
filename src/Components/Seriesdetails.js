import React from 'react';
import './Styles/moviedetails.css';
import FetchMovies from './Hooks/FetchMovies';

function Seriesdetails ({match}){
    let checkparams = match.params.id;
    const {error, loading, items} = FetchMovies(`https://api.themoviedb.org/3/tv/${checkparams}?api_key=07a87afa9594ed4d43e740c14f0f5651`)

    let item = items;
        const style1 ={
            backgroundImage: `linear-gradient(to left bottom, rgba(40, 40, 40, 0.78), rgba(0, 0, 0, 0.93)),url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${item.backdrop_path})`,
        }
            return (
                <div className="overview-box" key={item.id} style={style1}>
                    <div className="thumbnail-box">
                        <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`} alt="" className="thumbnail-details" />
                    </div>
                    <div className="overview-details">
                        <div className="overview-header">
                            <h1>{item.name}</h1>
                            <p>First air date: {item.first_air_date}</p>
                            <p>Rating: {item.vote_average}</p>
                            <a href={`https://www.youtube.com/results?search_query=${item.name} trailer`} target="_blank" rel="noopener noreferrer">Trailer</a>
                        </div>
                        <div className="overview-body">
                            <h3>Overview</h3>
                            <p>{item.overview}</p>
                        </div>
                        
                    </div>
                </div>
        );

    }    
export default Seriesdetails;