import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";
import ReactGA from 'react-ga';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#3873B1",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#ddd",
      "&:hover": {
        fill: "#252327",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction
        onClick={() =>{
          window.open("https://www.facebook.com/lukekanopol", "_blank");
          ReactGA.event({
            category: 'Drawer',
            action: 'Clicked Facebook Icon',
          });
        }
        }
        icon={<Facebook />}
        className={classes.root}
      />
      {/* <BottomNavigationAction icon={<Twitter />} className={classes.root} /> */}
      <BottomNavigationAction
        onClick={() => {
          window.open("https://www.linkedin.com/in/prince-luke-mercado-17454a11b","_blank");
          ReactGA.event({
            category: 'Drawer',
            action: 'Clicked LinkedIn Icon',
          });
        }
        }
        icon={<LinkedInIcon />}
        className={classes.root}
      />
    </BottomNavigation>
  );
};
export default Footer;
