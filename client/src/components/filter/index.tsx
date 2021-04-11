import {
  FormHelperText,
  makeStyles,
  TextField,
  useTheme,
} from "@material-ui/core";
import * as React from "react";

interface FilterProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  filter: {
    width: "50%",
    margin: "0 auto",
    marginBottom: "20px",
    backgroundColor: "rgba(244,244,244,.1)",
    color: theme.palette.primary.dark,
    "&::placeholder": {
      color: "red",
    },
  },
}));

export const Filter = ({ handleChange }: FilterProps) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
      <TextField
        data-testid="filter"
        className={classes.filter}
        onChange={handleChange}
        id="outlined-basic"
        label="Filter users"
        InputProps={{
          style: {
            color: theme.palette.primary.light,
          },
        }}
        InputLabelProps={{
          style: {
            color: theme.palette.primary.light,
          },
        }}
        variant="filled"
      />
    </form>
  );
};
