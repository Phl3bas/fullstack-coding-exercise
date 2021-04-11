import { waitFor } from "@testing-library/react";
import { useFetchUsers } from "./useFetchUsers";
import { enableFetchMocks } from "jest-fetch-mock";
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";

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

test("fetch json data", async () => {
  const { result } = await waitFor(() => renderHook(() => useFetchUsers()));

  expect(result.current.users.length).toBe(3);
  expect(result.current.users).toBeInstanceOf(Array);
});
