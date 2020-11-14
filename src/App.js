import React from 'react';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import { AppStore } from './core';


function App() {
  return (
    <Provider store={AppStore}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
