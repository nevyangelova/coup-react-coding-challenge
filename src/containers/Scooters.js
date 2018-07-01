import React from 'react';
import ScooterRow from '../components/ScooterRow';

export class Scooters extends React.Component {
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
              this.props.scooters.map((scooter, index) => {
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
      </div>
    );
  }
}

export default Scooters;
