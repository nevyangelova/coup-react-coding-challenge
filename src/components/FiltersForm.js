import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';

const FiltersForm = ({filters, onSubmit, onFiltersUpdate}) => {

  const onModelUpdate = (event) => { onFiltersUpdate('model', event.target.value) }
  const onDistanceUpdate = (value) => { onFiltersUpdate('distance_to_travel', value) }
  const onBatteryLevelUpdate = (value) => { onFiltersUpdate('energy_level', value) }

  return (
    <form>
      <h1>Add filters</h1>

      <div className="radio-input">
        <label className="green">Model</label>
        <div className="ratio-buttons-container" onChange={onModelUpdate} >
          <label key="Gogoro 1st edition">Gogoro 1st edition<input type="radio" value="Gogoro 1st edition" name="Model"/></label>
          <label key="Gogoro 2nd edition">Gogoro 2nd edition<input type="radio" value="Gogoro 2nd edition" name="Model"/></label>
        </div>
      </div>

      <div className="slider-wrapper">
        <p className="green"> Distance to travel </p>
        <Slider
          min={0}
          max={60}
          onChange={onDistanceUpdate} />
      </div>

      <div className="slider-wrapper">
        <p className="green"> Battery Level </p>
        <Slider
          min={0}
          max={100}
          onChange={onBatteryLevelUpdate} />
      </div>

      <input
        type="submit"
        value='Filter'
        onClick={onSubmit}/>
    </form>
  );
};

FiltersForm.propTypes = {
  filters: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onFiltersUpdate: PropTypes.func.isRequired
};

export default FiltersForm;
