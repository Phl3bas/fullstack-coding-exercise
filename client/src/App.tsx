import * as React from "react";
import { Filter } from "./components/filter";
import { UserTable } from "./components/userTable";
import { UserTableItem } from "./components/userTableItem";
import { useFetchUsers } from "./hooks/useFetchUsers";
import { useFilteredUserList } from "./hooks/useFilterUserList";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  nousers: {
    margin: "10px auto",
    height: 76,
    width: 400,
    display: "flex",
    flexDirection: "row",
    placeContent: "center",
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
    <div>
      <h1>Super Amasing User Search!</h1>
      <Filter handleChange={handleChange} />
      <UserTable>
        {filteredList.map(({ name, email, location }: User) => (
          <UserTableItem name={name} email={email} location={location} />
        ))}
      </UserTable>
      {filteredList.length === 0 && (
        <Paper className={classes.nousers} variant="outlined">
          There are no users found...
        </Paper>
      )}
    </div>
  );
}

export default App;
