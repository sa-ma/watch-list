import React from 'react';
import '../Components/Styles/SearchBox.css';
import { Link } from 'react-router-dom';
import UseData from './Hooks/UseData';
import SearchBox from './SearchBox';

function SearchDetails ({match}){
    let name = match.params.name;
    console.log(match)
    const {items, loading, error} = UseData(`https://api.themoviedb.org/3/search/multi?api_key=07a87afa9594ed4d43e740c14f0f5651&language=en-US&query=${name}&include_adult=true`)
    console.log(items)
    return(
        <div>
            <SearchBox />
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
    )
}

export default SearchDetails;