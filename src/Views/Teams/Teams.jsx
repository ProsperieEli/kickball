import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTeams } from "../../Services/teams";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then((resp) => setTeams(resp));
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      <ul>
        {teams.map((team) => {
          return (
            <li key={team.id}>
              <Link to={`/team/${team.id}`}>{team.name}</Link>
            </li>
          );
        })}
      </ul>
      <Link to={"/team/create"}>
        <button>Create your team!</button>
      </Link>
    </div>
    //ignore
  );
}
