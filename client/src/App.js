import React, { Component } from 'react';
import Main from './components/home/main_ui'
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  // componentDidMount() {
  //   axios.post("http://localhost:3001/home", {

  //   }).then(res => {
  //     console.log(res);
  //   });
  // };
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
