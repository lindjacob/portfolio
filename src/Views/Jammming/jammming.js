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
            playList: []
        }
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
                    <SearchResults searchResults={this.state.searchResults} />
                    <Playlist />
                    </div>
                </div>
            </div>
        );
    }
}

export default componentName;