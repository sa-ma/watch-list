import React from 'react';
import './Styles/Card.css';
import UseData from './Hooks/UseData';
import { Link } from 'react-router-dom';
function TrendingSeriesToday (){

    const {loading, items, error} = UseData("https://api.themoviedb.org/3/trending/tv/day?api_key=07a87afa9594ed4d43e740c14f0f5651");

    console.log(items)

    if(loading){
        return (
            <div className="popular">
                <h2>Trending Series</h2>
                <h3>Loading Content</h3>
            </div>    
        );
    }
    else if(error){
        return (
            <div className="popular">
                <h2>Trending Series</h2>
                <h3>Couldn't get Content</h3>
            </div>    
        );
    }
    else {
        return(
                <div className="cardbox">
                    {
                        items.map(item =>{
                        return(
                            <div className="card" key={item.id}>
                            <Link to={`/series/${item.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`} alt="" className="thumbnail" />
                                <p className="movie-name">{item.name}</p>
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
export default TrendingSeriesToday;