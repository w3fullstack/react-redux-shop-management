import React, { Component } from 'react';
import Stuff from './Stuff';
import './ShowStuffs.css';

class ShowStuffContainer extends Component {
    render() {
        const { data, handleRemove } = this.props;

        return (
            <div className="row stuff-container">
                { data.map(item => <Stuff data={item} onRemove={handleRemove}/>) }
            </div>
        )
    }
}

export default ShowStuffContainer;