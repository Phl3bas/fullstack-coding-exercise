import * as React from "react";
import { Filter } from "./components/filter";
import { UserTable } from "./components/userTable";
import { UserTableItem } from "./components/userTableItem";
import { useFetchUsers } from "./hooks/useFetchUsers";
import { useFilteredUserList } from "./hooks/useFilterUserList";
import { Container, makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles({
  header: {
    textAlign: "center",
  },
  nousers: {
    margin: "10px auto",
  },
});

function App() {
  const [filterValue, setFilterValue] = React.useState<string>("");

  const { users } = useFetchUsers();
  const filteredList = useFilteredUserList(filterValue, "name", users);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  const classes = useStyles();

  return (
    <Container>
      <h1 className={classes.header}>User Search</h1>
      <Filter handleChange={handleChange} />
      <UserTable>
        {filteredList.map(({ name, email, location }: User) => (
          <UserTableItem name={name} email={email} location={location} />
        ))}
      </UserTable>
      {filteredList.length === 0 && (
        <Alert className={classes.nousers} variant="filled" severity="info">
          There are no users found with that search term.
        </Alert>
      )}
    </Container>
  );
}

export default App;
