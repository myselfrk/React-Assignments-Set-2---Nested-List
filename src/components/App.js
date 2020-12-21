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

function Cities(props) {
  const { cities, showTowns, setShowTowns } = props;
  const { towns, selected } = showTowns;

  const handleClick = ({ target }) => {
    const newShowTowns = { ...showTowns };
    newShowTowns.towns = !newShowTowns.towns;
    newShowTowns.selected = target.innerText;
    setShowTowns(newShowTowns);
  };

  return (
    <ul className="list-group ml-4">
      {cities.map((city, index) => (
        <div>
          <li
            key={city.name + index}
            id={`city${index + 1}`}
            onClick={handleClick}
            className="list-group-item">
            {city.name}
          </li>
          {towns && selected === city.name && <Towns towns={city.towns} />}
        </div>
      ))}
    </ul>
  );
}

function State(props) {
  const { states, showCities, setShowCities, showTowns, setShowTowns } = props;
  const { cities, selected } = showCities;

  const handleClick = ({ target }) => {
    const newShowCities = { ...showCities };
    newShowCities.cities = !newShowCities.cities;
    newShowCities.selected = target.innerText;
    setShowCities(newShowCities);

    const newShowTowns = { ...showTowns };
    newShowTowns.towns = false;
    setShowTowns(newShowTowns);
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
          {cities && selected === state.name && (
            <Cities
              showTowns={showTowns}
              setShowTowns={setShowTowns}
              cities={state.cities}
            />
          )}
        </div>
      ))}
    </ul>
  );
}

function App() {
  const [showCities, setShowCities] = useState({ cities: false, selected: "" });
  const [showTowns, setShowTowns] = useState({ towns: false, selected: "" });
  let rest = { showCities, setShowCities, showTowns, setShowTowns };
  return (
    <div id="main">
      <State {...rest} states={states} />
    </div>
  );
}

export default App;
