import React from 'react';
import PropTypes from 'prop-types';

function showNotImplemented() {
  console.warn('This function is not implemented yet.');
}

// function onClicks(){
//   this.props.onClick(this.props.children);
// }


const CalcButton = (props) => {
  const { className, children, onClick} = props;
  const extraClass = className || '';

  return (
    <button
      className={`calc-btn ${extraClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}


CalcButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

CalcButton.defaultProps = {
  onClick: showNotImplemented,
};

export default CalcButton;
