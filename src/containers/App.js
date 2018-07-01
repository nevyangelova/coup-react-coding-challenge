import React, { Component } from 'react';
import Scooters from '../containers/Scooters';
import Filters from '../containers/Filters';
import '../stylesheets/containers/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      scooters: [],
      setFilterFormFlag: false
    }
  }

  componentDidMount() {
    this.fetchScooters();
  }

  fetchScooters(filters) {
    fetch('https://qc05n0gp78.execute-api.eu-central-1.amazonaws.com/prod/scooters')
      .then((res) => {
        res.json().then((body) => {
          this.setState({
            scooters: body.data.scooters
          })
        })
      });
  }

  initialiseFiltersForm() {
    this.setState({setFilterFormFlag: true});
  }

  filterScooters(scooters, filters) {
    console.log(filters);
    return scooters.filter((scooter) => {
      return (scooter.model === filters.model || filters.model === null) &&
      (scooter.distance_to_travel < filters.distance_to_travel || filters.distance_to_travel === null) &&
      (scooter.energy_level < filters.energy_level || filters.energy_level === null);
    });
  }

  applyFilters(filters) {
    this.setState({
      scooters: this.filterScooters(this.state.scooters, filters)
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.setFilterFormFlag && <Filters applyFilters={this.applyFilters.bind(this)}/>}
        <Scooters scooters={this.state.scooters} handleInitialiseFiltersForm={this.initialiseFiltersForm.bind(this)}/>
      </div>
    );
  }
}

export default App;
