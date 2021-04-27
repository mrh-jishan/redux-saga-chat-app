import React from 'react';
import { PropTypes } from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { DATE_FILTER } from 'lib/constants';

const formStyle = {
  display: 'flex',
  justifyContent: 'center'
};
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    const { filters } = props;
    this.state = { filters };
  }
  static propTypes = {
    filters: PropTypes.object.isRequired,
    changeFilter: PropTypes.func.isRequired
  };

  changeFilter = (event, index, value) => {
    const date = value;
    this.setState(state => {
      return { filters: { ...state.filters, date } };
    });
    this.props.changeFilter(this.state.filters);
  };
  render() {
    return (
      <div style={formStyle}>
        <SelectField
          value={this.state.filters.date}
          onChange={this.changeFilter}
        >
          {Object.keys(DATE_FILTER).map(key => {
            return (
              <MenuItem key={key} value={DATE_FILTER[key]} primaryText={key} />
            );
          })}
        </SelectField>
      </div>
    );
  }
}
export default SearchForm;
