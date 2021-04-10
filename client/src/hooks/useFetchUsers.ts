import * as React from "react";

export function useFetchUsers() {
  const [users, setUsers] = React.useState<User[]>([]);

  async function getData() {
    const res = await fetch("http://localhost:8000/api/user");
    const json: User[] = await res.json();
    setUsers(json);
  }

  React.useEffect(() => {
    getData();
  }, []);

  return { users };
}
