import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Menu.css'

class componentName extends Component {
    render() {
        return (
            <div id="topNav">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Resume</Link>
                        </li>
                        <li>
                            <Link to="/yelpcopy">YelpCopy App</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default componentName;