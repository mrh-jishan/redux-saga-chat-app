import React from 'react';
import { PropTypes } from 'prop-types';
import { Tabs, Tab } from 'material-ui/Tabs';

const styles = {
  backgroundColor: 'black'
};
class Navbar extends React.Component {
  static PropTypes = {
    location: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    changeTab: PropTypes.func.isRequired
  };
  onChange = ({ props }) => {
    const { value } = props;
    this.props.changeTab(value);
  };
  render() {
    return (
      <Tabs value={this.props.location} style={styles}>
        <Tab
          onActive={this.onChange}
          style={styles}
          label="Search"
          value="/search"
        />
        <Tab
          onActive={this.onChange}
          style={styles}
          label="Chat"
          value="/chat"
        />
      </Tabs>
    );
  }
}
export default Navbar;
