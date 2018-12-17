import React, { Component } from 'react';

import styles from './styles';

export default class Filter extends Component {
  state = {
    value: null
  };

  render() {
    const { filterFn } = this.props;
    const { value } = this.state;

    return (
      <form
        onSubmit={event => {
          event.preventDefault();

          const formData = new FormData(event.target);
          const name = formData.get('name-filter');

          this.setState({ value: name });

          filterFn(value);
        }}
      >
        <style jsx>{styles}</style>

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
            defaultValue={value}
            onChange={event => {
              filterFn(event.target.value);
            }}
          />
        </div>
      </form>
    );
  }
}
