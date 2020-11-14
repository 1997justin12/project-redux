const initialState = {
  counter: 0
};

export const CounterReducer = (state = initialState, action) => {
  const { type = '', payload = {} } = action || {};
  let { counter = 0 } = state || {};
  switch (type) {
    case 'COUNTER_INCREASE':
      counter += 1;
      state = {
        counter
      };
      break;
    case 'COUNTER_DECREASE':
      counter -= 1;
      state = {
        counter
      };
      break;
  }
  return state;
}