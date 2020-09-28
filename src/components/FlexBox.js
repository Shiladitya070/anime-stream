import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    margin: "auto",
    maxWidth: 500,
    display: "inline",
    placeItems: "center",
  },
});

export default function FlexBox(props) {
  const text = props.text;
  const clases = useStyles();
  return (
    <div style={{ width: "100%" }}>
      <Box display="flex" p={1} bgcolor="skyblue">
        {" "}
        <div className={clases.root}>
          <Typography variant="h4">{text}</Typography>
        </div>
      </Box>
    </div>
  );
}
