import React from 'react';
import useMovies from '../hooks/useMovies';
import {
  MdPlayCircleFilled,
  TiStarFullOutline,
  IoMdArrowRoundBack,
} from 'react-icons/all';
import LoadingContent from './Loading';
import ErrorLoading from './ErrorLoading';
import { useHistory } from 'react-router-dom';
import '../assets/css/style.css';

function Moviedetails({ match }) {
  let checkparams = match.params.name;
  const { loading, items, error } = useMovies(
    `https://api.themoviedb.org/3/movie/${checkparams}?api_key=07a87afa9594ed4d43e740c14f0f5651`
  );
  let history = useHistory();

  let item = items;
  if (loading) {
    return <LoadingContent />;
  } else if (error) {
    return <ErrorLoading />;
  }
  const style1 = {
    backgroundImage: `linear-gradient(to left bottom, rgba(40, 40, 40, 0.78), rgba(0, 0, 0, 0.93)),url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${item.backdrop_path})`,
  };
  return (
    <div className="overview-box" key={item.id} style={style1}>
      <div className="back">
        <IoMdArrowRoundBack onClick={() => history.goBack()} />
      </div>
      <div className="thumbnail-box">
        <img
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`}
          alt=""
          className="thumbnail-details"
        />
      </div>
      <div className="overview-details">
        <div className="overview-header">
          <h1 className="details-title">{item.title}</h1>
          <p className="details-date">Release date: {item.release_date}</p>
          <p>Runtime: {item.runtime} min</p>
          <p className="details-rating">
            Rating <TiStarFullOutline />: {item.vote_average}{' '}
          </p>
          <a
            className="watch-trailer"
            href={`https://www.youtube.com/results?search_query=${item.title} trailer`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdPlayCircleFilled size={18} /> Watch Trailer
          </a>
        </div>
        <div className="overview-body">
          <p className="mute-text">{item.tagline}</p>
          <h3>Overview</h3>
          <p>{item.overview}</p>
        </div>
      </div>
    </div>
  );
}
export default Moviedetails;
