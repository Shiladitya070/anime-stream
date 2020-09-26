import React from "react";
import Navbar from "./Navbar";
import "../static/Anime.css";
import Img from "./img.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function Anime() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <br />

      <div style={{ width: "100%" }} id="anime__card">
        <Box display="flex" p={1} bgcolor="background.paper">
          <img src={Img} alt="Anime" className="anime__img" />
          <br />
          <div className={classes.root}>
            <Typography variant="h2">Black Clover</Typography>
            <Typography variant="h6">
              {" "}
              Release Date:12 2017 & Status: Ongoing
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </div>
        </Box>
      </div>
    </div>
  );
}
