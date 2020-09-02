import React, {useContext, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { AppDispatchContext } from "../context/AppContext";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#212129",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #fff",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #fff",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#3873B1 #3873B1 transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#fff",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #3873B1 #3873B1",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "#3873B1",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "#3873B1",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "#3873B1",
  },
  subtitle1: {
    color: "#ddd",
    textAlign: "left",
  },
}));

const Resume = () => {
  const {dispatch} = useContext(AppDispatchContext);
  useEffect(() =>{
    dispatch({type: "navigate", payload: {routeIndex: 1, toolBarTitle: "Resume"}})
  }, []);
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Software Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Circuit Solutions Inc.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul>
              <li>
                Built modern applications with JAVA, Spring, Spring
                Boot,ReactJs, MySQL
              </li>
              <li>Built Face Recognition API for web based applications</li>

              <li>
                Integrated biometric scanners and hardwares to web based
                applications
              </li>
              <li>
                Built android application for employee's remote timekeeping
              </li>
              <li>
                Worked with other developers on building GPS and Bluetooth
                enabled mobile applications
              </li>
              <li>
                Managed and automate database backups of existing applications
              </li>
              <li>Written scripts to automate reports generation</li>
            </ul>
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Software Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Amdocs Philippines
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <ul>
              <li>Provided support to production softwares</li>
              <li>
                Analyzed and debugged microservice API's and server issues
              </li>
              <li>Built bulk user update jobs and scripts</li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
      </Box>
    </Box>
  );
};

export default Resume;
