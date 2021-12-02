import React from "react";
import get from "lodash/get";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import { makeStyles } from "@mui/styles";
import { openJustTicket } from "../BookNow";

const useStyles = makeStyles({
  root: {
    transition: "transform 0.15s ease-in-out",
  },
  raisedbox: {
    boxShadow: "4px 5px 10px 2px rgba(255, 105, 135, .3)",
  },
});
const MovieItem = ({ movie = {} }) => {
  const title = get(movie, "title", "--");
  const language = get(movie, "language", "--");
  const certificate = get(movie, "certificate", "--");
  const posterImage = get(movie, "posterImage", "--");

  const [state, setState] = React.useState({
    raised: false,
    shadow: 1,
  });

  const classes = useStyles();
  return (
    <Grow in={true} style={{ transformOrigin: "1 0 0" }}>
      <Grid direction="column" container rowSpacing={1}>
        <Grid item xs={3}>
          <div
            style={{ textAlign: "center" }}
            className={state.raised ? classes.raisedbox : classes.root}
            onMouseOver={() => setState({ raised: true, shadow: 3 })}
            onMouseOut={() => setState({ raised: false, shadow: 1 })}
          >
            <img
              onClick={() => openJustTicket(movie)}
              className="img-fluid"
              src={posterImage}
              alt={"EVP CINEMAS"}
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <Typography align="center" variant="h4" component="h4">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Typography display="inline" align="justify" variant="h6">
              {language} | {certificate}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grow>
  );
};

export default MovieItem;
