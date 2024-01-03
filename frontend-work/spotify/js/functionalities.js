const featuredPlaylistsElement = document.querySelector(".ft-playlists-data");
let api_data;

const AUTHORIZATION_VALUE = `Bearer BQDQ772U8JLggwHhLI8yLphLkLtH8f4TTtHyZ6hwhN7XeFSSZeRM0T_Tl0robOk1INwydqRPXw-G8RFsFT9OFUke2lYRuxvwcot77hdRcLltsyymsi0`;

const requests = {
  getNewKey: `https://accounts.spotify.com/api/token`,
  featuredPlaylists: `https://api.spotify.com/v1/browse/featured-playlists`,
  newReleases: `https://api.spotify.com/v1/browse/new-releases`,
};

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
  api_data = data.playlists.items;
  featuredPlaylistsElement.innerHTML =
    `<div class= "w-full h-full">\n` +
    `${mapFeaturedPlaylists(api_data)}\n` +
    `</div>`;
}
