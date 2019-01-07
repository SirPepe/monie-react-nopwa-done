import React from "react";
import ReactDOM from "react-dom";

export default ({ fetchRates }) => (
  <header className="header">
    <div className="container">
      <h1>Monie <span>- Exchange Rate Calculator PWA</span></h1>
      <p>
        <a onClick={ () => fetchRates() } className="refresh">↻ <span>Refresh rates</span></a>
      </p>
    </div>
  </header>
);
