import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FromIcon from '@material-ui/icons/Navigation';
import ToIcon from '@material-ui/icons/Directions';

function LocationInput(props) {
  const { style, type } = props;
  const label = type.charAt(0).toUpperCase() + type.slice(1);
  return (
    <InputLabel className={style}>
      {label}
      <Input
        startAdornment={
          <InputAdornment position="start">
            {type === 'from' ? <FromIcon /> : <ToIcon />}
          </InputAdornment>
        }
      />
    </InputLabel>
  );
}

/* eslint-disable */
LocationInput.propTypes = {
  style: PropTypes.string,
  type(props, propName, componentName) {
    const propValue = props[propName];
    if (typeof props[propName] !== 'string') {
      return new Error(
        `${propName} in ${componentName} requires a string, you passed in ${typeof propValue}`,
      );
    }
    if (propValue === 'to' || propValue === 'from') {
      return;
    } else {
      return new Error(`${propName} in ${componentName} needs to equal "to" or "from"`);
    }
  },
};

LocationInput.defaultProps = {
  type: 'from',
};
/* eslint-enable */

export default LocationInput;
