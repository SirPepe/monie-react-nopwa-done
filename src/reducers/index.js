import { combineReducers } from "redux";
import { convertRelative } from "../lib/currency";

const travelCurrencyReducer = (state = "GBP", action) => {
  if (action.type === "SET_TRAVEL_CURRENCY") {
    return action.payload;
  } else {
    return state;
  }
}

const homeCurrencyReducer = (state = "EUR", action) => {
  if (action.type === "SET_HOME_CURRENCY") {
    return action.payload;
  } else {
    return state;
  }
}

const travelAmountReducer = (state = 1, action) => {
  if (action.type === "SET_TRAVEL_AMOUNT") {
    return action.payload;
  } else {
    return state;
  }
}

const initReducer = (state = false, action) => {
  if (state === false && action.type === "FETCH_RATES" && !action.error) {
    return true;
  } else {
    return state;
  }
}

const ratesReducer = (state = null, action) => {
  if (action.type === "FETCH_RATES" && !action.error) {
    console.log(action.payload.rates)
    return action.payload.rates;
  } else {
    return state;
  }
}

const precisionRound = (number, precision) => {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
};

const homeAmountReducer = (rates, travelCurrency, homeCurrency, travelAmount, action) => {
  switch (action.type) {
    case "SET_HOME_CURRENCY":
    case "SET_TRAVEL_CURRENCY":
    case "SET_TRAVEL_AMOUNT":
    case "FETCH_RATES": {
      if (rates) {
        const homeAmount = convertRelative(rates, travelCurrency, homeCurrency) * travelAmount;
        return precisionRound(homeAmount, 2);
      } else {
        return null;
      }
    }
    default:
      return null;
  }
}

export default (state = {}, action) => {
  const travelCurrency = travelCurrencyReducer(state.travelCurrency, action);
  const homeCurrency = homeCurrencyReducer(state.homeCurrency, action);
  const travelAmount = travelAmountReducer(state.travelAmount, action);
  const isInitialized = initReducer(state.isInitialized, action);
  const rates = ratesReducer(state.rates, action);
  const homeAmount = homeAmountReducer(rates, travelCurrency, homeCurrency, travelAmount, action);
  return { travelCurrency, homeCurrency, travelAmount, isInitialized, rates, homeAmount }
};
