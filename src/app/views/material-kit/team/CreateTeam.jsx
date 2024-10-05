import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputAdornment,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #3F51B5 30%, #FFEB3B 90%)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    width: "100%",
  },
  header: {
    marginBottom: "1.5rem",
    fontSize: "1.8rem",
    fontWeight: "bold",
    textAlign: "center",
  },
  signupButton: {
    background: "linear-gradient(45deg, #3F51B5, #FFEB3B)",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      background: "linear-gradient(45deg, #3F51B5, #FFC107)",
    },
  },
  signUpText: {
    transform: "rotate(-90deg)",
    position: "absolute",
    top: "30%",
    left: "-2rem",
    fontWeight: "bold",
    color: "#3F51B5",
    fontSize: "1.5rem",
  },
  otpBtn: {
    marginLeft: "10px",
  },
}));

const CreateProfile = () => {
  const classes = useStyles();
  const [gender, setGender] = useState("female");
  const [nationality, setNationality] = useState("American");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.header}>
            New user?
          </Grid>

          <Grid item xs={6}>
            <TextField label="First Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Last Name" variant="outlined" fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField
              select
              label="Nationality"
              value={nationality}
              onChange={handleNationalityChange}
              variant="outlined"
              fullWidth
            >
              <MenuItem value="American">American</MenuItem>
              <MenuItem value="Indian">Indian</MenuItem>
              <MenuItem value="Canadian">Canadian</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField label="E-mail" variant="outlined" fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Date of Birth"
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <FormControl component="fieldset" fullWidth>
              <RadioGroup row value={gender} onChange={handleGenderChange}>
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Mobile Number"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+1</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              className={classes.otpBtn}
              endIcon={<Send />}
            >
              Send OTP
            </Button>
          </Grid>

          <Grid item xs={6}>
            <TextField label="OTP" variant="outlined" fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Confirm Password"
              variant="outlined"
              type="password"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              className={classes.signupButton}
              fullWidth
            >
              Create user
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className={classes.signUpText}>Sign up</div>
    </div>
  );
};

export default CreateProfile;


