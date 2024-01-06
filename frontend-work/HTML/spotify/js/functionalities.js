const featuredPlaylistsElement = document.querySelector(".ft-playlists-data");
let FEATURED_PLAYLISTS;
let USER_ID;
const AUTHORIZATION_VALUE = `Bearer BQCiCyn1A2Zj4oO9elQ7oX-osYYBaQ-wRWNBRfBwub_aapPPtXBDDP3RE-NCnkv6JMnbdRu39EUjTI3Tq3Y0LRFUAJ3EaDM-MfpMS4-3CjdxWFp-yR5DUAlFs_vUVLM5f3YY_THO4ztwMKl8jrlAw2SygmJFtkgjMlxJhTnp1BFtXCqUuKSKGxJicrIqZzOpz0pMg4dfInSb4DMpfCpgGBbnicWJCbqv4usJRldaRFQS9eJo08e_rqA5Nlw17L1a417vonw-0LZaj_dimrzmqGqP`;
const max = 923999;
const min = 102010;

//GIVE DATA SPECIFIED NAMES ANONIMITY IN BROWSER

const REQUEST = {
  getNewKey: `https://accounts.spotify.com/api/token`,
  featuredPlaylists: `https://api.spotify.com/v1/browse/featured-playlists`,
  newReleases: `https://api.spotify.com/v1/browse/new-releases`,
  search: `https://api.spotify.com/v1/search`,
  getRecommendations: `https://api.spotify.com/v1/recommendations`,
  getUserPlaylists: `https://api.spotify.com/v1/users/${USER_ID}/playlists`,
};
//HEADS UP TO BE ABLE TO STORE AND USE THE API DATA IN THE
//FETCH FUNCTION STORE THE API RESPONSE DATA TO LOCALSTORAGE using
//THE setItem() method then use the getItem() method to get the data without the hassle of
//using multiple functions to try to solve a problem u cant solve
//localstorage is a NO-BRAINER
//REBUILD THE BACCKEND IN A MORE SOPHISTICATED MANNER
//TOMMOROW DSELETE ALL OF THIS CODE AND REDO THE BACKEND USING LOCAL STORAGE TO STORE API DATA
//you can use remove Item to remove and restore data from the api call oh my im a fucking genius

//testing code delete when you can below
//=================================

const IMPORTED_DATA = JSON.parse(localStorage.getItem(`491686`));

const { items } = IMPORTED_DATA.playlists;

console.log(items);

const MAP_DATA = items.map((item) => {
  featuredPlaylistsElement.innerHTML += `<div class="mt-3"><img src=${item.images[0].url} alt=${item.description}></div>\n`;
  console.log(item.description);
});

console.log(MAP_DATA);

//=============================
