import * as React from "react";
import { Filter } from "./components/filter";
import { UserTable } from "./components/userTable";

function App() {
  const [filterValue, setFilterValue] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  return (
    <div>
      <h1>Super Amasing User Search!</h1>
      <Filter handleChange={handleChange} />
      <UserTable>hi</UserTable>
    </div>
  );
}

export default App;
