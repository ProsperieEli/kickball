import { screen, render } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { MemoryRouter as Router, Switch, Route } from "react-router-dom";

import Createteam from "./Createteam";
import TeamDetail from "../TeamDetail/TeamDetail";

const mockTeam = {
  id: 9,
  created_at: "2021-12-08T20:26:24.408898+00:00",
  name: "Vikings",
  city: "Memphis",
  state: "Tennessee",
  players: [],
};

const server = setupServer(
  rest.get(
    "https://cwmkhejlrykoiaapjhjc.supabase.co/rest/v1/teams",
    (req, res, ctx) => {
      return res(ctx.json(mockTeam));
    }
  ),
  rest.post(
    "https://cwmkhejlrykoiaapjhjc.supabase.co/rest/v1/teams",
    (req, res, ctx) => {
      return res(ctx.json([mockTeam]));
    }
  )
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

it("Should create and pull the mocked team", async () => {
  render(
    <Router initialEntries={["/team/create"]}>
      <Switch>
        <Route path="/team/create" component={Createteam} />
        <Route path="/team/:teamId" component={TeamDetail} />
      </Switch>
    </Router>
  );

  screen.getByText("Add Team.", { exact: false });
});
