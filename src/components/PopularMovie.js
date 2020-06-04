import React from 'react';
import useData from '../hooks/useData';
import { Link } from 'react-router-dom';
import LoadingContent from './Loading';
import ErrorLoading from './ErrorLoading';
import { TiStarFullOutline } from 'react-icons/ti';
import '../assets/css/style.css';

function PopularMovie() {
  const { loading, items, error } = useData(
    `https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&api_key=07a87afa9594ed4d43e740c14f0f5651`
  );

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
              <Link to={`/movie/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                  alt=""
                  className="thumbnail"
                />

                <h3 className="movie-name">{item.title}</h3>
                <p className="movie-date">Air Date: {item.release_date}</p>
                <p className="rate">
                  <TiStarFullOutline size={15} /> {item.vote_average}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
export default PopularMovie;
