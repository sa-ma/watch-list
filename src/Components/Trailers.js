import React from 'react';
import './Styles/Card.css';
import UseData from './Hooks/UseData';
import LoadingContent from './Loading';
import ErrorLoading from './ErrorLoading';
import {FaPlay} from 'react-icons/fa'
function Trailers (){
    const {loading, items, error} = UseData("https://api.themoviedb.org/3/trending/all/day?api_key=07a87afa9594ed4d43e740c14f0f5651");
    console.log(items)

    if(loading){ return <LoadingContent />}
    else if(error){return <ErrorLoading />}
    else {
        return(
            <div className="scroll trailer">
                <h2 className="trailer-heading">Watch Trailers</h2>
                <div className="cardbox">
                    {
                        items.map(item =>{
                            if(item.media_type === "tv" || item.media_type === "movie"){
                                return(
                                    <div className="card" key={item.id}>
                                    <a target="_Blank" rel="noopener noreferrer"  href={`https://www.youtube.com/results?search_query=${item.media_type === "tv" ? item.name : item.title} trailer`}>
                                        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`} alt="" className="thumbnail" />
                                        <FaPlay size={25} id="play"/>
                                    </a>
                                    </div>
                                )
                            }else return [];
                        })    
                    }     
                </div>
            </div>
        );
    }
}
export default Trailers;