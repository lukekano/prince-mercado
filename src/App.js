import React from "react";
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
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
import { AppStateContext, AppDispatchContext } from "./context/AppContext";

import "./App.css";

import { useImmerReducer } from "use-immer";

const font = "Titillium Web, sans-serif";

const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#3873B1",
    },
  },
});

const initialState = {
  routeIndex: 0,
  toolBarTitle: "",
};

function appReducer(draft, action) {
  switch (action.type) {
    case "navigate":
      draft.routeIndex = action.payload.routeIndex;
      draft.toolBarTitle = action.payload.toolBarTitle;
      return;
    default:
      return;
  }
}

function App(props) {
  const [state, dispatch] = useImmerReducer(appReducer, initialState);
  return (
    <React.Fragment>
      <AppStateContext.Provider value={{ state }}>
        <AppDispatchContext.Provider value={{ dispatch }}>
          <ThemeProvider theme={theme}>
            <HashRouter>
              <CssBaseline />
              <Navbar />
              <Toolbar id="back-to-top-anchor" />

              <Route exact path="/" component={Home} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
              <Route path="*" render={() => <Redirect to="/" />} />

              <ScrollTop {...props}>
                <Fab
                  color="primary"
                  size="small"
                  aria-label="scroll back to top"
                >
                  <KeyboardArrowUpIcon />
                </Fab>
              </ScrollTop>
            </HashRouter>
          </ThemeProvider>
        </AppDispatchContext.Provider>
      </AppStateContext.Provider>
    </React.Fragment>
  );
}

export default App;
