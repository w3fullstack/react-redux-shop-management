import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './AddStuff.css';

class Counter extends Component {
    
    render() {
        const { amount, handleDecrease, handleIncrease } = this.props;

        return (
            <div className="counter">
                <Button color="danger" onClick={handleDecrease}>-</Button>
                <span className="value">{amount}</span>
                <Button color="danger" onClick={handleIncrease}>+</Button>
            </div>
        )
    }
}

export default Counter;