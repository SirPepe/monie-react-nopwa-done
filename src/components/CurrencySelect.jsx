import React from "react";
import ReactDOM from "react-dom";
import { currencies, convertRelative } from "../lib/currency";

export default ({ selected, handleSelect, classModifier }) => {
  const className = "currency__select currency__select--" + classModifier;
  return(
    <select className={ className }
            value={ selected }
            onChange={ (evt) => handleSelect(evt.target.value) }>
      {
        Array.from(currencies).map( ([ code, { name } ]) => (
          <option key={ code } value={ code }>{ name } ({ code })</option>
        ))
      }
    </select>
  );
};

