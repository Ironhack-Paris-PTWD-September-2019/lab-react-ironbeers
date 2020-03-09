import React, { Component } from 'react';
import Icon from './Icon.js'
import './App.scss';

import {Switch, Route, Link} from 'react-router-dom';

import Home from './components/Home.js';
import BeerList from './components/BeerList';
import Beer from './components/Beer';
import NewBeer from './components/NewBeer';

class App extends Component {
  render() {
    return (
      <Route render={props => (
        <div className="App" data-route={props.location.pathname}>
          <header>
            <h1>
              <Link to="/">
                <Icon name="home" />
              </Link>
            </h1>
          </header>
          
          <main>
            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/beers" component={BeerList} />

              <Route exact path="/beers/:id" render={props => {
                const beerId = props.match.params.id

                return (
                  <Beer beerId={beerId} />
                );
              }} />

              <Route exact path="/random-beer" component={Beer} />

              <Route exact path="/new-beer" render={props => {
                console.log('props=', props)
                return (
                  <NewBeer {...props} />
                );
              }} />

            </Switch>
          </main>
        </div>
      )} />
    );
  }
}

export default App;
