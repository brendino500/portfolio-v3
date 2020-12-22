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

  const sectionHomeRef = useRef(null);
  const sectionSkillsRef = useRef(null);
  const sectionProjectsRef = useRef(null);
  const sectionExperienceRef = useRef(null);
  const sectionAboutRef = useRef(null);
  const sectionStalkRef = useRef(null);

  const scrollTo = (ref) => {
    window.scroll({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <nav className={`${classes.button} menu menu--inola`}>
      <a className={`${classes.button} menu__item`} href="http://brendaty.com">
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
    </nav>
  );
}
