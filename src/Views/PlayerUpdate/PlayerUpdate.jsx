import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import {
  deletePlayer,
  getPlayerById,
  updatePlayer,
} from "../../Services/players";
import { useEffect } from "react";

export default function PlayerUpdate({ match }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [state, setState] = useState("");
  const [player, setPlayer] = useState("");
  const history = useHistory();
  const { playerId } = match.params;

  useEffect(() => {
    const getPlayer = async () => {
      const player = await getPlayerById(playerId);
      setName(player.name);
      setPosition(player.position);
      setPlayer(player.id);
    };
    getPlayer();
  }, [playerId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updatePlayer(playerId, { name, position });
    history.push(`/players/${playerId}`);
  };

  const handleDelete = async () => {
    await deletePlayer(playerId);
    history.push("/players");
  };

  return (
    <>
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
        <label>State:</label>
        <input
          id="state"
          type="text"
          name="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
      <button type="submit" onClick={handleDelete}>
        Delete Player
      </button>
    </>
  );
}
