import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Redirect } from 'react-router';
import { history } from 'config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from 'containers/Search';
import Chat from 'containers/Chat';
import Page from 'components/Page';

const SearchPage = () => <Page Component={Search} />;
const ChatPage = () => <Page Component={Chat} />;
const Home = ()=><Redirect to="/search" />

class AppContainer extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={SearchPage} />
            <Route path="/chat" component={ChatPage} />
          </div>
        </ConnectedRouter>
      </MuiThemeProvider>
    );
  }
}
export default AppContainer;
