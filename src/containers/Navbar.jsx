import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Navbar from 'components/Navbar';
const props = state => ({ location: state.router.location.pathname });
const actions = dispatch => ({
  changeTab: value => {
    dispatch(push(value));
  }
});
export default connect(props, actions)(Navbar);
