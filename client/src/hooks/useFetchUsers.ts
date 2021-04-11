import * as React from "react";

export function useFetchUsers() {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    fetch("http://localhost:8000/api/user")
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .catch((err) => {
        setUsers([]);
      });
  }, []);

  return { users };
}
