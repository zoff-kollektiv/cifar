import React, { Component } from 'react';

import Constraint from '../constraint';
import Network from '../network';
import Person from './person';

import data from './data';

export default class PersonList extends Component {
  state = {
    view: 'list'
  };

  updateView = event => {
    const { value } = event.target;

    this.setState({ view: value });
  }

  render() {
    const { persons } = this.props;

    return (
      <Constraint>
        Show as:

        <label>
          List
          <input type="radio" name="view" value="list" checked={this.state.view === 'list'} onChange={this.updateView} />
        </label>

        <label>
          Network
          <input type="radio" name="view" value="network" checked={this.state.view === 'network'} onChange={this.updateView} />
        </label>

        {this.state.view === 'network' && <Network data={data} />}

        {this.state.view === 'list' && (
          <ul>
            {persons && persons.map(({ node }) => <Person key={node.frontmatter.title} {...node.frontmatter} />)}
          </ul>
        )}
      </Constraint>
    )
  }
};
