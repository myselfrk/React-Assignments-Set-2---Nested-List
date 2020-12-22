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
    <ul className="list-group ml-4">
      {towns.map((town, index) => (
        <li key={town.name} id={`town${index + 1}`} className="list-group-item">
          {town.name}
        </li>
      ))}
    </ul>
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
    <ul className="list-group ml-4">
      {cities.map((city, index) => (
        <div>
          <li
            key={city.name}
            id={`city${index + 1}`}
            onClick={handleClick}
            className="list-group-item">
            {city.name}
          </li>
          {cities[selected] === city && <Towns towns={city.towns} />}
        </div>
      ))}
    </ul>
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
    <ul className="list-group">
      {states.map((state, index) => (
        <div>
          <li
            key={state.name}
            onClick={handleClick}
            id={`state${index + 1}`}
            className="list-group-item">
            {state.name}
          </li>
          {states[selected] === state && <Cities cities={state.cities} />}
        </div>
      ))}
    </ul>
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
