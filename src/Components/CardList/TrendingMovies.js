import React from 'react';
import '../Styles/Card.css';
import TrendingMoviesToday from '../TrendingMoviesToday';
import TrendingMoviesWeek from '../TrendingMoviesWeek';

function TrendingMovies (){
        const day = () =>{
            document.getElementById("week").style.display = "none";
            document.getElementById("day").style.display = "block";
            console.log("clicked day")
        }
        const week = () =>{
            document.getElementById("day").style.display = "none";
            document.getElementById("week").style.display = "block";
            console.log("clicked week")
        }
        return(
            <div className="free">
                <div className="category">
                    <h2>Trending Movies</h2>
                    <ul className="sort">
                        <li onClick={day}>Today</li>
                        <li onClick={week}>Week</li>
                    </ul>
                </div>
                <div id="day"><TrendingMoviesToday /></div>
                <div id="week"><TrendingMoviesWeek /></div>
            </div>    
        );
}
export default TrendingMovies;