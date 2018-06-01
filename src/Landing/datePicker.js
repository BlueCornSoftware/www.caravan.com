import React from 'react';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DateTimePicker from 'material-ui-pickers/DateTimePicker';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import InputAdornment from '@material-ui/core/InputAdornment';
import CalendarIcon from '@material-ui/icons/DateRange';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedDateTime: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      /* eslint-disable */
      pickedDateTime: e._d,
      /* eslint-enable */
    });
  }

  render() {
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DateTimePicker
          value={this.state.pickedDateTime}
          onChange={this.handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CalendarIcon />
              </InputAdornment>
            ),
          }}
        />
      </MuiPickersUtilsProvider>
    );
  }
}

export default DatePicker;
