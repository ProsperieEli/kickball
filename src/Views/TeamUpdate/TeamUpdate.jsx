import React from "react";
import { getTeamById, updateTeam } from "../../Services/teams";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export default function TeamUpdate({ match }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const history = useHistory();
  const { teamId } = match.params;

  useEffect(() => {
    const getTeam = async () => {
      const team = await getTeamById(teamId);
      setName(team.name);
      setCity(team.city);
      setState(team.state);
    };
    getTeam();
  }, [teamId]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await updateTeam(teamId, { name, city, state });
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
        type="text"
        name="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />

      <button type="submit" aria-label="Update team">
        Update team.
      </button>
    </form>
  );
}
