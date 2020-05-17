import React from 'react';
import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import BusinessList from '../components/BusinessList/BusinessList';
import Yelp from '../util/Yelp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({ businesses: businesses })
    });
  }

  componentDidMount() {
    const favicon = document.getElementById('favicon');
    favicon.href = './ravenous.ico';
  }
  
  render() {
    return (
      <div className="App">
        <h1>Yelp copy project</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;