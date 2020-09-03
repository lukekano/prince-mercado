import React, { useState, useContext, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import ImageFadeIn from "react-image-fade-in";
import { AppDispatchContext } from "../context/AppContext";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
    background: "#939592",
    boxShadow: theme.shadows[5],
  },
  title: {
    color: "#fff",
  },
  subtitle: {
    color: "#eee",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const { dispatch } = useContext(AppDispatchContext);
  const [titleComplete, setTitleComplete] = useState(false);
  const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    dispatch({
      type: "navigate",
      payload: { routeIndex: 0, toolBarTitle: "" },
    });
  }, []);

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} alt="Prince Mercado">
          <ImageFadeIn
            src={avatar}
            height={160}
            style={{ objectFit: "fill" }}
            onLoad={() => setIsAvatarLoaded(true)}
          />
        </Avatar>
      </Grid>
      <Typography className={classes.title} variant="h4">
        {isAvatarLoaded ? (
          <Typed
          strings={["Hi, I'm Prince Mercado"]}
          typeSpeed={100}
          showCursor={false}
          onComplete={() => setTitleComplete(true)}
        />
        ) : (
          <Typed
          strings={["Hi, I'm Prince Mercado"]}
          typeSpeed={100}
          showCursor={false}
          style={{ color: "transparent" }}
          stopped
        />
        )}
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        {titleComplete ? (
          <Typed
            strings={[
              "Frontend Developer",
              "Backend Developer",
              "Mobile App Developer",
            ]}
            typeSpeed={60}
            backSpeed={50}
            loop
            showCursor={true}
          />
        ) : (
          <Typed
            strings={["Frontend Developer"]}
            typeSpeed={40}
            backSpeed={50}
            style={{ color: "transparent" }}
            stopped
          />
        )}
      </Typography>
    </Box>
  );
};

export default Header;
