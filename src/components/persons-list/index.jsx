import React, { Component } from 'react';

import Constraint from '../constraint';
import Network from '../network';
import Person from './person';

const extractFrontmatter = persons =>
  persons.map(person => person.node.frontmatter);

const updateHistory = view => {
  const url = typeof window !== 'undefined' && new URL(window.location.href);
  const param = 'view';

  if (url && view === 'network') {
    url.searchParams.append(param, 'network');
  } else if (url) {
    url.searchParams.delete(param);
  }

  window.history.pushState(null, document.title, url);
};

export default class PersonList extends Component {
  state = {
    view: 'list'
  };

  updateView = event => {
    const { value } = event.target;

    updateHistory(value);

    this.setState({ view: value });
  };

  render() {
    const { persons } = this.props;
    const { view } = this.state;
    const url = typeof window !== 'undefined' && new URL(window.location.href);
    const showGraph =
      (url && url.searchParams.get('view') === 'network') || view === 'network';

    return (
      <Constraint>
        Show as:
        <label>
          List
          <input
            type="radio"
            name="view"
            value="list"
            checked={!showGraph}
            onChange={this.updateView}
          />
        </label>
        <label>
          Network
          <input
            type="radio"
            name="view"
            value="network"
            checked={showGraph}
            onChange={this.updateView}
          />
        </label>
        {console.log('what', extractFrontmatter(persons))}
        {showGraph && <Network data={extractFrontmatter(persons)} />}
        {!showGraph && (
          <ul>
            {persons &&
              persons.map(({ node }) => (
                <Person key={node.frontmatter.title} {...node} />
              ))}
          </ul>
        )}
      </Constraint>
    );
  }
}
