import React from 'react';
import '../Components/Styles/Header.css';
import '../Components/Styles/Card.css'
import SearchBox from './SearchBox';
import Popular from './CardList/Popular';
import TrendingMovies from './CardList/TrendingMovies';
import TrendingSeries from './CardList/TrendingSeries';
import Trailers from './Trailers';
import Menu from './Menu';


function Header (){
        return(
            <div className="headerbox">
                <SearchBox />
                <Menu />
                <Popular />
                <TrendingMovies />
                <Trailers />
                <TrendingSeries />
            </div>
        );
}
export default Header;