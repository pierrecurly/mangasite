import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import MainHeader from './components/home/main_header'
import MainRoute from './components/home/main_route'
import MainFooter from './components/home/main_footer'

class App extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <MainRoute />
        <MainFooter />
      </div>
    );
  }
}

export default App;