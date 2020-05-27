const clientID = 'afd25d22977d476fa61267ff8c873b34';
const redirectURI = 'http://jacoblind.me/jammming/';
let accessToken;

const Spotify = {
    getAccessToken() {     
        if (accessToken) {
            return accessToken;
        }
        
        let accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        let expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        
        // Check for access token and expiration match 
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            // This clears the parameters, allowing us to grab a new access token when it expires
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/jammming/');
            return accessToken;
        } else {
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = accessURL;
        }
    },

    search(term) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?q=${term}&type=track`, {
            headers: {
                Authorization: 'Bearer ' + accessToken
            },
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.tracks) {
                return jsonResponse.tracks.items.map(track => ({
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        URI: track.uri
                }));
            } else {
                return [];
            }
        });
    },

    savePlaylist(playlistName, trackURIs) {
        if (playlistName && trackURIs) {
            const accessToken = Spotify.getAccessToken();
            const headers = { Authorization: 'Bearer ' + accessToken }
            let userID;

            return fetch('https://api.spotify.com/v1/me', {headers: headers}
            ).then(response => {
                return response.json();
            }).then(jsonResponse => {
                userID = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({ name: playlistName })
                }).then(response => {
                    return response.json();
                }).then(jsonResponse => {
                    const playlistID = jsonResponse.id;
                    fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
                        headers: headers,
                        method: 'POST',
                        body: JSON.stringify({ uris: trackURIs })
                    })
                }) 
            })
        } else {
            return;
        };
    },
};

export default Spotify;