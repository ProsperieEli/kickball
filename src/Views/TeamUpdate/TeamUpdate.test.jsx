import { screen, render } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { MemoryRouter as Router, Switch, Route } from "react-router-dom";
import TeamDetail from "../TeamDetail/TeamDetail";
import userEvent from "@testing-library/user-event";
import TeamUpdate from "./TeamUpdate";

const mockTeam = {
  id: 9,
  created_at: "2021-12-08T20:26:24.408898+00:00",
  name: "Vikings",
  city: "Memphis",
  state: "Tennessee",
  players: [],
};

const updatedMockTeam = {
  id: 9,
  created_at: "2021-12-08T20:26:24.408898+00:00",
  name: "Panthers",
  city: "Memphis",
  state: "Tennessee",
  players: [],
};

const server = setupServer(
  rest.get(
    "https://cwmkhejlrykoiaapjhjc.supabase.co/rest/v1/team/:teamId",
    (req, res, ctx) => {
      return res(ctx.json(mockTeam));
    }
  ),
  rest.put(
    "https://cwmkhejlrykoiaapjhjc.supabase.co/rest/v1/team/update/:teamId",
    (req, res, ctx) => {
      return res(ctx.json([updatedMockTeam]));
    }
  )
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

it("Should update and pull the mocked team", async () => {
  render(
    <Router initialEntries={["/team/:teamId"]}>
      <Switch>
        <Route path="/team/:teamId" component={TeamDetail} />
        <Route path="/team/update/:teamId" component={TeamUpdate} />
      </Switch>
    </Router>
  );

  screen.getByText("Update team.");

  const nameField = screen.getByLabelText(/Name/i);
  //   const cityField = screen.getByLabelText(/City:/);
  //   const stateField = screen.getByLabelText(/State:/);
  const submitBtn = screen.getByRole("button", { name: "Update team" });

  userEvent.type(nameField, "Panthers");
  //   userEvent.type(cityField, "memphis");
  //   userEvent.type(stateField, "TN");
  userEvent.click(submitBtn);
});
