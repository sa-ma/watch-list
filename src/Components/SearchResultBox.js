import React from 'react';
import './Styles/SearchBox.css';
import UseData from './Hooks/UseData';
import SearchResultMovies from './SearchResultMovies';
import SearchResultSeries from './SearchResultSeries';

function SearchResultBox ({match}){
    // let name = match.params.name;
    

    return(
        <div>
            <ul>
                <li>Movie(s)</li>
                <li>Series</li>
            </ul>
        </div>    
    )
}

export default SearchResultBox;