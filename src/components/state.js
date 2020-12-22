import React, { useState } from "react";
import City from "./cities";

export default function State({ states }) {
  const [cityIndex, setCityIndex] = useState(-1);
  const [TownIndex, setTownIndex] = useState(-1);

  const handleCity = (event) => {
    let index = event.target.id;
    index = index.charAt(index.length - 1) - 1;
    if (cityIndex === index) {
      setCityIndex(-1);
      return;
    }
    setCityIndex(index);
    setTownIndex(-1);
  };
  return (
    <>
      States :
      {states.map((state, index) => (
        <button
          className="states"
          key={state.name}
          onClick={handleCity}
          id={`state${index + 1}`}>
          {state.name}
        </button>
      ))}
      {cityIndex !== -1 && <City index={TownIndex} city={states[cityIndex]} />}
    </>
  );
}
