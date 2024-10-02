// import { DatePicker } from "@mui/lab";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import {
//   Button,
//   Checkbox,
//   FormControlLabel,
//   Grid,
//   Icon,
//   Radio,
//   RadioGroup,
//   InputLabel,
//   styled,
// } from "@mui/material";
// import { Span } from "app/components/Typography";
// import { useEffect, useState } from "react";
// import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
// import { Box, Typography } from "@mui/material";

// const TextField = styled(TextValidator)(() => ({
//   width: "100%",
//   marginBottom: "16px",
// }));

// const SimpleForm = () => {
//   const [state, setState] = useState({ date: new Date() });

//   const [selectedFiles, setSelectedFiles] = useState([]);

//   const handleFileChange = (e) => {
//     setSelectedFiles(e.target.files);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();

//     for (let i = 0; i < selectedFiles.length; i++) {
//       formData.append("documents", selectedFiles[i]);
//     }

//     console.log(selectedFiles);
//   };

//   useEffect(() => {
//     ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
//       if (value !== state.password) return false;

//       return true;
//     });
//     return () => ValidatorForm.removeValidationRule("isPasswordMatch");
//   }, [state.password]);

//   const handleChange = (event) => {
//     event.persist();
//     setState({ ...state, [event.target.name]: event.target.value });
//   };

//   const handleDateChange = (date) => setState({ ...state, date });

//   const {
//     username,
//     firstName,
//     creditCard,
//     mobile,
//     password,
//     confirmPassword,
//     gender,
//     date,
//     email,
//   } = state;

//   return (
//     <div>
//       <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
//         <Grid container spacing={6}>
//           <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
//             <TextField
//               type="text"
//               name="username"
//               id="standard-basic"
//               value={username || ""}
//               onChange={handleChange}
//               errorMessages={["this field is required"]}
//               label="FarmerName"
//               validators={[
//                 "required",
//                 "minStringLength: 4",
//                 "maxStringLength: 9",
//               ]}
//             />

//             <TextField
//               type="text"
//               name="firstName"
//               label="First Name"
//               onChange={handleChange}
//               value={firstName || ""}
//               validators={["required"]}
//               errorMessages={["this field is required"]}
//             />

//             <TextField
//               type="text"
//               name="mobile"
//               value={mobile || ""}
//               label="Mobile Nubmer"
//               onChange={handleChange}
//               validators={["required"]}
//               errorMessages={["this field is required"]}
//             />

//             <TextField
//               type="email"
//               name="email"
//               label="Village Name"
//               value={email || ""}
//               onChange={handleChange}
//               validators={["required", "isEmail"]}
//               errorMessages={["this field is required", "email is not valid"]}
//             />

//             <LocalizationProvider dateAdapter={AdapterDateFns}>
//               <DatePicker
//                 value={date}
//                 onChange={handleDateChange}
//                 renderInput={(props) => (
//                   <TextField
//                     {...props}
//                     label="Date picker"
//                     id="mui-pickers-date"
//                     sx={{ mb: 2, width: "100%" }}
//                   />
//                 )}
//               />
//             </LocalizationProvider>

//             <TextField
//               sx={{ mb: 4 }}
//               type="number"
//               name="creditCard"
//               label="Khasra Numbe"
//               onChange={handleChange}
//               value={creditCard || ""}
//               errorMessages={["this field is required"]}
//               validators={[
//                 "required",
//                 "minStringLength:16",
//                 "maxStringLength: 16",
//               ]}
//             />
//             <Typography variant="h6" component="h2">
//               Date of Registration
//             </Typography>
//             <TextField
//               sx={{ mb: 4 }}
//               type="date"
//               name="creditCard"
//               label=" Date of Registration"
//               onChange={handleChange}
//               value={creditCard || ""}
//               errorMessages={["this field is required"]}
//               validators={[
//                 "required",
//                 "minStringLength:16",
//                 "maxStringLength: 16",
//               ]}
//             />

//             <TextField
//               type="Number"
//               name="confirmPassword"
//               onChange={handleChange}
//               label="Plot Number"
//               value={confirmPassword || ""}
//               validators={["required", "isPasswordMatch"]}
//               errorMessages={[
//                 "this field is required",
//                 "password didn't match",
//               ]}
//             />
//             <RadioGroup
//               row
//               name="gender"
//               sx={{ mb: 2 }}
//               value={gender || ""}
//               onChange={handleChange}
//             >
//               <FormControlLabel
//                 value="Male"
//                 label="Male"
//                 labelPlacement="end"
//                 control={<Radio color="secondary" />}
//               />

//               <FormControlLabel
//                 value="Female"
//                 label="Female"
//                 labelPlacement="end"
//                 control={<Radio color="secondary" />}
//               />

//               <FormControlLabel
//                 value="Others"
//                 label="Others"
//                 labelPlacement="end"
//                 control={<Radio color="secondary" />}
//               />
//             </RadioGroup>
//           </Grid>

//           <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
//             <Box
//               component="form"
//               onSubmit={handleSubmit}
//               sx={{
//                 maxWidth: "600px",
//                 mx: "auto",
//                 p: 3,
//                 boxShadow: 2,
//                 borderRadius: 2,
//                 bgcolor: "#f9f9f9",
//               }}
//             >
//               <Grid container spacing={2}>
//                 {[
//                   "Policy Copy (optional)",
//                   "Policy Condition (optional)",
//                   "Discharge Summary (optional)",
//                   "Prescription (optional)",
//                   "Hospital Bill (optional)",
//                   "Payment Cash Receipt (optional)",
//                 ].map((label, index) => (
//                   <Grid item xs={12} key={index}>
//                     <InputLabel>{label}</InputLabel>
//                     <TextField
//                       fullWidth
//                       type="file"
//                       inputProps={{ multiple: true }}
//                       onChange={handleFileChange}
//                     />
//                   </Grid>
//                 ))}

//                 <Grid item xs={12}>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     type="submit"
//                     fullWidth
//                     sx={{
//                       py: 1.5,
//                       fontSize: "16px",
//                       bgcolor: "primary.main",
//                       "&:hover": { bgcolor: "primary.dark" },
//                     }}
//                   >
//                     Save
//                   </Button>
//                 </Grid>
//               </Grid>

//               {selectedFiles.length > 0 && (
//                 <Box mt={3}>
//                   <Typography variant="subtitle1">
//                     {selectedFiles.length} file(s) selected:
//                   </Typography>
//                   <ul>
//                     {Array.from(selectedFiles).map((file, index) => (
//                       <li key={index}>{file.name}</li>
//                     ))}
//                   </ul>
//                 </Box>
//               )}
//             </Box>
//             <FormControlLabel
//               control={<Checkbox />}
//               label="I have read and agree to the terms of service."
//             />
//           </Grid>
//         </Grid>
//       </ValidatorForm>
//     </div>
//   );
// };

// export default SimpleForm;

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

const SimpleForm = () => {
  const [state, setState] = useState({ date: new Date() });
  const [selectedFiles, setSelectedFiles] = useState([]);

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
      </ValidatorForm>
    </Box>
  );
};

export default SimpleForm;
