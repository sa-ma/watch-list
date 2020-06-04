import React from 'react';
import TrendingSeriesToday from '../TrendingSeriesToday';
import TrendingSeriesWeek from '../TrendingSeriesWeek';
import '../../assets/css/style.css';

function TrendingSeries() {
  const day = () => {
    document.getElementById('series-week').style.display = 'none';
    document.getElementById('series-day').style.display = 'block';
    document.getElementById('tab-2').classList.remove('active');
    document.getElementById('tab-1').classList.add('active');
  };
  const week = () => {
    document.getElementById('series-day').style.display = 'none';
    document.getElementById('series-week').style.display = 'block';
    document.getElementById('tab-1').classList.remove('active');
    document.getElementById('tab-2').classList.add('active');
  };
  return (
    <div className="cardheader bg-light-brown">
      <div className="category">
        <h2>Trending Series</h2>
        <ul className="sort">
          <li id="tab-1" className="active" onClick={day}>
            Today
          </li>
          <li id="tab-2" onClick={week}>
            Week
          </li>
        </ul>
      </div>
      <div id="series-day" className="scroll">
        <TrendingSeriesToday />
      </div>
      <div id="series-week" className="scroll">
        <TrendingSeriesWeek />
      </div>
    </div>
  );
}
export default TrendingSeries;
