import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTeamById } from "../../Services/teams";
import { deleteTeam } from "../../Services/teams";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function TeamDetail({ label, match }) {
  const { teamId } = match.params;
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    getTeamById(teamId)
      .then((resp) => setTeam(resp))
      .finally(() => setLoading(false));
  }, [teamId]);

  if (loading) return <h1>One Moment. . .</h1>;

  const handleSubmit = async () => {
    console.log("hi");
    await deleteTeam(teamId);
    history.push(`/teams`);
  };
  return (
    <>
      <h2>{label}</h2>
      <p>
        <Link to="/teams">Back to Teams</Link>
      </p>
      <p>
        Coming from {team.city}, {team.state}.
      </p>
      <ul>
        {team.players.map((player) => {
          return (
            <Link key={player.id} to={`/players/${player.id}`}>
              <li>
                {player.position} - {player.name}{" "}
              </li>
            </Link>
          );
        })}
      </ul>
      <button type="submit" onClick={handleSubmit}>
        Delete Team
      </button>
      <Link to={`/team/update/${team.id}`}>
        {" "}
        <button type="onClick">Update Team</button>
      </Link>
    </>
  );
}
