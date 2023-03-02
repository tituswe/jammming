import React from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

const dummySearchResults = [
	{ name: 'Song Name 1', artist: 'Artist Name 1', album: 'Album Name', id: 1 },
	{ name: 'Song Name 2', artist: 'Artist Name 2', album: 'Album Name', id: 2 },
	{ name: 'Song Name 3', artist: 'Artist Name 3', album: 'Album Name', id: 3 },
];

const dummyPlaylistName = 'My Playlist';

const dummyPlaylistTracks = [
	{
		name: 'Playlist Name 1',
		artist: 'Playlist Artist 1',
		album: 'Playlist Album',
		id: 4,
	},
	{
		name: 'Playlist Name 1',
		artist: 'Playlist Artist 1',
		album: 'Playlist Album',
		id: 5,
	},
	{
		name: 'Playlist Name 1',
		artist: 'Playlist Artist 1',
		album: 'Playlist Album',
		id: 6,
	},
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: dummySearchResults,
			playlistName: dummyPlaylistName,
			playlistTracks: dummyPlaylistTracks,
		};
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
		this.updatePlaylistName = this.updatePlaylistName.bind(this);
	}

	addTrack(track) {
		let tracks = this.state.playlistTracks;

		if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
			return;
		}

		tracks.push(track);
		this.setState({ playlistTracks: tracks });
	}

	removeTrack(track) {
		let tracks = this.state.playlistTracks;

		tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);
		this.setState({ playlistTracks: tracks });
	}

	updatePlaylistName(name) {
		this.setState({ playlistName: name });
	}

	render() {
		return (
			<div>
				<h1>
					Ja<span className="highlight">mmm</span>ing
				</h1>
				<div className="App">
					<SearchBar />
					<div className="App-playlist">
						<SearchResults
							searchResults={this.state.searchResults}
							onAdd={this.addTrack}
						/>
						<Playlist
							playlistName={this.state.playlistName}
							playlistTracks={this.state.playlistTracks}
							onRemove={this.removeTrack}
							onNameChange={this.updatePlaylistName}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
