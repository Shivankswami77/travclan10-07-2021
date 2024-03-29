import "./App.css";
import Customerbids from "./components/Customerbids";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";

import Home from "./components/Home";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    width: "100%",
  },
});
function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.appMain}>
          <Switch>
            <Route path="/" exact component={Home}></Route>

            <Route path="/customerbids" exact component={Customerbids}></Route>
          </Switch>
        </div>
      </Router>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
