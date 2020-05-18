import React from 'react';
import '../Components/Styles/SearchBox.css';
import { FaSearch } from 'react-icons/fa'
function SearchBox (){
    return(
        <div className="searchbox">
            <h1>The Watch List</h1>
            <p className="header-sub">Find Millions of movies, TV shows to watch<br/> Explore now.</p>
            <input placeholder="Search for a movie" type="text" />
            <button className="btn" type="submit"><FaSearch className="btn-icon" /></button>
        </div>
    )
}

export default SearchBox;