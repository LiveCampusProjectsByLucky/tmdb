import { ImagesI } from "../types/ImagesI";
import { MoviesTrandingI } from "../types/MoviesTrandingI";
import { AuthenticationI } from "../types/auth";

export async function loginViaApi(api_key: string) {
  const url = "https://api.themoviedb.org/3/authentication?";
  const params = {
      api_key,
  };

  return await fetchData<AuthenticationI>(url, params);
}



// MOVIES
export async function getMoviesTrending(api_key: string, page?: number) {
  const url = "https://api.themoviedb.org/3/discover/movie?";
  const params = {
    api_key,
    page,
  };

  return await fetchData<MoviesTrandingI>(url, params);
};



// https://image.tmdb.org/t/p/w3840_and_h2160_face/n96bSvMRmrC3Y8VIs7LMNMyXkwp.jpg
export function getMovieImage(file_path: string, size: string = "md") {
  const sizes = {
    md: {
      width: 500,
      height: 750,
    },
    lg: {
      width: 300,
      height: 450,
    },
    xl: {
      width: 3840,
      height: 2160,
    },
  }

  return `https://image.tmdb.org/t/p/w${sizes[size as keyof typeof sizes].width}_and_h${sizes[size as keyof typeof sizes].height}_face${file_path}`;
}

// ## Add Supported Image Sizes  
//                                  Min Res      Max Res  
// poster   = Poster ............  500 x 750   2000 x 3000  
// backdrop = Fanart ............ 1280 x 720   3840 x 2160  
// still    = TV Show Episode ... 1280 x 720   3840 x 2160  
// profile  = Actors Actresses ..  300 x 450   2000 x 3000  
// logo     = TMDb Logo  

// ## API Supported Image Sizes  

// |  poster  | backdrop |  still   | profile  |   logo   |
// | :------: | :------: | :------: | :------: | :------: |
// | -------- | -------- | -------- |    w45   |    w45   |
// |    w92   | -------- |    w92   | -------- |    w92   |
// |   w154   | -------- | -------- | -------- |   w154   |
// |   w185   | -------- |   w185   |   w185   |   w185   |
// | -------- |   w300   |   w300   | -------- |   w300   |
// |   w342   | -------- | -------- | -------- | -------- |
// |   w500   | -------- | -------- | -------- |   w500   |
// | -------- | -------- | -------- |   h632   | -------- |
// |   w780   |   w780   | -------- | -------- | -------- |
// | -------- |  w1280   | -------- | -------- | -------- |
// | original | original | original | original | original |  

// Original Size is the size of the uploaded image.  
// It can be between Minimum Resolution and Maximum Resolution.  


// FUNCTIONS
async function fetchData<D>(url: string, params: {}): Promise<D> {
  return await fetch(url + new URLSearchParams(params))
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};