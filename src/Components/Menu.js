import React from 'react';
import './Styles/Card.css';
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Menu(){
    return(
        <div className="menu">
            <img className="logo" src="https://res.cloudinary.com/benjee/image/upload/v1590892291/logo_1_hikhwx.svg" alt="logo" />
            <div className="find">
                <ul>
                   <Link to="/search"> <li class="search">Search <FaSearch size={15}/></li> </Link>
                </ul>
            </div>
        </div>
    )
}

export default Menu;