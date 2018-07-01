import React from 'react';
import ScooterRow from '../components/ScooterRow';

export class scooters extends React.Component {
  render() {
    return (
      <div className="flex-wrap">
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Model</th>
                <th>License Plate</th>
                <th>Battery Level</th>
                <th>Distance to travel</th>
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
      </div>
    );
  }
}

export default scooters;
