import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header';
import './Layout.css';


import ShowStuffContainer from '../ShowStuffs';
import AddStuff from '../AddStuff';

class Layout extends Component {
    state = {
        data: [
            { name: "aaa", description: "description1", price: 1, amount: 1},
            { name: "ccc", description: "description2", price: 5, amount: 2},
            { name: "bbb", description: "description3", price: 5, amount: 1},
            { name: "ddd", description: "description4", price: 3, amount: 1},
            { name: "eee", description: "description5", price: 1, amount: 6},
        ]
    };

    render() {
        return (
            <Router>
                <div className="container-fluid layout">
                    <Header />
                    <div className="row body">
                        <Route path="/showstuffs" component={() => <ShowStuffContainer /> }/>
                        <Route path="/addstuff" component={() => <AddStuff />} />
                    </div>
                </div>
            </Router>
        )
    }
}

export default Layout;