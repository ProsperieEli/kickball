import React from "react";
import { createTeam } from "../../Services/teams";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Createteam() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const history = useHistory();
  //state
  //handlesubmit
  //onSubmit
  //onChange for input

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await createTeam({ name, city, state });
    history.push(`/team/${resp[0].id}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>City:</label>
      <input
        id="city"
        type="text"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <label>State:</label>
      <input
        id="state"
        type="dropdown"
        name="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />

      <button type="submit" aria-label="Create Team">
        Add Team.
      </button>
    </form>
  );
}
