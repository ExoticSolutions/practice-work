const featuredPlaylistsElement = document.querySelector(".ft-playlists-data");
let api_data;

const AUTHORIZATION_VALUE = `Bearer BQDQ772U8JLggwHhLI8yLphLkLtH8f4TTtHyZ6hwhN7XeFSSZeRM0T_Tl0robOk1INwydqRPXw-G8RFsFT9OFUke2lYRuxvwcot77hdRcLltsyymsi0`;

const requests = {
  getNewKey: `https://accounts.spotify.com/api/token`,
  featuredPlaylists: `https://api.spotify.com/v1/browse/featured-playlists`,
  newReleases: `https://api.spotify.com/v1/browse/new-releases`,
};
//HEADS UP TO BE ABLE TO STORE AND USE THE API DATA IN THE
//FETCH FUNCTION STORE THE API RESPONSE DATA TO LOCALSTORAGE using
//THE setItem() method then use the getItem() method to get the data without the hassle of
//using multiple functions to try to solve a problem u cant solve
//localstorage is a NO-BRAINER
//REBUILD THE BACCKEND IN A MORE SOPHISTICATED MANNER
//TOMMOROW DSELETE ALL OF THIS CODE AND REDO THE BACKEND USING LOCAL STORAGE TO STORE API DATA
//you can use remove Item to remove and restore data from the api call oh my im a fucking genius
runAPICalls();

function runAPICalls() {
  getFeaturedPlaylists();
}

function getFeaturedPlaylists() {
  fetch(requests.featuredPlaylists, {
    method: "GET",
    headers: {
      Authorization: AUTHORIZATION_VALUE,
    },
  })
    .then((res) => res.json())
    .then((data) => exportFeaturedPlaylistsData(data));
}

function mapFeaturedPlaylists(api_data) {
  console.log(api_data);
  const mappedElements = api_data.map((item) => {
    return `<div key=${item}>\n` + `<img src=${item.images[0].url}>` + `</div>`;
  });
  return mappedElements;
}

function exportFeaturedPlaylistsData(data) {
  api_data = localStorage.setItem(
    "featuredPlaylists",
    JSON.stringify(data.playlists.items)
  );
}
