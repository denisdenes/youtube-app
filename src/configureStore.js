import { createStore, applyMiddleware } from 'redux';
import ReduxThunk                       from 'redux-thunk';
import { composeWithDevTools }          from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer                      from './data';
import { initialState }                 from "./initialState";

export const middlewares = [ ReduxThunk ];

export default createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
