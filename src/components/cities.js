import React from "react";
import Town from "./towns";

export default function City({ city, index }) {
  const [townIndex, setTownIndex] = React.useState(index);

  const handleTown = (event) => {
    let index = event.target.id;
    index = index.charAt(index.length - 1) - 1;
    if (townIndex === index) {
      setTownIndex(-1);
      return;
    }
    setTownIndex(index);
  };
  return (
    <>
      <div>
        Cities in {city.name} :
        {city.cities.map((item, index) => (
          <button
            className="cities"
            onClick={handleTown}
            id={`city${index + 1}`}
            key={item.name}>
            {item.name}
          </button>
        ))}
      </div>
      {townIndex !== -1 && <Town town={city.cities[townIndex]} />}
    </>
  );
}
