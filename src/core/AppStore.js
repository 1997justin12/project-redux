import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { AppReducer } from './../reducer/AppReducer';

const makeStore = (reducer = {}) => {
  // create store receive two parameters, one is the reducer, secons is the action
  return createStore(
    reducer.reducer,
    applyMiddleware(thunk)
  );
}

export const AppStore = makeStore({
  reducer: AppReducer
});