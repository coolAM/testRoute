import React, {Component} from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';




class Navigation extends Component {

    render() {

        return (
            <div>
                <NavLink activeStyle={{color:"green", fontWeight:"bold"}} to='./FirstComponent'>
                    <p>First Component</p>
                </NavLink>
                <NavLink activeClassName='active' to='./SecondComponent'>
                    <p>Second Component</p>
                </NavLink>
                <NavLink to='./Products'>
                    <p>Products</p>

                </NavLink>
            </div>
        )
    }
}

export default Navigation;