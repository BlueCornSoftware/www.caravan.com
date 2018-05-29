import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

/* eslint-disable */
const backgroundImage = require('../images/backseat.jpg');
/* eslint-enable */

const styles = {
  card: {
    minWidth: 275,
    minHeight: '80vh',
    color: 'white',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom center',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 100,
  },
  button: {
    color: 'white',
  },
};

function LandingCard(props) {
  const { classes, children } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>{children}</CardContent>
        <CardActions>
          <Button size="small" variant="raised" color="primary" className={classes.button}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

/* eslint-disable */
LandingCard.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
};
/* eslint-enable */

export default withStyles(styles)(LandingCard);
