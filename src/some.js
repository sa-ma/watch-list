import React from 'react';

function Some (){
    return(
        <div className="headerbox">
            <SearchBox />
            {

            /*<div className="header" id="navbar">
                <div className="logo">
                    <h3>The Watch List</h3>
                </div>
                <ul className="nav">
                    <li>Movies</li>
                    <li>Tv Shows</li>
                    <li>People</li>
                </ul>
            </div>*/}
            <div className="popular">
                <h2>Popular</h2>
                    <h3>Loading Content</h3>
                    {/*<div className="cardbox">
                        {
                            items.map(item =>{
                            return(
                                <div className="card" key={item.id}>
                                    <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`} alt="" className="thumbnail" />
                                    <p className="movie-name">{item.title}</p>
                                    <p className="movie-date">{item.release_date}</p>
                                    <p className="rate">{item.vote_average}</p>
                                </div>
                            )
                            })    
                        }     
                    </div>*/}
            </div>
            <div className="free">
                <h2>Trending Movies</h2>
                <Card />
            </div>   
            <div className="trending">
                <h2>Trending Series</h2>
                <Card  />
            </div> 
        </div>
    );
}