import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import promiseMiddleware from "redux-promise";
import rootReducer from "./reducers/index";
import { fetchRates } from "./actions/index";
import HeaderContainer from "./containers/HeaderContainer";
import CurrencyBoxContainer from "./containers/CurrencyBoxContainer";
import ResultBoxContainer from "./containers/ResultBoxContainer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(promiseMiddleware)
));

// React to init
const waitForInitUnsubscribe = store.subscribe( () => {
  const { isInitialized } = store.getState();
  if (isInitialized) {
    document.body.classList.add("loaded");
    waitForInitUnsubscribe();
  }
});

// Trigger initial rate request
store.dispatch(fetchRates());

ReactDOM.render(
  <Provider store={ store }>
    <React.Fragment>
      <HeaderContainer />
      <CurrencyBoxContainer />
      <ResultBoxContainer />
    </React.Fragment>
  </Provider>,
  document.querySelector(".root")
);
