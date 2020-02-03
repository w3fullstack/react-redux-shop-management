import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header';
import Body from '../Body';

class Layout extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid layout">
                    <Header />
                    <Body />
                </div>
            </Router>
        )
    }
}

export default Layout;