import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Functions = ({ onContentClear, onDelete }) => {
  return (
    <section className="functions">
      <Button text="Delete" type="button-long-text" clickHandler={onDelete} />
      <Button
        text="Clear"
        type="button-long-text"
        clickHandler={onContentClear}
      />
    </section>
  );
};

Functions.propTypes = {
  onContentClear: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Functions;
