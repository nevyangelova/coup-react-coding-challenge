import React from 'react';
import ScooterRow from '../components/ScooterRow';

export class Scooters extends React.Component {
  constructor() {
    super();

    this.state = {
      limitScootersTable: 10
    }

    this.loadMoreScooters = this.loadMoreScooters.bind(this);
  }

  loadMoreScooters() {
    this.setState({limitScootersTable: this.state.limitScootersTable + 10})
  }

  render() {
    return (
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Model</th>
              <th>License Plate</th>
              <th>Battery Level</th>
              <th>Distance to travel</th>
              <th><button className="filters-button" label="Filters" onClick={this.props.handleInitialiseFiltersForm}>Filters</button></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.scooters.slice(0, this.state.limitScootersTable).map((scooter, index) => {
                let imgLink = `https://robohash.org/${index}?set=set3`;

                return <ScooterRow
                  key={scooter.id}
                  scooter={scooter}
                  robotImageSrc={imgLink}
                />
              })
            }
          </tbody>
        </table>
        <button className="load-more-button" onClick={this.loadMoreScooters} label="Load More">Load More<i className="fa fa-angle-double-down"></i></button>
      </div>
    );
  }
}

export default Scooters;
