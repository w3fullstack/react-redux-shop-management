import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import './AddStuff.css';

class AddStuff extends Component {
    state = {
        name: "",
        description: "",
        amount: 0,
        price: 0,
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    };
    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        })
    };
    handleAmountChange = (e) => {
        this.setState({
            amount: parseInt(e.target.value)
        })
    };
    handlePriceChange = (e) => {
        this.setState({
            price: parseFloat(e.target.value)
        })
    };
    handleAdd = () => {
        const { name, description, amount, price } = this.state;
        this.props.handleAdd({
            name,
            description,
            amount,
            price
        })
    };

    render() {
        const { name, description, amount, price } = this.state;

        return (
            <div className="addstuff">
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={name} onChange={this.handleNameChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" value={description} onChange={this.handleDescriptionChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="amount">Amount</Label>
                        <Input type="number" name="amount" id="amount" placeholder="0" value={amount} onChange={this.handleAmountChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">Price</Label>
                        <Input type="number" name="price" id="price" placeholder="0" value={price} onChange={this.handlePriceChange} />
                    </FormGroup>
                    <br/>
                    <Button color="primary" onClick={this.handleAdd}>Add</Button>
                </Form>
            </div>
        )
    }
}

export default AddStuff;