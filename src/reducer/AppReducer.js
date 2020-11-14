import { CounterReducer } from './CounterReducer';

const initialState = {

};


// reducer has this two parameters (state, action)
// this equivalent to the mapStateToProps
export const AppReducer = (state = initialState, action) => {
  const reducers = {
    counter: CounterReducer
  };

  Object.keys(reducers).map((key) => {
    const reducer = reducers[key];
    const oldState = state[key];
    const newState = reducer(oldState, action);
    state = {
      [key]: newState
    };
    return null
  });

  return state;
};