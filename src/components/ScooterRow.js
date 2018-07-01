import React from 'react';
import PropTypes from 'prop-types';

const ScooterRow = ({robotImageSrc, scooter}) => {
  return (
    <tr className="scooter-row">
      <td><img className="robot-image" alt={scooter.id} src={robotImageSrc}/></td>
      <td className="heading">{scooter.model}</td>
      <td>{scooter.license_plate}</td>
      <td>{scooter.energy_level}%</td>
      <td><span className="purple">{scooter.distance_to_travel}</span></td>
      <td><button>See on map</button></td>
    </tr>
  );
};

ScooterRow.propTypes = {
  scooter: PropTypes.object.isRequired,
  robotImageSrc: PropTypes.string.isRequired
};

export default ScooterRow;
