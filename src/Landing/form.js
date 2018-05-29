import React from 'react';
import { reduxForm } from 'redux-form';

function LandingForm() {
  return <form onSubmit={() => {}}>FORM</form>;
}

export default reduxForm({
  form: 'Landing',
})(LandingForm);
