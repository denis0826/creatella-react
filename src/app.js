import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AsciiStore from './store/AsciiStore';

const reducer = () => ({ entities: { products: { all: {} } } });
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <AsciiStore />
  </Provider>,
  document.getElementById('root'),
);
