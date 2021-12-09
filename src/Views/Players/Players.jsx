import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPlayers } from "../../Services/players";

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then((resp) => setPlayers(resp));
  }, []);
  return (
    <div>
      <h1>Players</h1>
      <ul>
        {players.map((player) => {
          return (
            <Link key={player.id} to={`/players/${player.id}`}>
              <li>{player.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
