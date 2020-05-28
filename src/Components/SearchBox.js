import React, { useState } from 'react';
import '../Components/Styles/SearchBox.css';
import { FaSearch } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';

function SearchBox (){
    const [input, setInput] = useState('');    
    
    let history = useHistory();

    let searchinput = (e) => {
      setInput(e.target.value)
      console.log(e.target.value)
    }
    let search = () => {
       console.log("clicked")
        history.push(`/search/${input}`)
    }
    const keypress = (e) => {
        if(e.keyCode === 13){
            history.push(`/search/${input}`);
        }
    }

    return(
        <div className="searchbox">
            <h1>The Watch List</h1>
            <p className="header-sub">Find Millions of movies, TV shows to watch<br/> Explore now.</p>
            <input placeholder="Search for a movie" onChange={searchinput} onKeyDown={keypress} type="text"  id="searchbox"/>
            <button onClick={search} className="btn" type="button" ><FaSearch className="btn-icon" /></button>
        </div>
    )
}

export default SearchBox;