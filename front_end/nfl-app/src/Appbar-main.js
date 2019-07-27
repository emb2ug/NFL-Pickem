import React from "react";
import "./App.css";
import Routes from "./Routes.js";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "./styles.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

class AppBarMain extends React.Component {
  render() {
    const classes = useStyles;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className="content">
            <div>
              <Toolbar>
                <Typography variant="h6" className="tiles">
                  [Logo]
                </Typography>
                <Typography variant="h6" className="tiles">
                  Weekly Picks
                </Typography>
                <Typography variant="h6" className="tiles">
                  Leaderboards
                </Typography>
              </Toolbar>
            </div>
            <div>
              <Toolbar>
                <IconButton color="inherit" className="tiles">
                  <AccountCircle />
                </IconButton>
                <Button color="inherit" className="tiles">
                  Logout
                </Button>
              </Toolbar>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default AppBarMain;
