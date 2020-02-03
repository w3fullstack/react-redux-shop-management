import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ShowStuffContainer from '../ShowStuffs';
import AddStuff from '../AddStuff';
import './Body.css';

class Body extends Component {
    render() {
        return (
            <div className="row body">
                <Route path="/showstuffs" component={() => <ShowStuffContainer /> }/>
                <Route path="/addstuff" component={() => <AddStuff />} />
            </div>
        )
    }
}

export default Body;