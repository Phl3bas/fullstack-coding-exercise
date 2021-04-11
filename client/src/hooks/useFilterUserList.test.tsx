import { useFilteredUserList } from "./useFilterUserList";
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";

const data = [
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
    name: "Tom Clarke",
    email: "lizzierascal@gmail.com",
    location: "Poole",
  },
];

test("filter list: no filter value - returns list", () => {
  const { result } = renderHook(() => useFilteredUserList("", "name", data));

  expect(result.current.length).toBe(3);
});

test("filter list: first name search ('T') - returns single item", () => {
  const { result } = renderHook(() => useFilteredUserList("T", "name", data));

  expect(result.current.length).toBe(1);
});

test("filter list: last name search ('Cl') - returns single item", () => {
  const { result } = renderHook(() => useFilteredUserList("Cl", "name", data));

  expect(result.current.length).toBe(2);
});
