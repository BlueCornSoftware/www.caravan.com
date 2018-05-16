import React from 'react';
import Button from '@material-ui/core/Button';

class NavMenu extends React.Component {
  render() {
    return (
      <div>
        <Button onClick={() => {
          console.log('HEY')
        }}>
          NAV ONE
        </Button>
      </div>
    );
  }
}

export default NavMenu;
