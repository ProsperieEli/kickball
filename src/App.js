import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Createteam from "./Views/CreateTeam/Createteam";
import Home from "./Views/Home/Home";
import PlayerDetail from "./Views/PlayerDetail/PlayerDetail";
import Players from "./Views/Players/Players";
import PlayerUpdate from "./Views/PlayerUpdate/PlayerUpdate";
import TeamDetail from "./Views/TeamDetail/TeamDetail";
import Teams from "./Views/Teams/Teams";
import TeamUpdate from "./Views/TeamUpdate/TeamUpdate";
import PlayerCreate from "./Views/PlayerCreate/PlayerCreate";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/Teams" exact>
            Teams
          </NavLink>
          <NavLink to="/Players" exact>
            Players
          </NavLink>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/team/update/:teamId" component={TeamUpdate} />
          <Route path="/team/create" component={Createteam} />
          <Route path="/team/:teamId" component={TeamDetail} />
          <Route path="/teams" component={Teams} />
          <Route path="/players/create/:teamId" component={PlayerCreate} />
          <Route path="/players/update/:playerId" component={PlayerUpdate} />
          <Route path="/players/:playerId" component={PlayerDetail} />
          <Route path="/players" component={Players} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
