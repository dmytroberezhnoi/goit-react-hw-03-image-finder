import React from 'react';
import PropTypes from 'prop-types';

import css from './Searchbar.module.css';

export class Searchbar extends React.Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header class={css.searchbar}>
        <form class={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" class={css.searchFormButton}>
            <span class={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            class={css.searchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
