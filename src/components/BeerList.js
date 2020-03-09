import React, { Component } from 'react';

import axios from 'axios';

import {Link} from 'react-router-dom';
import Loader from './Loader';

class BeerList extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => response.data)
      .then(data => this.setState({beers: data}))
  }

  render() {
    if (this.state.beers.length < 1) return <Loader>loading beers list...</Loader>

    return (
      <div className="BeerList">
        <ul>
          {this.state.beers.map(beer => (
            <li key={beer._id}>
              <img src={beer.image_url} alt="" />
              <div>
                <strong><Link to={`/beers/${beer._id}`}>{beer.name}</Link></strong>
                <p>{beer.tagline}</p>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BeerList;