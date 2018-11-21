import Link from 'gatsby-link';
import React, { Component } from 'react';

import Constraint from '../constraint';
import Network from '../network';
import Person from './person';
import styles from './styles';

const extractFrontmatter = persons =>
  persons.map(person => person.node.frontmatter);

const filterPersonsByName = (persons, name) =>
  !name ? persons : persons.filter(_ => _.node.frontmatter.name.includes(name));

const findPersonsImage = (images, id) =>
  images.find(({ node: { parent: { absolutePath } } }) => {
    const normalizedId = id > 10 ? id : `0${id}`;
    return absolutePath.includes(`/${normalizedId}-`);
  });

export default class PersonList extends Component {
  state = {
    persons: [],
    view: 'list'
  };

  constructor(props) {
    super(props);

    this.state.persons = props.persons;
  }

  updateNameFilter = name => {
    const { persons } = this.props;

    this.setState(state => ({
      ...state,
      persons: filterPersonsByName(persons, name)
    }));
  };

  updateView = event => {
    const { value } = event.target;

    this.setState({ view: value });
  };

  render() {
    const { persons: initialPersons, images, slug } = this.props;
    const { persons, view } = this.state;
    const url = typeof window !== 'undefined' && new URL(window.location.href);
    const hasInitialPersons = initialPersons && initialPersons.length > 0;
    const showGraphSwitch = hasInitialPersons && slug !== 'all';
    const showFilter = hasInitialPersons;
    const showGraph =
      (url && url.searchParams.get('view') === 'network') || view === 'network';

    return (
      <Constraint>
        <style jsx>{styles}</style>

        {showFilter && (
          <form
            onSubmit={event => {
              event.preventDefault();

              const formData = new FormData(event.target);
              const name = formData.get('name-filter');

              this.updateNameFilter(name);
            }}
          >
            <div className="filter">
              {/* eslint-disable-next-line */}
              <label htmlFor="name-filter" className="filter-label">
                Filter by name
              </label>

              <input
                type="text"
                name="name-filter"
                id="name-filter"
                className="filter-input"
                onChange={event => {
                  this.updateNameFilter(event.target.value);
                }}
              />
            </div>

            <button type="submit" className="filter-submit">
              Filter
            </button>
          </form>
        )}

        {showGraphSwitch && (
          <>
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
              <Network
                data={extractFrontmatter(persons)}
                images={images.edges}
              />
            )}
          </>
        )}

        {!showGraph && (
          <ul className="person-list">
            {persons &&
              persons.length > 0 &&
              persons.map(({ node }) => (
                <Person
                  key={node.frontmatter.name}
                  image={findPersonsImage(images.edges, node.frontmatter.id)}
                  {...node}
                />
              ))}
          </ul>
        )}
      </Constraint>
    );
  }
}
