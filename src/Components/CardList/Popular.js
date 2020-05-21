import React from 'react';
import '../Styles/Card.css';
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
    return(
        <div className="cardheader">
            <div className="category">
                <h2>Popular</h2>
                <ul className="sort">
                    <li onClick={movie}>Movie</li>
                    <li onClick={series}>Series</li>
                </ul>
            </div>
            <div id="movie" className="scroll"><PopularMovie/></div>
            <div id="series" className="scroll"><PopularSeries /> </div>
            
        </div>    
    );
}
export default Popular;