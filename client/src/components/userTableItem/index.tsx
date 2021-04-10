import { makeStyles, TableCell, TableRow } from "@material-ui/core";
import * as React from "react";

interface UserTableItemProps {
  name: string;
  email: string;
  location: string;
}

const useStyle = makeStyles((theme) => ({
  cell: {
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    color: "rgba(255,255,255,.8)",
  },
}));

export const UserTableItem = ({
  name,
  email,
  location,
}: UserTableItemProps) => {
  const classes = useStyle();
  return (
    <TableRow hover>
      <TableCell component="th" scope="row" className={classes.cell}>
        {name}
      </TableCell>
      <TableCell className={classes.cell}>{email}</TableCell>
      <TableCell className={classes.cell}>{location}</TableCell>
    </TableRow>
  );
};
