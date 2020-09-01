import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/gps-dashboard.jpg";
import project2 from "../images/dltb-selectseat.png";
import project3 from "../images/ctmo-dashboard.png";
import project4 from "../images/ctmo-app-home2.png";
import project5 from "../images/remote-home.png";
import project6 from "../images/react.png";
import TitlebarGridList from "./TitleBarGridList";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#212129",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    maxHeight: 300,
    margin: "3rem auto",
    background: "#939592",
    color: "#fff",
    textAlign: "center"
  },
  cardAction: {
    background: "#3873B1",
  }
}));

const projects = [
  {
    title: "Vehicle Tracking App",
    author: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
    consequatur magni quod nesciunt necessitatibus molestiae non
    eligendi, magnam est aliquam recusandae? Magnam soluta minus
    iste alias sunt veritatis nisi dolores!`,
    img: project1,
  },
  {
    title: "Bus Booking App",
    author: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    img: project2,
  },
  {
    title: "Complaint Management App",
    author: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    img: project3,
  },
  {
    title: "Tricycle Complaint App",
    author: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    img: project4,
  },
  {
    title: "Remote TimeKeeping App",
    author: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    img: project5,
  },
  // {
  //   title: "Face Recognition App",
  //   author: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
  //   consequatur magni quod nesciunt necessitatibus molestiae non\
  //   eligendi, magnam est aliquam recusandae? Magnam soluta minus\
  //   iste alias sunt veritatis nisi dolores!`,
  //   img: project6,
  // },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      {/* <TitlebarGridList tileData={projects}/> */}
      <Grid container justify="left">
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="200"
                  image={project.img}
                  style={{ objectFit: "fill" }}
                />
                <CardContent height="150">
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  {/* <Typography
                    noWrap={true}
                    variant="body2"
                    color="textSecondary"
                  >
                    {project.author}
                  </Typography> */}
                </CardContent>
              </CardActionArea>
              {/* <CardActions className={classes.cardAction}>
                <Button size="small" color="light">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
