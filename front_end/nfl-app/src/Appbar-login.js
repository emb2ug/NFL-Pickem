import React from "react";
import "./App.css";
import Routes from "./Routes.js";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./styles.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

class AppBarLogin extends React.Component {
  render() {
    const classes = useStyles;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className="content">
            <Typography variant="h6" className={classes.title}>
              [Logo]
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default AppBarLogin;
