import React from "react";
import Fade from "react-reveal/Fade";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
  },
}));

export default function Experience() {
  const classes = useStyles();

  return <h1>Experience</h1>;
}
