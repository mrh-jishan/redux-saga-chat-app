import createSagaMiddleware from "redux-saga";
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import rootReducer from "reducers";
import rootSaga from "sagas/root";

const reducers = combineReducers({
  app:rootReducer,
  router: routerReducer
})
const history = createHistory()
const routeMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware, routeMiddleware));
sagaMiddleware.run(rootSaga);

export { history, store};