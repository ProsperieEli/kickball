import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPlayerById } from "../../../Services/players";

export default function PlayerDetail({ label, match }) {
  const { playerId } = match.params;
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlayerById(playerId)
      .then((resp) => setPlayer(resp))
      .finally(() => setLoading(false));
  }, [playerId]);

  if (loading) return <h1>Gathering Data. . .</h1>;
  return (
    <>
      <h2>{label}</h2>
      <p>
        <Link to="/teams">Back to Teams</Link>
      </p>
      <div key={player.id}>
        <h1>{player.name}</h1>
        <h2>{player.position}</h2>
      </div>
    </>
  );
}
