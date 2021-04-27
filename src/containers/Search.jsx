import { connect } from 'react-redux';
import { SearchComponent } from 'components/Search';
import { actions, selectors } from 'reducers/search';

const props = state => ({
  userData: selectors.getUsersData(state),
  albumData: selectors.getAlbumsData(state),
  filters: selectors.getFilter(state)
});

export default connect(props, actions)(SearchComponent);
