import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'reactstrap';
import { removeStuff } from '../../actions';
import './ShowStuffs.css';

class Stuff extends Component {
    render() {
        const { data, handleRemove } = this.props;
        return (
            <div className="row stuff">
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-2">Name:</div>
                        <div className="col-sm-10">{data.name}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">Description:</div>
                        <div className="col-sm-10">{data.description}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">Amount:</div>
                        <div className="col-sm-10">{data.amount}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">Price:</div>
                        <div className="col-sm-10">{data.price}</div>
                    </div><br />
                    <div className="row">
                        <div className="col">
                            <Button color="danger" onClick={() => handleRemove(data)}>Remove</Button> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = () => { return {} };

const mapDispatchToProps = dispatch => ({
    handleRemove: item => dispatch(removeStuff(item))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Stuff);