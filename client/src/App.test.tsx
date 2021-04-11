import * as React from "react";
import {
  render,
  waitFor,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
  queryByTestId,
} from "@testing-library/react";
import App from "./App";
import { enableFetchMocks } from "jest-fetch-mock";
import "@testing-library/jest-dom";

enableFetchMocks();

beforeEach(() => {
  fetchMock.resetMocks();
  fetchMock.mockResponse(
    JSON.stringify([
      {
        name: "Joe Clarke",
        email: "Email@email.com",
        location: "bournemouth",
      },
      {
        name: "Bob Bobbington",
        email: "thebobbinator@gmail.com",
        location: "Manchester",
      },
      {
        name: "Lizzie Clarke",
        email: "lizzierascal@gmail.com",
        location: "Poole",
      },
    ])
  );
});

test("to match snapshot", async () => {
  const { container } = await waitFor(() => render(<App />));
  expect(container).toMatchSnapshot();
});

test("render without crashing", async () => {
  await waitFor(() => render(<App />));
});

test("should render a filter input", async () => {
  const { getByTestId } = await waitFor(() => render(<App />));

  const input = getByTestId("filter");

  expect(input).toBeInTheDocument();
});

test("should render a table of results", async () => {
  const { getByTestId, getAllByTestId, debug } = await waitFor(() =>
    render(<App />)
  );
  const table = getByTestId("table");
  expect(table).toBeInTheDocument();

  const tableRows = getAllByTestId("table-row");

  expect(tableRows.length).toBe(3);
});

test("should filter by firstname and/or lastname", async () => {
  const { getByTestId, getAllByTestId, container } = await waitFor(() =>
    render(<App />)
  );

  expect(getAllByTestId("table-row").length).toBe(3);

  fireEvent.change(
    getByTestId("filter").querySelector("input") as HTMLInputElement,
    {
      target: {
        value: "J",
      },
    }
  );

  expect(getAllByTestId("table-row").length).toBe(1);
});

test("should display a message if no results from filter", async () => {
  const { debug, getAllByTestId, getByTestId, container } = await waitFor(() =>
    render(<App />)
  );

  expect(getAllByTestId("table-row").length).toBe(3);

  fireEvent.change(
    getByTestId("filter").querySelector("input") as HTMLInputElement,
    {
      target: {
        value: "z",
      },
    }
  );

  expect(getByTestId("alert")).toBeInTheDocument();
});

export {};
