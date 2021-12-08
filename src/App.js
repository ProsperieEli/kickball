import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Home from "./Views/Home/Home";
import PlayerDetail from "./Views/Home/PlayerDetail/PlayerDetail";
import Players from "./Views/Home/Players/Players";
import TeamDetail from "./Views/Home/TeamDetail/TeamDetail";
import Teams from "./Views/Home/Teams/Teams";

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
          <Route exact path="/team/:teamId" component={TeamDetail} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/players/:playerId" component={PlayerDetail} />
          <Route exact path="/players" component={Players} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
