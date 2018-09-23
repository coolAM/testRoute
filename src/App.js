import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstComponent from './Components/FirstComponent';
import SecondComponent from './Components/SecondComponent';
import Navigation from './Components/Navigation';
import Products from './Components/Products';

class App extends Component {



  render() {
    return (

        <BrowserRouter>
            <div>
            <Navigation />
            <hr/>
            <Switch>
            <Route strict path='/FirstComponent' component={FirstComponent}/>
            <Route exact path='/SecondComponent/' component={SecondComponent}/>
                <Route path='/Products' component={Products}/>
            </Switch>

            </div>
        </BrowserRouter>
          );
  }
}

export default App;
