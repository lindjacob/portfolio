import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {
    componentDidMount() {
        const favicon = document.getElementById('favicon');
        favicon.href = './jl.ico';
      }
    
    render() {
        return (
            <div>
                <h1>My resume is currently under development...</h1>
                <h3><a href="https://github.com/lindjacob/portfolio">Link til GitHub repository</a></h3>
            </div>
        );
    }
}

export default Resume;