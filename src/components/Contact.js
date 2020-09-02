import React, { useState, useContext, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import emailjs from "emailjs-com";

import Send from "@material-ui/icons/Send";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import ReCAPTCHA from "react-google-recaptcha";
import { AppDispatchContext } from "../context/AppContext";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#212129",
    height: "100vh",
  },
  heading: {
    color: "#3873B1",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    position: "relative",
    margin: "1rem",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "#3873B1",
    borderColor: "#fff",
  },
  field: {
    margin: "1rem 0rem",
  },
  recaptcha: {
    marginTop: "1rem",
    width: "100%",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& label": {
      color: "#3873B1",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "#fff",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [captchaPassed, setCaptchaPassed] = useState(false);
  const [open, setOpen] = useState(false);
  const recaptchaRef = React.createRef();
  const { dispatch } = useContext(AppDispatchContext);
  useEffect(() => {
    dispatch({
      type: "navigate",
      payload: { routeIndex: 3, toolBarTitle: "Contact" },
    });
  }, []);

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const recaptcha = recaptchaRef.current;
    emailjs
      .send(
        "gmail",
        "template_22kjqem",
        {
          name: name,
          email: email,
          message: message,
        },
        "user_qarjmh0NC3wdpJGnjQqM8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          setIsSuccess(true);
          setOpen(true);
          setName("");
          setEmail("");
          setMessage("");
          recaptcha.reset();
          setCaptchaPassed(false);
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
          setIsSuccess(false);
          setOpen(true);
        }
      );
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form} onSubmit={onSubmitForm}>
          <Typography variant="h5" className={classes.heading}>
            Hire or Contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            name="name"
            id="name"
            required
            autoComplete="off"
            inputProps={{ className: classes.input }}
            value={name}
            onInput={(e) => setName(e.target.value)}
          />
          <InputField
            autoComplete="off"
            fullWidth={true}
            label="Email"
            variant="outlined"
            id="email"
            name="email"
            required
            type="email"
            inputProps={{ className: classes.input }}
            className={classes.field}
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
          <InputField
            autoComplete="off"
            fullWidth={true}
            label="Message"
            variant="outlined"
            required
            id="message"
            name="message"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
            value={message}
            onInput={(e) => setMessage(e.target.value)}
          />
          <ReCAPTCHA
            ref={recaptchaRef}
            className={classes.recaptcha}
            sitekey="6Ld5nMYZAAAAAIxN9dbgWayMpQQaYAqG4ChKSFtF"
            onChange={() => setCaptchaPassed(true)}
          />
          ,
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
            type="submit"
            disabled={!captchaPassed || isLoading}
          >
            {isLoading ? <CircularProgress size="3rem" /> : "SEND"}
          </Button>
        </Box>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={isSuccess ? "success" : "error"}>
          {isSuccess
            ? "Thanks for reaching out!, Ill get back to you soon."
            : "Ooops! Something went wrong"}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
