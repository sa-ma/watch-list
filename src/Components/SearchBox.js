import React from 'react';
import '../Components/Styles/SearchBox.css';
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function SearchBox (){
    // const {items, loading, error} = UseData(`https://api.themoviedb.org/3/search/movie?api_key=07a87afa9594ed4d43e740c14f0f5651&language=en-US&query=&include_adult=true`)

    return(
        <div className="searchbox">
            <h1>The Watch List</h1>
            <p className="header-sub">Find Millions of movies, TV shows to watch<br/> Explore now.</p>
            <input placeholder="Search for a movie" type="text"  id="searchbox"/>
            <Link to="/search" className="btn" type="submit"><FaSearch className="btn-icon" /></Link>
        </div>
    )
}

export default SearchBox;