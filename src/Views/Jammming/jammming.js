import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import './jammming.css'


class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [
                {
                    name: 'Tiny Dancer',
                    artist: 'Elton John',
                    album: 'Madman Across The Water',
                    id: 1
                },
                {
                    name: 'Tiny Dancer2',
                    artist: 'Elton John',
                    album: 'Madman Across The Water',
                    id: 2
                },
                {
                    name: 'Tiny Dancer3',
                    artist: 'Elton John',
                    album: 'Madman Across The Water',
                    id: 3
                }
            ],
            playlistName: 'My playlist',
            playlistTracks: [
                {
                    name: 'Tiny Dancer4',
                    artist: 'Elton John',
                    album: 'Madman Across The Water',
                    id: 4
                },
                {
                    name: 'Tiny Dancer5',
                    artist: 'Elton John',
                    album: 'Madman Across The Water',
                    id: 5
                },
                {
                    name: 'Tiny Dancer6',
                    artist: 'Elton John',
                    album: 'Madman Across The Water',
                    id: 6
                }
            ]
        };
        this.changePlaylistName = this.changePlaylistName.bind(this);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack(track) {
        let tracks = this.state.playlistTracks;
        if (tracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        } else {
            tracks.push(track);
            this.setState({ playlistTracks: tracks });
        }
    }

    removeTrack(track) {
        let tracks = this.state.playlistTracks;
        tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
        this.setState ({ playlistTracks: tracks });
    }

    changePlaylistName(input) {
        const newPlaylistName = input.target.value;
        this.setState({ playlistName: newPlaylistName });
    }
    
    componentDidMount() {
        const favicon = document.getElementById('favicon');
        favicon.href = './jammming.ico';
      }
    
    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="jammming">
                    <SearchBar />
                    <div className="App-playlist">
                    <SearchResults
                    searchResults={this.state.searchResults}
                    addTrack={this.addTrack}
                    />
                    <Playlist
                    playlistName={this.state.playlistName}
                    playlistTracks={this.state.playlistTracks}
                    changePlaylistName={this.changePlaylistName}
                    removeTrack={this.removeTrack}
                    />
                    </div>
                </div>
            </div>
        );
    }
}

export default componentName;