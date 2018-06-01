import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FromIcon from '@material-ui/icons/Navigation';
import ToIcon from '@material-ui/icons/Directions';

function getUserLocation() {
  return new Promise((resolve, reject) => {
    const onSuccess = (pos) => {
      const latlng = `${pos.coords.latitude},${pos.coords.longitude}`;
      const url = `https://maps.googleapis.com/maps/api/geocode/json?result_type=political&latlng=${latlng}&key=AIzaSyDVSc4ieJdRYuE6MTBIEQ0e2-W9rMM3190`;
      fetch(url)
        .then(res => res.json())
        .then((data) => {
          const userLocation = data.results[0].formatted_address;
          resolve(userLocation);
        });
    };
    const onFail = err => reject(err);
    navigator.geolocation.getCurrentPosition(onSuccess, onFail);
  });
}

function processLocationData(data) {
  return data.split(',')[0];
}

class LocationInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.type === 'from') {
      getUserLocation()
        .then(data => processLocationData(data))
        .then((location) => {
          this.setState({
            inputText: location,
          });
        });
    }
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value,
    });
  }

  render() {
    const { style, type } = this.props;
    const label = type.charAt(0).toUpperCase() + type.slice(1);
    return (
      <InputLabel className={style}>
        {label}
        <Input
          value={this.state.inputText}
          onChange={this.handleChange}
          startAdornment={
            <InputAdornment position="start">
              {type === 'from' ? <FromIcon /> : <ToIcon />}
            </InputAdornment>
          }
        />
      </InputLabel>
    );
  }
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
