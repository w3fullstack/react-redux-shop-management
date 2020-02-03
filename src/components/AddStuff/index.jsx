import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addStuff } from '../../actions';
import './AddStuff.css';

class AddStuff extends Component {
    state = {...this.resetState};

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
        this.setState({...this.resetState});
    };
    resetState = {
        name: "",
        description: "",
        amount: 0,
        price: 0,
    }

    render() {
        const { name, description, amount, price } = this.state;

        return (
            <div className="addstuff col-md-8 col-sm-10">
                <h1>Add Stuff</h1><br/>
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
let mapStateToProps = () => { return {} };
const mapDispatchToProps = dispatch => ({
    handleAdd: item => dispatch(addStuff(item))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddStuff);