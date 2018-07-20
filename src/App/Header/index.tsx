import * as React from 'react';

import logo from './logo.png';

class Header extends React.Component {
  public render() {
    return (
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">Welcome to Web React</h1>
      </header>
    );
  }
}

export default Header;
