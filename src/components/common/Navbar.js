import React, { useRef } from "react";
import "../styles/_navbar.scss";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: "#d3c9c0",
    letterSpacing: 2,
    textTransform: "none",
  },
  buttonTitle: {
    color: "#d3c9c0",
    fontFamily: "Libre Baskerville",
    letterSpacing: 4,
    fontSize: 20,
    flexGrow: 1,
  },
  buttonGroup: {
    marginRight: 0,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={`${classes.root} menu menu--inola`}>
      <AppBar
        position="fixed"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography className={classes.buttonTitle}>
            <Button className={classes.buttonTitle}>Brenda Ty</Button>
          </Typography>
          <a
            className={`${classes.button} menu__item`}
            href="http://brendaty.com"
          >
            <span className="menu__item-name">Skills</span>
          </a>
          <a className={`${classes.button} menu__item`} href="#">
            <span className="menu__item-name">Projects</span>
          </a>
          <a className={`${classes.button} menu__item`} href="#">
            <span className="menu__item-name">Experience</span>
          </a>
          <a className={`${classes.button} menu__item`} href="#">
            <span className="menu__item-name">About</span>
          </a>
          <a className={`${classes.button} menu__item`} href="#">
            <span className="menu__item-name">Contact</span>
          </a>
        </Toolbar>
      </AppBar>
    </div>
    // <nav className={`${classes.button} menu menu--inola`}>

    // </nav>
  );
}
