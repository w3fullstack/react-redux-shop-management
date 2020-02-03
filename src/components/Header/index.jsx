import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="row header">
                <Nav>
                    <NavItem>
                        <NavLink tag={Link} to="/showstuffs">Show Stuffs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/addstuff">Add Stuff</NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}

export default Header;