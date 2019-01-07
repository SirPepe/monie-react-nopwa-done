import React from "react";
import ReactDOM from "react-dom";

export default ({ setTravelAmount, travelAmount, homeAmount, travelCurrency, homeCurrency }) => (
  <div className="result container">
    <section className="amount amount--travel">
      <input onChange={ (evt) => setTravelAmount(evt.target.value) }
             value={ travelAmount }
             type="number" min="0" className="amount__input--travel" />
      <span className="amount__currency--travel">{ travelCurrency }</span>&nbsp;=
    </section>
    <section className="amount amount--home">
        <span className="amount__output--home">{ homeAmount }</span>
      <span className="amount__currency--home">{ homeCurrency }</span>
    </section>
  </div>
);
