import React, { useState } from "react";
import Towns from "./towns";

function Cities({ cities }) {
  const [selected, setSelected] = useState(-1);

  const handleClick = ({ target }) => {
    let newSelected = -1;
    cities.forEach(function (item, index) {
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
      {cities.map((city, index) => (
        <button
          key={city.name}
          id={`city${index + 1}`}
          onClick={handleClick}
          className="btn btn-primary m-2">
          {city.name}
        </button>
      ))}
      {selected !== -1 && <Towns towns={cities[selected].towns} />}
    </div>
  );
}

export default Cities;
