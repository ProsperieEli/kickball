import React from "react";
import { useState } from "react";
import { createPlayer, getPlayerById } from "../../Services/players";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function PlayerCreate({ match }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const { teamId } = match.params;
  const history = useHistory();

  // useEffect(() => {
  //   const createPlayer = async () => {
  //     const player = await getPlayerById(playerId);
  //     setName(player.name);
  //     setPosition(player.position);
  //     setPlayer(player.id);
  //   };
  //   createPlayer();
  // }, [playerId]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    await createPlayer({ name, position, teamId });
    history.push(`/team/${teamId}`);
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
      <label>Position</label>
      <input
        id="position"
        type="text"
        name="position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <button type="submit">Add to Team</button>
    </form>
  );
}
