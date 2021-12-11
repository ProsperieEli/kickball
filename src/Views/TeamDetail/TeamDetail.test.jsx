import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TeamDetail from "./TeamDetail";

it("should render a detailed view of an individual team", async () => {
  render(
    <MemoryRouter>
      <TeamDetail
        label="The value of the label prop..."
        match={{ params: { teamId: "3" } }}
      />
    </MemoryRouter>
  );

  screen.getByText("Loading team...");

  const teamName = await screen.findByText("Lakeville Thunderfeet", {
    exact: false,
  });
  const customLabel = screen.getByText("The value of the label prop...");

  expect(teamName).toBeInTheDocument();
  expect(customLabel).toBeInTheDocument();
});
