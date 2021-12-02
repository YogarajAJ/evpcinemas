import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "@mui/material";

const centerText = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ContactInformation = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const addressGrid = matches ? (
    <Grid
      justifyContent="left"
      alignItems="left"
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      direction="row"
    >
      <Grid item>
        <Typography variant="h6" component="h6" align="center">
          EVP CINEMAS, Santhosha Nagar,Chennai - Bangalore,National
          Highway,Chembarambakkam, Tamil Nadu 600123
        </Typography>
      </Grid>
    </Grid>
  ) : (
    <Grid
      justifyContent="left"
      alignItems="left"
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      direction={!matches ? "column" : "row"}
    >
      <Grid item xs={2}>
        <Typography variant="h6" component="h6">
          EVP CINEMAS,
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h6" component="h6">
          Santhosha Nagar,
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h6" component="h6">
          Chennai - Bangalore,
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h6" component="h6">
          National Highway
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h6" component="h6">
          Chembarambakkam, Tamil Nadu 600123
        </Typography>
      </Grid>
    </Grid>
  );

  return (
    <div>
      <Typography variant="h2" component="h2" align="center" color="gold">
        Contact Us
      </Typography>
      <Grid
        justifyContent="center"
        alignItems="center"
        container
        rowSpacing={4}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction={matches ? "column" : "row"}
      >
        <Grid item xs={5}>
          {addressGrid}
        </Grid>
        <Grid item xs={3} align="center">
          <div style={centerText}>
            <EmailIcon /> &nbsp;&nbsp;
            <Link style={{ color:'whitesmoke',marginRight: "5vw", textDecoration:'none' }} href="mailto:info@evpcinemas.com">info@evpcinemas.com</Link>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={2} direction={matches ? "row" : "column"}>
            <Grid item xs={4}>
              <div style={centerText}>
                <CallIcon /> &nbsp;
                <Link style={{ color:'whitesmoke', textDecoration:'none' }} href="tel:8525811111">8525811111</Link>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={centerText}>
                <CallIcon /> &nbsp;
                <Link style={{ color:'whitesmoke',textDecoration:'none' }} href="tel:7305578887">7305578887</Link>
              </div>
            </Grid>
            <Grid item xs={4} align="center">
              <div style={centerText}>
                <CallIcon /> &nbsp;
                <Link style={{ color:'whitesmoke',textDecoration:'none' }} href="tel:7305678887">7305678887</Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactInformation;
