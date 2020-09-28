import React from "react";
import "../static/EpisodeList.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "auto",

    display: "inline",

    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
export default function EpisodeList() {
  const clasess = useStyles();
  return (
    <center>
      <div className={clasess.button}>
        <Link to="/watch/anime/2">
          <Button variant="contained" color="primary">
            Episode 1{" "}
          </Button>
        </Link>

        <Link to="/watch/anime/2">
          <Button variant="contained" color="primary">
            Episode 2{" "}
          </Button>
        </Link>
        <Link to="/watch/anime/3">
          <Button variant="contained" color="primary">
            Episode 3{" "}
          </Button>
        </Link>
        <Link to="/watch/anime/4">
          <Button variant="contained" color="primary">
            Episode 4{" "}
          </Button>
        </Link>
        <Link to="/watch/anime/5">
          <Button variant="contained" color="primary">
            Episode 5{" "}
          </Button>
        </Link>
        <Link to="/watch/anime/6">
          <Button variant="contained" color="primary">
            Episode 6{" "}
          </Button>
        </Link>
      </div>
    </center>
  );
}
