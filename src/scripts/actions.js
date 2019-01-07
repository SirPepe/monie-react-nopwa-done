import { getRates } from "./lib/currency";

export const setTravelCurrency = (code) => {
  return {
    type: "SET_TRAVEL_CURRENCY",
    payload: code,
  };
}

export const setHomeCurrency = (code) => {
  return {
    type: "SET_HOME_CURRENCY",
    payload: code,
  };
}

export const setTravelAmount = (amount) => {
  return {
    type: "SET_TRAVEL_AMOUNT",
    payload: Number(amount),
  };
}

export const fetchRates = () => {
  return {
    type: "FETCH_RATES",
    payload: getRates(),
  };
}
