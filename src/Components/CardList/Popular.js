import React from 'react';
import '../Styles/Card.css';
import UseData from '../Hooks/UseData';
import { Link } from 'react-router-dom';

function Popular (){

    const {loading, items, error} = UseData("https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&api_key=07a87afa9594ed4d43e740c14f0f5651");
    
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
    else {
        return(
            <div className="popular">
                <h2>Popular</h2>
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
            </div>    
        );
    }
}
export default Popular;