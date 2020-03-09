import React from 'react';

import axios from 'axios';

export default class NewBeer extends React.Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    fisrt_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({[name]: value});
  }

  handleSubmit = event => {
    event.preventDefault()

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then(response => response.data)
      .then(data => {
        // Reset form
        this.setState({
          name: "",
          tagline: "",
          description: "",
          fisrt_brewed: "",
          brewers_tips: "",
          attenuation_level: "",
          contributed_by: ""
        })

        this.props.history.push('/beers')
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              <em>Name</em>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </label>
          </p>

          <p>
            <label>
              <em>Tagline</em>
              <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleChange} />
            </label>
          </p>
          
          <p>
            <label>
              <em>Description</em>
              <textarea name="description" value={this.state.description} onChange={this.handleChange}></textarea>
            </label>
          </p>

          <p>
            <label>
              <em>First brewed</em>
              <input type="date" name="first_brewed" value={this.state.first_brewed} onChange={this.handleChange} />
            </label>
          </p>

          <p>
            <label>
              <em>Brewers Tips</em>
              <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange} />
            </label>
          </p>

          <p>
            <label>
              <em>Attenuation Level</em>
              <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange} />
            </label>
          </p>

          <p>
            <label>
              <em>Contributed by</em>
              <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleChange} />
            </label>
          </p>

          <p>
            <button className="btn">Add new</button>
          </p>
        </form>
      </>
    );
  }
}