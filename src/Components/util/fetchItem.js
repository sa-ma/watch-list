

// const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=07a87afa9594ed4d43e740c14f0f5651&language=en-US&query=avengers&page=2&include_adult=true`;
// const searchSeriesurl = `https://api.themoviedb.org/3/search/tv?api_key=07a87afa9594ed4d43e740c14f0f5651&language=en-US&query=the%20flash&include_adult=true`;
// const discoverMovie = `https://api.themoviedb.org/3/discover/movie?api_key=07a87afa9594ed4d43e740c14f0f5651&language=en-US&include_adult=false&include_video=true&page=1`;
const limitPerPage = 20;
const discoverSeries = `https://api.themoviedb.org/3/discover/tv?api_key=07a87afa9594ed4d43e740c14f0f5651&language=en-US`;


const getMovies = async (pageNo = 1) => {
    let actualUrl =  discoverSeries + `&page=${pageNo}&limit=${limitPerPage}`;
    var apiResults = await fetch(actualUrl)
    .then(resp => {
        return resp.json();
    });

    return apiResults;
}

const getEntireMovieList = async (pageNo = 1) =>{
    const results = await getMovies(pageNo);
    console.log("Retreving data from API for page: " + pageNo);
    if(results.length > 0){
        return results.concat(await getEntireMovieList(pageNo + 1));
    }else {
        return results;
    }
};
(async () => {
    const entireList = await getEntireMovieList();
    console.log(entireList);
})();

let pages = 0;
    for(pages < 4; pages++;) {
        console.log('fetch 3 times')
    }  
