import React, { Component } from 'react';
import './NotFound.css'

class NotFound extends Component {
    componentDidMount() {
        const favicon = document.getElementById('favicon');
        favicon.href = './jl.ico';
      }
    
    render() {
        return (
            <div id="notFound">
                <h2>Page not found.</h2>
            </div>
        );
    }
}

export default NotFound;