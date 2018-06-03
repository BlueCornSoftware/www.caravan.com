import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { reduxForm } from 'redux-form';
import LocationInput from './locationInput';
import DatePicker from './datePicker';

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  form_item: {
    marginLeft: 20,
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
};

function LandingForm(props) {
  const { classes } = props;
  return (
    <form className={classes.form} onSubmit={() => {}}>
      <LocationInput type="from" style={classes.form_item} />
      <LocationInput type="to" style={classes.form_item} />
      <InputLabel className={classes.form_item}>
        When
        <DatePicker />
      </InputLabel>
      <Button className={classes.form_item} size="medium" variant="raised" color="secondary">
        Find rides
      </Button>
    </form>
  );
}

/* eslint-disable */
LandingForm.propTypes = {
  classes: PropTypes.object,
};
/* eslint-enable */

export default reduxForm({
  form: 'Landing',
})(withStyles(styles)(LandingForm));
