import React from 'react';
import './Styles/Card.css';
import Menu from './Menu';
import PopularMovie from './PopularMovie';


function Series(){
    return(
        <div>
            <Menu />
            <div class="menu-list">
                <ul>
                    <li>Popular</li>
                    <li>Upcoming</li>
                    <li>On Tv</li>
                    <li>Top Rated</li>
                </ul>
            </div>
            <PopularMovie id="wrap"/>
            <div class="load-more">
                <button>Load more</button>
            </div>
        </div>
    )
}

export default Series;