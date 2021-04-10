import * as React from "react";
import { Filter } from "./components/filter";
import { UserTable } from "./components/userTable";
import { UserTableItem } from "./components/userTableItem";
import { useFetchUsers } from "./hooks/useFetchUsers";

function App() {
  const [filterValue, setFilterValue] = React.useState<string>("");

  const { users } = useFetchUsers();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  return (
    <div>
      <h1>Super Amasing User Search!</h1>
      <Filter handleChange={handleChange} />
      <UserTable>
        {users.map(({ name, email, location }: User) => (
          <UserTableItem name={name} email={email} location={location} />
        ))}
      </UserTable>
    </div>
  );
}

export default App;
