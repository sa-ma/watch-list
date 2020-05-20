import React from 'react';
import './Styles/moviedetails.css';
import FetchMovies from './Hooks/FetchMovies';

function Moviedetails ({match}){
    let checkparams = match.params.name;
    const {loading, items, error} = FetchMovies(`https://api.themoviedb.org/3/movie/${checkparams}?api_key=07a87afa9594ed4d43e740c14f0f5651`);
    
    let item = items;
    console.log(items)
    if(loading){
        return (
            <div className="popular">
                <h2>Popular</h2>
                <h3>Loading Content</h3>
            </div>    
        );
    }
    else if(error){
        return (
            <div className="popular">
                <h2>Popular</h2>
                <h3>Couldn't get Content</h3>
            </div>    
        );
    }
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
                                    <p>Release date: {item.release_date}</p>
                                    <p>Rating: {item.vote_average}</p>
                                    <a href={`https://www.youtube.com/results?search_query=${item.title} trailer`} target="_blank" rel="noopener noreferrer">Trailer</a>
                                </div>
                                <div className="overview-body">
                                    <h3>Overview</h3>
                                    <p>{item.overview}</p>
                                </div>
                                
                            </div>
                       </div>
                   );  
                 
}
export default Moviedetails;