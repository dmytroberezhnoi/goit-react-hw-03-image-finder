import PropTypes from 'prop-types';

import css from './Button.module.css';

export const Button = ({ onClick }) => (
  <button onClick={onClick} className={css.button}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
