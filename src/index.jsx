import React from "react";
import { render } from "react-dom";
import {applyMiddleware, createStore} from 'redux'
import  {Provider} from 'react-redux'
import App from "./App.jsx";
import {rootReducer} from "./store/rootReducer.js";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk))

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
