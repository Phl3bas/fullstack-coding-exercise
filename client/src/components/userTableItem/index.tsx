import { TableCell, TableRow } from "@material-ui/core";
import * as React from "react";

interface UserTableItemProps {
  name: string;
  email: string;
  location: string;
}

export const UserTableItem = ({
  name,
  email,
  location,
}: UserTableItemProps) => {
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{location}</TableCell>
    </TableRow>
  );
};
