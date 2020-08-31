import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import WorkIcon from "@material-ui/icons/Work";
import Home from "@material-ui/icons/Home";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import DashboardIcon from "@material-ui/icons/Dashboard";

import Footer from "../components/Footer";

import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#252327",
    margin: 0,
  },
  menu: {
    color: "#ddd",
  },
  title: {
    color: "tan",
  },
  menuSliderContainer: {
    width: 250,
    background: "#252327",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "2rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
    background: "#939592",
  },
  listItem: {
    color: "#ddd",
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <WorkIcon />, listText: "Resume", listPath: "/resume" },
  {
    listIcon: <DashboardIcon />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const classes = useStyles();

  const handleDrawerItemClick = (event, index) => {
    setSelectedIndex(index);
    setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="Prince Mercado" />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={(event) => handleDrawerItemClick(event, i)}
            selected={selectedIndex === i}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <HideOnScroll {...props}>
          <AppBar position="fixed" className={classes.appbar}>
            <Toolbar>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon className={classes.menu} />
              </IconButton>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Box>
      <SwipeableDrawer
        onOpen={() => setOpen(true)}
        disableBackdropTransition={true}
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
      >
        {sideList()}
        <Footer />
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default Navbar;
