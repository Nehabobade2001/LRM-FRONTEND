// // import React, { useState } from 'react';
// // import {
// //   Button,
// //   TextField,
// //   Grid,
// //   Typography,
// //   Avatar,
// //   IconButton,
// //   Box,
// //   styled,
// //   FormControl,
// //   FormLabel,
// //   RadioGroup,
// //   Radio,
// //   FormControlLabel,
// // } from '@mui/material';
// // import { PhotoCamera } from '@mui/icons-material';

// // const Input = styled('input')({
// //   display: 'none',
// // });

// // const CreateTeam = () => {

// //     const [profile, setProfile] = useState({
// //         username: '',
// //         email: '',
// //         bio: '',
// //         gender: '',
// //         profilePicture: '',
// //       });

// //       const handleChange = (e) => {
// //         setProfile({
// //           ...profile,
// //           [e.target.name]: e.target.value,
// //         });
// //       };

// //       const handleFileChange = (e) => {
// //         const file = e.target.files[0];
// //         if (file) {
// //           const reader = new FileReader();
// //           reader.onload = () => {
// //             setProfile({
// //               ...profile,
// //               profilePicture: reader.result,
// //             });
// //           };
// //           reader.readAsDataURL(file);
// //         }
// //       };

// //       const handleSubmit = (e) => {
// //         e.preventDefault();
// //         console.log(profile); // Send profile data to the backend here
// //       };
// //   return (
// //     <Box
// //       sx={{
// //         maxWidth: 600,
// //         margin: 'auto',
// //         padding: 4,
// //         boxShadow: 3,
// //         borderRadius: 2,
// //       }}
// //     >
// //       <Typography variant="h4" component="h1" gutterBottom align="center">
// //         Create User Profile
// //       </Typography>
// //       <form onSubmit={handleSubmit}>
// //         <Grid container spacing={3}>
// //           {/* Profile Picture */}
// //           <Grid item xs={12} align="center">
// //             <Avatar
// //               alt="Profile Picture"
// //               src={profile.profilePicture}
// //               sx={{ width: 100, height: 100, marginBottom: 2 }}
// //             />
// //             <label htmlFor="profile-upload">
// //               <Input
// //                 accept="image/*"
// //                 id="profile-upload"
// //                 type="file"
// //                 onChange={handleFileChange}
// //               />
// //               <IconButton
// //                 color="primary"
// //                 aria-label="upload picture"
// //                 component="span"
// //               >
// //                 <PhotoCamera />
// //               </IconButton>
// //             </label>
// //             {profile.profilePicture && (
// //               <Typography variant="body2" color="textSecondary">
// //                 Profile picture selected
// //               </Typography>
// //             )}
// //           </Grid>

// //           {/* Username Field */}
// //           <Grid item xs={12}>
// //             <TextField
// //               fullWidth
// //               label="Username"
// //               name="username"
// //               variant="outlined"
// //               value={profile.username}
// //               onChange={handleChange}
// //               required
// //             />
// //           </Grid>

// //           {/* Email Field */}
// //           <Grid item xs={12}>
// //             <TextField
// //               fullWidth
// //               label="Email"
// //               name="email"
// //               variant="outlined"
// //               type="email"
// //               value={profile.email}
// //               onChange={handleChange}
// //               required
// //             />
// //           </Grid>

// //           {/* Bio Field */}
// //           <Grid item xs={12}>
// //             <TextField
// //               fullWidth
// //               label="Bio"
// //               name="bio"
// //               variant="outlined"
// //               multiline
// //               rows={4}
// //               value={profile.bio}
// //               onChange={handleChange}
// //             />
// //           </Grid>

// //           {/* Gender Selection */}
// //           <Grid item xs={12}>
// //             <FormControl component="fieldset">
// //               <FormLabel component="legend">Gender</FormLabel>
// //               <RadioGroup
// //                 row
// //                 name="gender"
// //                 value={profile.gender}
// //                 onChange={handleChange}
// //               >
// //                 <FormControlLabel
// //                   value="male"
// //                   control={<Radio />}
// //                   label="Male"
// //                 />
// //                 <FormControlLabel
// //                   value="female"
// //                   control={<Radio />}
// //                   label="Female"
// //                 />
// //                 <FormControlLabel
// //                   value="other"
// //                   control={<Radio />}
// //                   label="Other"
// //                 />
// //               </RadioGroup>
// //             </FormControl>
// //           </Grid>

// //           {/* Submit Button */}
// //           <Grid item xs={12} align="center">
// //             <Button
// //               variant="contained"
// //               color="primary"
// //               type="submit"
// //               sx={{ mt: 2 }}
// //             >
// //               Create Profile
// //             </Button>
// //           </Grid>
// //         </Grid>
// //       </form>
// //     </Box>
// //   )
// // }

// // export default CreateTeam

// // import React, { useState, useEffect } from "react";
// // import {
// //   Button,
// //   TextField,
// //   Grid,
// //   Typography,
// //   Avatar,
// //   IconButton,
// //   Box,
// //   styled,
// //   FormControl,
// //   FormLabel,
// //   RadioGroup,
// //   Radio,
// //   FormControlLabel,
// // } from "@mui/material";
// // import { PhotoCamera } from "@mui/icons-material";
// // import { Delete } from "@mui/icons-material";

// // const Input = styled("input")({
// //   display: "none",
// // });

// // const CreateTeam = () => {
// //   const [profile, setProfile] = useState({
// //     username: "",
// //     email: "",
// //     password: "",
// //     bio: "",
// //     gender: "",
// //     profilePicture: "",
// //   });

// //   const [isEdit, setIsEdit] = useState(false);

// //   const handleChange = (e) => {
// //     setProfile({
// //       ...profile,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onload = () => {
// //         setProfile({
// //           ...profile,
// //           profilePicture: reader.result,
// //         });
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (isEdit) {
// //       console.log("Profile updated:", profile);
// //     } else {
// //       console.log("Profile created:", profile);
// //     }
// //   };

// //   const handleDelete = () => {
// //     setProfile({
// //       username: "",
// //       email: "",
// //       password: "",
// //       bio: "",
// //       gender: "",
// //       profilePicture: "",
// //     });
// //     console.log("Profile deleted");
// //   };

// //   useEffect(() => {
    
// //     const userData = {
// //       username: "john_doe",
// //       email: "john@example.com",
// //       bio: "Software Developer",
// //       gender: "male",
// //       profilePicture: "",
// //     };
// //     setProfile(userData);
// //     setIsEdit(true);
// //   }, []);

// //   return (

// //     <Box
// //       sx={{
// //         maxWidth: 600,
// //         margin: "auto",
// //         padding: 4,
// //         boxShadow: 3,
// //         borderRadius: 2,
// //       }}
// //     >


// //       <Typography variant="h4" component="h1" gutterBottom align="center">
// //         {isEdit ? "Update Profile" : "Create Profile"}
// //       </Typography>

// //       <form onSubmit={handleSubmit}>
// //         <Grid container spacing={3}>
// //           <Grid item xs={12} align="center">
// //             <Avatar
// //               alt="Profile Picture"
// //               src={profile.profilePicture}
// //               sx={{ width: 100, height: 100, marginBottom: 2 }}
// //             />
// //             <label htmlFor="profile-upload">
// //               <Input
// //                 accept="image/*"
// //                 id="profile-upload"
// //                 type="file"
// //                 onChange={handleFileChange}
// //               />
// //               <IconButton
// //                 color="primary"
// //                 aria-label="upload picture"
// //                 component="span"
// //               >
// //                 <PhotoCamera />
// //               </IconButton>
// //             </label>
// //             {profile.profilePicture && (
// //               <Typography variant="body2" color="textSecondary">
// //                 Profile picture selected
// //               </Typography>
// //             )}
// //           </Grid>


      
// //           <Grid item xs={12}>
// //             <TextField
// //               fullWidth
// //               label="Username"
// //               name="username"
// //               variant="outlined"
// //               value={profile.username}
// //               onChange={handleChange}
// //               required
// //             />
// //           </Grid>

         
// //           <Grid item xs={12}>
// //             <TextField
// //               fullWidth
// //               label="Email"
// //               name="email"
// //               variant="outlined"
// //               type="email"
// //               value={profile.email}
// //               onChange={handleChange}
// //               required
// //             />
// //           </Grid>

         
// //           <Grid item xs={12}>
// //             <TextField
// //               fullWidth
// //               label="Password"
// //               name="password"
// //               type="password"
// //               variant="outlined"
// //               value={profile.password}
// //               onChange={handleChange}
// //               required
// //             />
// //           </Grid>

      
// //           <Grid item xs={12}>
// //             <TextField
// //               fullWidth
// //               label="Bio"
// //               name="bio"
// //               variant="outlined"
// //               multiline
// //               rows={4}
// //               value={profile.bio}
// //               onChange={handleChange}
// //             />
// //           </Grid>

        
// //           <Grid item xs={12}>
// //             <FormControl component="fieldset">
// //               <FormLabel component="legend">Gender</FormLabel>
// //               <RadioGroup
// //                 row
// //                 name="gender"
// //                 value={profile.gender}
// //                 onChange={handleChange}
// //               >
// //                 <FormControlLabel
// //                   value="male"
// //                   control={<Radio />}
// //                   label="Male"
// //                 />
// //                 <FormControlLabel
// //                   value="female"
// //                   control={<Radio />}
// //                   label="Female"
// //                 />
// //                 <FormControlLabel
// //                   value="other"
// //                   control={<Radio />}
// //                   label="Other"
// //                 />
// //               </RadioGroup>
// //             </FormControl>
// //           </Grid>

          
// //           <Grid item xs={12} align="center">
// //             <Button
// //               variant="contained"
// //               color="primary"
// //               type="submit"
// //               sx={{ mt: 2, mr: 1 }}
// //             >
// //               {isEdit ? "Update Profile" : "Create Profile"}
// //             </Button>
// //             {isEdit && (
// //               <Button
// //                 variant="outlined"
// //                 color="error"
// //                 startIcon={<Delete />}
// //                 onClick={handleDelete}
// //                 sx={{ mt: 2 }}
// //               >
// //                 Delete Profile
// //               </Button>
// //             )}
// //           </Grid>
// //         </Grid>
// //       </form>
// //     </Box>
// //   );
// // };

// // export default CreateTeam;


// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   TextField,
//   Grid,
//   Typography,
//   Avatar,
//   IconButton,
//   Box,
//   styled,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   Radio,
//   FormControlLabel,
// } from "@mui/material";
// import { PhotoCamera } from "@mui/icons-material";
// import { Delete } from "@mui/icons-material";

// const Input = styled("input")({
//   display: "none",
// });

// const CreateProfile = () => {
//   const [profile, setProfile] = useState({
//     username: "",
//     email: "",
//     password: "",
//     bio: "",
//     gender: "",
//     profilePicture: "",
//   });

//   const [isEdit, setIsEdit] = useState(false);

//   // Handle form input change
//   const handleChange = (e) => {
//     setProfile({
//       ...profile,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle file (profile picture) input change
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setProfile({
//           ...profile,
//           profilePicture: reader.result,
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle form submission for create or update
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEdit) {
//       console.log("Profile updated:", profile);
//     } else {
//       console.log("Profile created:", profile);
//     }
//   };

//   // Handle profile deletion
//   const handleDelete = () => {
//     setProfile({
//       username: "",
//       email: "",
//       password: "",
//       bio: "",
//       gender: "",
//       profilePicture: "",
//     });
//     setIsEdit(false);
//     console.log("Profile deleted");
//   };

//   // Use effect to populate form with existing profile data
//   useEffect(() => {
//     const userData = {
//       username: "john_doe",
//       email: "john@example.com",
//       bio: "Software Developer",
//       gender: "male",
//       profilePicture: "",
//     };
//     setProfile(userData);
//     setIsEdit(true);  // Change to true for edit mode
//   }, []);

//   return (
//     <Box
//       sx={{
//         maxWidth: 600,
//         margin: "auto",
//         padding: 4,
//         boxShadow: 3,
//         borderRadius: 2,
//       }}
//     >
//       <Typography variant="h4" component="h1" gutterBottom align="center">
//         {isEdit ? "Update Profile" : "Create Profile"}
//       </Typography>

//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} align="center">
//             <Avatar
//               alt="Profile Picture"
//               src={profile.profilePicture}
//               sx={{ width: 100, height: 100, marginBottom: 2 }}
//             />
//             <label htmlFor="profile-upload">
//               <Input
//                 accept="image/*"
//                 id="profile-upload"
//                 type="file"
//                 onChange={handleFileChange}
//               />
//               <IconButton
//                 color="primary"
//                 aria-label="upload picture"
//                 component="span"
//               >
//                 <PhotoCamera />
//               </IconButton>
//             </label>
//             {profile.profilePicture && (
//               <Typography variant="body2" color="textSecondary">
//                 Profile picture selected
//               </Typography>
//             )}
//           </Grid>

//           {/* Username */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Username"
//               name="username"
//               variant="outlined"
//               value={profile.username}
//               onChange={handleChange}
//               required
//             />
//           </Grid>

//           {/* Email */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               variant="outlined"
//               type="email"
//               value={profile.email}
//               onChange={handleChange}
//               required
//             />
//           </Grid>

//           {/* Password */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Password"
//               name="password"
//               type="password"
//               variant="outlined"
//               value={profile.password}
//               onChange={handleChange}
//               required
//             />
//           </Grid>

//           {/* Bio */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Bio"
//               name="bio"
//               variant="outlined"
//               multiline
//               rows={4}
//               value={profile.bio}
//               onChange={handleChange}
//             />
//           </Grid>

//           {/* Gender */}
//           <Grid item xs={12}>
//             <FormControl component="fieldset">
//               <FormLabel component="legend">Gender</FormLabel>
//               <RadioGroup
//                 row
//                 name="gender"
//                 value={profile.gender}
//                 onChange={handleChange}
//               >
//                 <FormControlLabel
//                   value="male"
//                   control={<Radio />}
//                   label="Male"
//                 />
//                 <FormControlLabel
//                   value="female"
//                   control={<Radio />}
//                   label="Female"
//                 />
//                 <FormControlLabel
//                   value="other"
//                   control={<Radio />}
//                   label="Other"
//                 />
//               </RadioGroup>
//             </FormControl>
//           </Grid>

//           {/* Buttons */}
//           <Grid item xs={12} align="center">
//             <Button
//               variant="contained"
//               color="primary"
//               type="submit"
//               sx={{ mt: 2, mr: 1 }}
//             >
//               {isEdit ? "Update Profile" : "Create Profile"}
//             </Button>
//             {isEdit && (
//               <Button
//                 variant="outlined"
//                 color="error"
//                 startIcon={<Delete />}
//                 onClick={handleDelete}
//                 sx={{ mt: 2 }}
//               >
//                 Delete Profile
//               </Button>
//             )}
//           </Grid>
//         </Grid>
//       </form>
//     </Box>
//   );
// };

// export default CreateProfile;



import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem, FormControl, RadioGroup, FormControlLabel, Radio, InputAdornment } from '@mui/material';
import { Send } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #3F51B5 30%, #FFEB3B 90%)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
  },
  header: {
    marginBottom: '1.5rem',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signupButton: {
    background: 'linear-gradient(45deg, #3F51B5, #FFEB3B)',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      background: 'linear-gradient(45deg, #3F51B5, #FFC107)',
    },
  },
  signUpText: {
    transform: 'rotate(-90deg)',
    position: 'absolute',
    top: '30%',
    left: '-2rem',
    fontWeight: 'bold',
    color: '#3F51B5',
    fontSize: '1.5rem',
  },
  otpBtn: {
    marginLeft: '10px',
  },
}));

const  CreateProfile = () => {
  const classes = useStyles();
  const [gender, setGender] = useState('female');
  const [nationality, setNationality] = useState('American');

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
              <RadioGroup
                row
                value={gender}
                onChange={handleGenderChange}
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
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
            <TextField label="Password" variant="outlined" type="password" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Confirm Password" variant="outlined" type="password" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" className={classes.signupButton} fullWidth>
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


