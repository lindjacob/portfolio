import React, { Component } from 'react';

class Resume extends Component {
    componentDidMount() {
        const favicon = document.getElementById('favicon');
        favicon.href = './jl.ico';
      }
    
    render() {
        return (
            <div>
                <h1>My resume is currently under development...</h1>
            </div>
        );
    }
}

export default Resume;