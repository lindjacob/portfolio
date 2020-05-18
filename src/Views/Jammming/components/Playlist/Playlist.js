import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css'

class Playlist extends Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={this.props.playlistName} onChange={this.props.changePlaylistName} />
                    <TrackList
                    tracks={this.props.playlistTracks}
                    onRemove={this.props.removeTrack}
                    isRemoval={true}
                    />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;