import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ value, symbol }) => {
  return (
    <div className="result">
      <span>{value}</span>
      <span>{symbol}</span>
    </div>
  );
};

Result.propTypes = {
  value: PropTypes.string.isRequired,
  symbol: PropTypes.string,
};

Result.defaultProps = {
  value: '0',
};

export default Result;
