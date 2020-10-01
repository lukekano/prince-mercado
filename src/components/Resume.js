import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { AppDispatchContext } from "../context/AppContext";
import csi from "../images/circuitsolutions.jpg";
import amdocs from "../images/amdocs.jpg";
import ImageFadeIn from "react-image-fade-in";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#212129",
  },
  timeLine: {
    position: "relative",
    padding: "1rem 0 1rem 0",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #fff",
      right: "20px",
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
      right: "-1rem",
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
        left: "-1rem",
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
    borderRadius: "5px",
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
    padding: "3rem 0 1rem 0",
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
  card: {
    background: "linear-gradient(to top, transparent,  #3873B1)",
  },
}));

const resume = [
  {
    position: "Software Developer",
    company: "Amdocs",
    companyImage: amdocs,
    year: "2020",
    tasks: [
      "Provided support to production software",
      "Analyzed and debugged microservice APIs and server issues",
      "Built bulk user update jobs and scripts",
    ],
  },
  {
    position: "Software Developer",
    company: "Circuit Solutions Inc.",
    companyImage: csi,
    year: "2019",
    tasks: [
      "Built modern applications with JAVA, Spring, Spring Boot,ReactJs, MySQL",
      "Built Face Recognition REST API for web based applications",
      "Integrated biometric scanners and hardwares to web based applications",
      "Built android application for employee's remote timekeeping",
      "Worked with other developers on building GPS and Bluetooth enabled mobile applications",
      "Managed MySQL database installation, daily incremental backup and recovery",
      "Written scripts to automate reports generation",
    ],
  },
];

const Resume = () => {
  const { dispatch } = useContext(AppDispatchContext);
  useEffect(() => {
    dispatch({
      type: "navigate",
      payload: { routeIndex: 1, toolBarTitle: "Resume" },
    });
  }, []);
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        3 Years Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        {resume.map((work) => (
          <React.Fragment>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              {work.year}
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="80"
                    image={work.companyImage}
                    style={{ objectFit: "contain", background: "#fff" }}
                    title={`${work.position}`}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      align="center"
                      className={classes.subHeading}
                    >
                      {work.position}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      align="center"
                      className={classes.subtitle1}
                    >
                      <ul>
                        {work.tasks.map((task) => (
                          <li>{task}</li>
                        ))}
                      </ul>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </React.Fragment>
        ))}
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017
        </Typography>
      </Box>
    </Box>
  );
};

export default Resume;
