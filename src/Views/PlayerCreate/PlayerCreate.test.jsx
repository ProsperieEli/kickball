import { screen, render } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { createMemoryHistory } from "history";

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
    "https://cwmkhejlrykoiaapjhjc.supabase.co/rest/v1/players",
    (req, res, ctx) => {
      return res(ctx.json(mockTeam));
    }
  ),
  rest.post(
    "https://cwmkhejlrykoiaapjhjc.supabase.co/rest/v1/players",
    (req, res, ctx) => {
      return res(ctx.json(mockTeam));
    }
  )
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

it.skip("It should create and pull the mocked team", async () => {
  const history = createMemoryHistory();
  history.push("/players/new");
});
