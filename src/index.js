import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers';
import './assets/styles/globalStyles.css'
import './assets/styles/css/StyleBody.css'
const initialState = {}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, initialState, composeEnhancers)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

