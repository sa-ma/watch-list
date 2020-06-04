import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import TrendingMovies from './CardList/TrendingMovies';
import TrendingSeries from './CardList/TrendingSeries';
import Trailers from './Trailers';
import Menu from './Menu';
import '../assets/css/style.css';

function Header() {
  return (
    <div className="headerbox">
      <SearchBox />
      <Menu />
      <CardList />
      <TrendingMovies />
      <Trailers />
      <TrendingSeries />
    </div>
  );
}
export default Header;
