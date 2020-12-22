import React from "react";

export default function Town({ town }) {
  return (
    <>
      <div>
        Towns in {town.name} :
        {town.towns.map((item, index) => (
          <li id={`town${index + 1}`} key={index}>
            {item.name}
          </li>
        ))}
      </div>
    </>
  );
}
