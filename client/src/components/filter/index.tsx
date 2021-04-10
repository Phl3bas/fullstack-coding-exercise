import { TextField } from "@material-ui/core";
import * as React from "react";

interface FilterProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Filter = ({ handleChange }: FilterProps) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <TextField
        onChange={handleChange}
        id="outlined-basic"
        label="Filter users"
        variant="outlined"
      />
    </form>
  );
};
