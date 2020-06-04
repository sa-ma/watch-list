import React from 'react';
import useData from '../hooks/useData';
import { Link } from 'react-router-dom';
import LoadingContent from './Loading';
import ErrorLoading from './ErrorLoading';
import { TiStarFullOutline } from 'react-icons/ti';
import '../assets/css/style.css';

function Popular() {
  const { loading, items, error } = useData(
    `https://api.themoviedb.org/3/discover/tv?api_key=07a87afa9594ed4d43e740c14f0f5651&language=en-US&sort_by=popularity.desc`
  );
  console.log(items);

  if (loading) {
    return <LoadingContent />;
  } else if (error) {
    return <ErrorLoading />;
  } else {
    return (
      <div className="cardbox">
        {items.map((item) => {
          return (
            <div className="card" key={item.id}>
              <Link to={`/series/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                  alt=""
                  className="thumbnail"
                />

                <h3 className="movie-name">{item.name}</h3>

                <p className="movie-date">{item.first_air_date}</p>
                <p className="rate">
                  <TiStarFullOutline size={18} /> {item.vote_average}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Popular;
