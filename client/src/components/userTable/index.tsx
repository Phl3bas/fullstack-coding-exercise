import {
  TableContainer,
  Paper,
  Table,
  makeStyles,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import React from "react";
import { theme } from "../../theme";

interface UserTableProps {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
  container: {
    maxHeight: "70vh",
  },
  table: {
    width: "100%",
    backgroundColor: "#344555ee",
  },
  paper: {
    padding: "20px",
    backgroundColor: "#344555aa",
  },
  head: {
    color: theme.palette.primary.light,
    background: "#344555ee",
    borderBottomColor: "#34455533",
  },
}));

export const UserTable = ({ children }: UserTableProps) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={2}>
      <TableContainer component={Paper} className={classes.container}>
        <Table
          className={classes.table}
          size="small"
          stickyHeader
          aria-label="user-table"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.head}>Name</TableCell>
              <TableCell className={classes.head}>Email</TableCell>
              <TableCell className={classes.head}>Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{children}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
