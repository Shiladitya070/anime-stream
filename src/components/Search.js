import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: 25,
    justifyContent: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "50ch",
  },
}));

export default function Search() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        id="standard-full-width"
        label="Label"
        style={{ margin: 8 }}
        placeholder="Placeholder"
        helperText="Full width!"
        className={classes.textField}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Fab color="primary" aria-label="add">
        <SearchIcon />
      </Fab>
    </div>
  );
}
