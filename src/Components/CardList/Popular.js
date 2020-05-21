import React from 'react';
import '../Styles/Card.css';
// import UseData from '../Hooks/UseData';
// import { Link } from 'react-router-dom';
import PopularMovie from '../PopularMovie';
import PopularSeries from '../PopularSeries';


function Popular (){
    const movie = () =>{
        document.getElementById("series").style.display ="none"
        document.getElementById("movie").style.display = "block";
    }
    const series = () =>{
        document.getElementById("movie").style.display = "none";
        document.getElementById("series").style.display ="block"
    }
    const display = {
        display : 'none'
    }
        return(
            <div className="popular">
                <div className="category">
                    <h2>Popular</h2>
                    <ul className="sort">
                        <li onClick={movie}>Movie</li>
                        <li onClick={series}>Series</li>
                    </ul>
                </div>
                <div className="cardbox">
                    <div id="movie"><PopularMovie/></div>
                    <div id="series"><PopularSeries /> </div>
                </div>
            </div>    
        );
}
export default Popular;