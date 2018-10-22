import React, { Component } from 'react';
import SideNav from './component/home';
import NavBar from './component/home';

class App extends Component {
  render() {
    return (
      <NavBar />
      <SideNav />
    );
  }
}

export default App;
