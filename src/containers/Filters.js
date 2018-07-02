import React from 'react';
import FiltersForm from '../components/FiltersForm';

export class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        model: null,
        distance_to_travel: null,
        energy_level: null
      }
    }

    this.updateSelectedFilters = this.updateSelectedFilters.bind(this);
    this.applyFilters = this.props.applyFilters.bind(this);
    this.submitFiltersForm = this.submitFiltersForm.bind(this);
  }

  updateSelectedFilters(filter, value) {
    let filterObject = {};
    filterObject[filter] = value;

    const filters = Object.assign({}, this.state.filters, filterObject);
    this.setState({
      filters
    })
  }

  submitFiltersForm(event) {
    event.preventDefault();

    this.applyFilters(this.state.filters);
  }

  render() {
    return (
      <div>
        <FiltersForm
          filters={this.state.filters}
          onSubmit={this.submitFiltersForm}
          onFiltersUpdate={this.updateSelectedFilters}
        />
      </div>
    );
  }
}

export default Filters;
