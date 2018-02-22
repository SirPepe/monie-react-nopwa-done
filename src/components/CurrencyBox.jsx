import React from "react";
import ReactDOM from "react-dom";
import CurrencySelect from "./CurrencySelect";

export default ({ travelCurrency, homeCurrency, setTravelCurrency, setHomeCurrency }) => (
  <main className="main container">
    <section className="currency">
      <h2><b>Travel</b> currency</h2>
      <CurrencySelect classModifier="travel"
                      selected={ travelCurrency }
                      handleSelect={ setTravelCurrency } />
    </section>
    <section className="currency">
      <h2><b>Home</b> currency</h2>
      <CurrencySelect classModifier="home"
                      selected={ homeCurrency }
                      handleSelect={ setHomeCurrency } />
    </section>
  </main>
);
