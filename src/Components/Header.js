import React from 'react';
import '../Components/Styles/Header.css';
import '../Components/Styles/Card.css'
import SearchBox from './SearchBox';
import Popular from './CardList/Popular';
import TrendingMovies from './CardList/TrendingMovies';
import TrendingSeries from './CardList/TrendingSeries';


function Header (){
        return(
            <div className="headerbox">
                <SearchBox />
                <Popular />
                <TrendingMovies />
                <TrendingSeries />
            </div>
        );
}
export default Header;