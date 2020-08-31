import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ScrollTop from "./components/ScrollTop";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Toolbar from "@material-ui/core/Toolbar";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3873B1",
    },
  },
});

function App(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Toolbar id="back-to-top-anchor" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <ScrollTop {...props}>
        <ThemeProvider theme={theme}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ThemeProvider>
      </ScrollTop>
    </React.Fragment>
  );
}

export default App;
