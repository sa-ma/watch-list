import React from 'react';
import TrendingMoviesToday from '../TrendingMoviesToday';
import TrendingMoviesWeek from '../TrendingMoviesWeek';
import '../../assets/css/style.css';

function TrendingMovies() {
  const day = () => {
    document.getElementById('week').style.display = 'none';
    document.getElementById('day').style.display = 'block';
    document.getElementById('tab-week').classList.remove('active');
    document.getElementById('tab-day').classList.add('active');
  };
  const week = () => {
    document.getElementById('day').style.display = 'none';
    document.getElementById('week').style.display = 'block';
    document.getElementById('tab-day').classList.remove('active');
    document.getElementById('tab-week').classList.add('active');
  };
  return (
    <div className="card-header bg-brown">
      <div className="category">
        <h2>Trending Movies</h2>
        <ul className="sort">
          <li id="tab-day" className="active" onClick={day}>
            Today
          </li>
          <li id="tab-week" onClick={week}>
            Week
          </li>
        </ul>
      </div>
      <div id="day" className="scroll">
        <TrendingMoviesToday />
      </div>
      <div id="week" className="scroll">
        <TrendingMoviesWeek />
      </div>
    </div>
  );
}
export default TrendingMovies;
