const limitPerPage = 20;
const discoverSeries = `https://api.themoviedb.org/3/discover/tv?api_key=07a87afa9594ed4d43e740c14f0f5651&language=en-US`;

export const getMovies = async (pageNo = 1) => {
  let actualUrl = discoverSeries + `&page=${pageNo}&limit=${limitPerPage}`;
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json();
  });

  return apiResults;
};

export const getEntireMovieList = async (pageNo = 1) => {
  const results = await getMovies(pageNo);
  console.log('Retreving data from API for page: ' + pageNo);
  if (results.length > 0) {
    return results.concat(await getEntireMovieList(pageNo + 1));
  } else {
    return results;
  }
};

let pages = 0;
for (pages < 4; pages++; ) {
  console.log('fetch 3 times');
}
