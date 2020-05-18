import React from 'react';
import './Ravenous.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import Yelp from './util/Yelp';

class Ravenous extends React.Component {
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
      <div className="ravenous">
        <h1>Ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default Ravenous;