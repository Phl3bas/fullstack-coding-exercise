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

interface UserTableProps {
  children: React.ReactNode;
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const UserTable = ({ children }: UserTableProps) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="user-table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
};
