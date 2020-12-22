import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function Towns({ towns }) {
  return (
    <h3>
      {towns.map((town, index) => (
        <span
          key={town.name}
          id={`town${index + 1}`}
          className="badge badge-primary m-2">
          {town.name}
        </span>
      ))}
    </h3>
  );
}

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

function App() {
  return (
    <div id="main">
      <State states={states} />
    </div>
  );
}

export default App;
