import React, { useState } from 'react';
import '../Components/Styles/SearchBox.css';
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function SearchBox (){
    const [input, setInput] = useState('');    
    

    let searchinput = (e) => {
      setInput(e.target.value)
      console.log(e.target.value)
    }
    const keypress = (e) => {
        if(e.key === 13){
            setInput(e.target.value)
        }
    }

    return(
        <div className="searchbox">
            <h1>The Watch List</h1>
            <p className="header-sub">Find Millions of movies, TV shows to watch<br/> Explore now.</p>
            <input placeholder="Search for a movie" onKeyDown={keypress} onKeyPress={searchinput} type="text"  id="searchbox"/>
            <Link to={`/search/${input}`} className="btn" type="submit"><FaSearch className="btn-icon" /></Link>
        </div>
    )
}

export default SearchBox;