import React from 'react';
import '../Styles/Card.css';
import TrendingSeriesToday from '../TrendingSeriesToday';
import TrendingSeriesWeek from '../TrendingSeriesWeek';

function TrendingSeries (){
    const day = () =>{
        document.getElementById("series-week").style.display = "none";
        document.getElementById("series-day").style.display = "block";
    }
    const week = () =>{
        document.getElementById("series-day").style.display = "none";
        document.getElementById("series-week").style.display = "block";
    }
        return(
            <div className="cardheader">
                <div className="category">
                    <h2>Trending Series</h2>
                    <ul className="sort">
                        <li onClick={day}>Today</li>
                        <li onClick={week}>Week</li>
                    </ul>
                </div>
                    <div id="series-day" className="scroll"><TrendingSeriesToday /></div>
                    <div id="series-week" className="scroll"><TrendingSeriesWeek /></div>
            </div>    
        );
}
export default TrendingSeries;