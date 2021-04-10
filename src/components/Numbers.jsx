import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const arr = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

const renderButtons = (onNumber) => {
  return arr.map((e) => (
    <Button key={e} text={e.toString()} clickHandler={onNumber} />
  ));
  //genera el componente iterando el array de números <Button text="1" clickHandler={onNumber} />
};

const Numbers = ({ onNumber }) => {
  return <section className="numbers">{renderButtons(onNumber)}</section>;
};

Numbers.propTypes = {
  onNumber: PropTypes.func.isRequired,
};

export default Numbers;
