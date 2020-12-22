import React, { useState } from "react";

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

export default Towns;
