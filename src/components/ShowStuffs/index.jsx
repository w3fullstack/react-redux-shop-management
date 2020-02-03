import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stuff from './Stuff';
import './ShowStuffs.css';

class ShowStuffContainer extends Component {
    render() {
        const { data, handleRemove } = this.props;

        return (
            <div className="stuff-container col-md-8 col-sm-10">
                <h1>Stuffs List</h1><br/>
                { (data && data.length > 0) ? data.map((item, index) => <Stuff key={index} data={item} onRemove={handleRemove}/>) : "No data" }
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        data: state.stuffs.data
    }
}

export default connect(mapStateToProps)(ShowStuffContainer);