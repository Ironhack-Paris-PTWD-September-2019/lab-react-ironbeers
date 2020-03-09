import React from 'react';

import axios from 'axios';

import Loader from './Loader';

export default class Beer extends React.Component {
  state = {
    beer: {}
  }

  componentDidMount() {
    //
    // Determine the API endpoint url to call
    //
    //  1. if we have a prop `beerId` => call /beers/<beerId>
    //  2. else => get a random beer /beers/random
    //

    let url;
    if (this.props.beerId) {
      url = `https://ih-beers-api2.herokuapp.com/beers/${this.props.beerId}`
    } else {
      url = `https://ih-beers-api2.herokuapp.com/beers/random`
    }

    axios.get(url)
      .then(response => response.data)
      .then(data => this.setState({beer: data}))
  }

  render() {
    const beer = this.state.beer;

    if (!beer._id) return <Loader>loading beer...</Loader>;

    return (
      <>
        <img src={beer.image_url} alt="" />

        <div className="header">
          <div>
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
          </div>
          
          <dl>
            <dd className="attenuation_level">{beer.attenuation_level}</dd>
            <dd className="first_brewed"><time>{beer.first_brewed}</time></dd>
          </dl>
        </div>

        <div>{beer.description}</div>

        <p className="copy">{beer.contributed_by}</p>
      </>
    );
  }

}