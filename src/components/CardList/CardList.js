import React from 'react';
import PopularMovie from '../PopularMovie';
import PopularSeries from '../PopularSeries';
import '../../assets/css/style.css';

function Popular() {
  const movie = () => {
    document.getElementById('series').style.display = 'none';
    document.getElementById('movie').style.display = 'block';
    document.getElementById('tab2').classList.remove('active');
    document.getElementById('tab1').classList.add('active');
  };
  const series = () => {
    document.getElementById('movie').style.display = 'none';
    document.getElementById('series').style.display = 'block';
    document.getElementById('tab1').classList.remove('active');
    document.getElementById('tab2').classList.add('active');
  };
  return (
    <div className="cardheader bg-light-brown">
      <div className="category">
        <h2>Popular</h2>
        <ul className="sort">
          <li id="tab1" className="active" onClick={movie}>
            Movie
          </li>
          <li id="tab2" onClick={series}>
            Series
          </li>
        </ul>
      </div>
      <div id="movie" className="scroll">
        <PopularMovie />
      </div>
      <div id="series" className="scroll">
        <PopularSeries />{' '}
      </div>
    </div>
  );
}
export default Popular;
