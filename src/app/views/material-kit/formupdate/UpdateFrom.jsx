import { useEffect, useState } from "react";
import {
  Button,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  InputLabel,
  Typography,
  Box,
} from "@mui/material";
import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom"; 

const UpdateFrom = () => {
  const [state, setState] = useState({ date: new Date() });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate(); 

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("documents", selectedFiles[i]);
    }
    console.log(selectedFiles);

    setTimeout(() => {
      navigate("/material/table"); 
    }, 500); 
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== state.password) return false;
      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [state.password]);

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  const {
    username,
    firstName,
    mobile,
    email,
    gender,
    date,
    creditCard,
    confirmPassword,
  } = state;

  return (
    <Box sx={{ maxWidth: "900px", mx: "auto", p: 3 }}>
      <ValidatorForm onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextValidator
              type="text"
              name="username"
              label="Farmer Name"
              value={username || ""}
              onChange={handleChange}
              validators={[
                "required",
                "minStringLength: 4",
                "maxStringLength: 9",
              ]}
              errorMessages={["This field is required"]}
              fullWidth
              sx={{ mb: 2 }}
            />

            <TextValidator
              type="text"
              name="firstName"
              label="First Name"
              value={firstName || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["This field is required"]}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextValidator
              type="text"
              name="mobile"
              label="Mobile Number"
              value={mobile || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["This field is required"]}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextValidator
              type="email"
              name="email"
              label="Village Name"
              value={email || ""}
              onChange={handleChange}
              validators={["required", "isEmail"]}
              errorMessages={["This field is required", "Email is not valid"]}
              fullWidth
              sx={{ mb: 2 }}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={date}
                onChange={handleDateChange}
                renderInput={(props) => (
                  <TextValidator
                    {...props}
                    label="Date picker"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                )}
              />
            </LocalizationProvider>
            <TextValidator
              type="number"
              name="creditCard"
              label="Khasra Number"
              value={creditCard || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["This field is required"]}
              fullWidth
              sx={{ mb: 2 }}
            />
            <Typography variant="h6">Date of Registration</Typography>
            <TextValidator
              type="date"
              name="registrationDate"
              value={confirmPassword || ""}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <RadioGroup
              row
              name="gender"
              value={gender || ""}
              onChange={handleChange}
              sx={{ mb: 2 }}
            >
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="Others"
                control={<Radio />}
                label="Others"
              />
            </RadioGroup>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
              {[
                "Aadhaar Card (optional)",
                "Registry Doc(optional)",
                "Khasra Number(optional)",
                "Plot Doc(optional)",
                "Other (optional)",
                "Other (optional)",
              ].map((label, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <InputLabel>{label}</InputLabel>
                  <TextValidator
                    type="file"
                    fullWidth
                    inputProps={{ multiple: true }}
                    onChange={handleFileChange}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {selectedFiles.length > 0 && (
          <Box mt={3}>
            <Typography variant="subtitle1">
              {selectedFiles.length} file(s) selected:
            </Typography>
            <ul>
              {Array.from(selectedFiles).map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </Box>
        )}

        <FormControlLabel
          control={<Checkbox />}
          label="I have read and agree to the terms of service."
          sx={{ mt: 2 }}
        />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                py: 1.5,
                fontSize: "16px",
                bgcolor: "primary.main",
                "&:hover": { bgcolor: "primary.dark" },
              }}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              type="reset"
              variant="outlined"
              color="secondary"
              fullWidth
              sx={{
                py: 1.5,
                fontSize: "16px",
              }}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </ValidatorForm>
    </Box>
  );
};

export default UpdateFrom
