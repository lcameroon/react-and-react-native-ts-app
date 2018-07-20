import * as React from 'react';

import Header from './Header';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <Header />
        <p className="app-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
