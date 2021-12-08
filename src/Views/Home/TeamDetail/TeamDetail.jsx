import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTeamById } from "../../../Services/teams";

export default function TeamDetail({ label, match }) {
  const { teamId } = match.params;
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTeamById(teamId)
      .then((resp) => setTeam(resp))
      .finally(() => setLoading(false));
  }, [teamId]);

  if (loading) return <h1>One Moment. . .</h1>;
  return (
    <>
      <h2>{label}</h2>
      <p>
        <Link to="/teams">Back to Teams</Link>
      </p>
      <p>
        Coming from {team.city}, {team.state}
      </p>
      <ul>
        {team.players.map((player) => {
          return (
            <Link key={player.id} to={`/players/${player.id}`}>
              <li>
                {player.position} - {player.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}
