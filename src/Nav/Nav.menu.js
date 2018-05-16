import React from 'react';

class NavMenu extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => {
          window.location.href = 'www.google.com'
        }}>
          NAV ONE
        </button>
      </div>
    );
  }
}

export default NavMenu;
