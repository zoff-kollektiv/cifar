import Link from 'gatsby-link';
import React, { Component } from 'react';

import Constraint from '../constraint';
import Network from '../network';
import Person from './person';

const extractFrontmatter = persons =>
  persons.map(person => person.node.frontmatter);

export default class PersonList extends Component {
  state = {
    view: 'list'
  };

  updateView = event => {
    const { value } = event.target;

    this.setState({ view: value });
  };

  render() {
    const { persons, images, slug } = this.props;
    const { view } = this.state;
    const url = typeof window !== 'undefined' && new URL(window.location.href);
    const showGraph =
      (url && url.searchParams.get('view') === 'network') || view === 'network';

    return (
      <Constraint>
        Show as:
        {showGraph ? (
          <Link to={`/persons/${slug}/`}>List</Link>
        ) : (
          <span>List</span>
        )}
        {showGraph ? (
          <span>Network</span>
        ) : (
          <Link to={`/persons/${slug}/?view=network`}>Network</Link>
        )}
        {showGraph && (
          <Network data={extractFrontmatter(persons)} images={images.edges} />
        )}
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
