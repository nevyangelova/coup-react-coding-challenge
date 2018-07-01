import React, { Component } from 'react';
import Scooters from '../containers/Scooters';
import '../stylesheets/containers/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      scooters: []
    }
  }

  componentDidMount() {
    this.fetchscooters();
  }

  fetchscooters(filters) {
    fetch('https://qc05n0gp78.execute-api.eu-central-1.amazonaws.com/prod/scooters')
      .then((res) => {
        res.json().then((body) => {
          this.setState({
            scooters: body.data.scooters
          })
        })
      });
  }

  render() {
    return (
      <div className="App">
        <Scooters scooters={this.state.scooters}/>
      </div>
    );
  }
}

export default App;
