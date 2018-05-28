import React from 'react'
import { reduxForm } from 'redux-form'

function LandingForm(props) {
  const { handleSubmit } = props;
  return <form onSubmit={handleSubmit}>FORM</form>
}

export default reduxForm({
  form: 'Landing',
})(LandingForm);
