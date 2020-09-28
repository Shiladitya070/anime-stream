import React from "react";
import "../static/Watch.css";
import MyVideo from "../static/myVideo.mp4";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Navbar from "./Navbar";
import FlexBox from "./FlexBox";
import EpisodeList from "./EpisodeList";
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
    display: "inline",
    placeItems: "center",
    margin: 10,
    textTransform: "capitalize",
  },
});

export default function Watch(props) {
  const anime = props.match.params.anime;
  const episode = props.match.params.episode;
  const classes = useStyles();

  console.log(anime);
  return (
    <div>
      <Navbar />
      <center>
        <div className={classes.root}>
          <Typography variant="h4" id="title">
            {" "}
            {anime} Episode {episode} 📹{" "}
          </Typography>
        </div>
      </center>

      <div className="video__player">
        {" "}
        <video
          id="MY_VIDEO_1"
          class="video-js vjs-default-skin"
          controls
          preload="auto"
          width="460"
          height="264"
          poster="MY_VIDEO_POSTER.jpg"
          data-setup="{}"
        >
          <source src={MyVideo} type="video/mp4" />
          <source src="MY_VIDEO.webm" type="video/webm" />
          <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading
            to a web browser that{" "}
          </p>
        </video>
      </div>
      <div className={classes.root}>
        <center>
          <FlexBox text="Related Episodes"></FlexBox>
        </center>
      </div>
      <div className="episode__table">
        <EpisodeList />
      </div>
    </div>
  );
}
