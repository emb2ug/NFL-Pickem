import React from "react";
import "./App.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Routes from "./Routes.js";
import AppBarLogin from "./Appbar-login.js";
import AppBarMain from "./Appbar-main";
import MakePicksPic from "./MakePicksPic.jpg";
import EarnPointsPic from "./EarnPointsPic.jpg";
import ViewLeaderboardPic from "./ViewLeaderboardPic.jpg";

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

class Landing extends React.Component {
  render() {
    const classes = useStyles;
    return (
      <div>
        <AppBarMain />
        <div className="allCards">
          <div className="row">
            <div className="individualCard">
              <Card className={classes.card}>
                <CardHeader title="Predict this week's NFL matchups" />
                <CardContent>
                  <Typography
                    variant="body"
                    // color="textSecondary"
                    component="p"
                  >
                    How well do you know the NFL? Find out by putting your
                    prediction skills to the test. It's simple - just pick which
                    team you think will win each matchup, then sit back and
                    watch your predictions come true...or not
                  </Typography>
                </CardContent>
              </Card>
            </div>

            <div className="individualCard">
              <Card className={classes.card}>
                <CardMedia
                  style={{ height: "10px", paddingTop: "56%" }}
                  image={MakePicksPic}
                />
              </Card>
            </div>
          </div>

          <div className="row">
            <div className="individualCard">
              <Card className={classes.card}>
                <CardMedia
                  style={{ height: "10px", paddingTop: "56%" }}
                  image={EarnPointsPic}
                />
              </Card>
            </div>
            <div className="individualCard">
              <Card className={classes.card}>
                <CardHeader title="Earn points!" />
                <CardContent>
                  <Typography variant="body1" component="p">
                    Earn points for every game you pick correctly! Going with
                    the heavy favorite won't give you much, but calling the
                    week's big upset could mean a big reward.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="individualCard">
              <Card className={classes.card}>
                <CardHeader title="View Leaderboard" />
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/paella.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Typography variant="body" component="p">
                    Throughout the season, you can keep tabs on the competition.
                    Check out who's on a hot streak, and who NOT to take any
                    advice from...
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="individualCard">
              <Card className={classes.card}>
                <CardMedia
                  style={{ height: "10px", paddingTop: "56%" }}
                  image={ViewLeaderboardPic}
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
