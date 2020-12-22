import React, { useState } from "react";
import Cities from "./cities";

function State({ states }) {
  const [selected, setSelected] = useState(-1);

  const handleClick = ({ target }) => {
    let newSelected = -1;
    states.forEach(function (item, index) {
      if (item.name === target.innerText) newSelected = index;
    });

    if (selected === newSelected) {
      setSelected(-1);
    } else {
      setSelected(newSelected);
    }
  };
  return (
    <div>
      {states.map((state, index) => (
        <button
          key={state.name}
          onClick={handleClick}
          id={`state${index + 1}`}
          className="btn btn-primary m-2">
          {state.name}
        </button>
      ))}
      {selected !== -1 && <Cities cities={states[selected].cities} />}
    </div>
  );
}

export default State;
