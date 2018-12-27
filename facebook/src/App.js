import React, { Component, Fragment } from 'react';
import Header from './Components/layouts/Header';
import Sidebar from './Components/layouts/Sidebar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <dir>
          <Sidebar />
        </dir>
      </Fragment>
    );
  }
}

export default App;
