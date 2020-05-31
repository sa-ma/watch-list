import React from 'react';
import '../Components/Styles/SearchBox.css';
import { Link } from 'react-router-dom';
import UseData from './Hooks/UseData';
import SearchBox from './SearchBox';
import LoadingContent from './Loading';
import {TiStarFullOutline} from 'react-icons/ti';

function SearchDetails ({match}){
    let url = match.params.name;
    const {items, loading, error} = UseData(`https://api.themoviedb.org/3/search/multi?api_key=07a87afa9594ed4d43e740c14f0f5651&language=en-US&query=${url}&include_adult=true`)
    
    if(loading){
        return(
            <div>
                <SearchBox />
                <LoadingContent />
            </div>
        );
    }
    else if (error) {
       return <h1>Cant find</h1>
    }
    else{
        if(items.length === 0){
            return (
                <div>
                    <SearchBox />
                    <h1>Couldn't find "{url}"</h1>
                </div>
                )
        }else{
            return(
                <div>
                <SearchBox />
                <div className="cardbox wrap">
                    {
                    items.map(item => {
                    if(item.media_type === "movie"){
                        if(item.poster_path === null){
                           return []
                        }
                        return(
                            <div className="card" key={item.id}>
                            <Link to={`/movie/${item.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`} alt="" className="thumbnail" />
                                
                                    <p className="movie-name">{item.title}</p>
                                
                                <p className="movie-date">{item.release_date}</p>
                                <p className="rate"><TiStarFullOutline size={18} />{item.vote_average}</p>
                            </Link>
                            </div>
                    )
                    }else if(item.media_type === "tv"){
                        if(item.poster_path === null){
                            return []
                         }
                        return(
                            <div className="card" key={item.id}>
                            <Link to={`/series/${item.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`} alt="" className="thumbnail" />
                                
                                    <p className="movie-name">{item.name}</p>
                                
                                <p className="movie-date">{item.first_air_date}</p>
                                <p className="rate"><TiStarFullOutline size={18} />{item.vote_average}</p>
                            </Link>
                            </div>
                    )
                    }
                    
                })
                    }
                    </div>            
                </div>
            )
        }
    }

    
    
    // return(
    //     <div>
            
    //     </div>
    // )
}

export default SearchDetails;