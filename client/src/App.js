import React, { Component } from 'react';
import SideNav from './component/home';
import NavBar from './component/home';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SideNav />
      </div>
    );
  }
}

export default App;
