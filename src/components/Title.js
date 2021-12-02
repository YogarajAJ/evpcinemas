import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";

const useStyles = makeStyles({
  root: {
    color: "#d09d1f",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 0 5px 2px rgba(255, 105, 135, .3)",
  },
});

const Title = () => {
  const classess = useStyles();
  return (
    <div className={"app-title"}>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Typography className={classess.root} variant="h2" component="h1">
          EVP CINEMAS
        </Typography>
      </Slide>
    </div>
  );
};

export default Title;
