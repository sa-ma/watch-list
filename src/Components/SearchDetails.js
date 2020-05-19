import React from 'react';
import '../Components/Styles/SearchBox.css';
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import UseData from './Hooks/UseData';

function SearchDetails (){
    let name = "Avengers";
    const {items, loading, error} = UseData(`https://api.themoviedb.org/3/search/movie?api_key=07a87afa9594ed4d43e740c14f0f5651&language=en-US&query=${name}&include_adult=true`)
    

    console.log(items);
    return(
        <div>
            <div className="searchbox">
                <h1>The Watch List</h1>
                <p className="header-sub">Find Millions of movies, TV shows to watch<br/> Explore now.</p>
                <input placeholder="Search for a movie" type="text"  id="searchbox"/>
                <Link to="/search" className="btn" type="submit"><FaSearch className="btn-icon" /></Link>
            </div>
            <div className="cardbox">
                    {
                        items.map(item =>{
                        return(
                               
                                <div className="card" key={item.id}>
                                <Link to={`/overview/${item.title}`}>
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