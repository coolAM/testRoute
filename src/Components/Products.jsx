import React, {Component} from 'react';
import { Route, Switch,NavLink } from 'react-router-dom';



class Products extends React.Component{
    render(){
        return <div>
            <h2>Товары</h2>
            <NavLink activeStyle={{color:"green", fontWeight:"bold"}} to='/products/phones'>
                <p>Phone</p>
            </NavLink>
            <NavLink activeClassName='active' to='/products/tablets'>
                <p>Tablets</p>
            </NavLink>
            <Switch>
                <Route path="/products/phones" component={Phone} />
                <Route path="/products/tablets" component={Tablet} />
            </Switch>
        </div>;
    }
}


class Phone extends React.Component{
    render(){
        return <h3>Смартфоны</h3>;
    }
}


class Tablet extends React.Component{
    render(){
        return <h3>Планшеты</h3>;
    }
}

export default Products;