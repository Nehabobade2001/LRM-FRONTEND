// // import { useState } from "react";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import { Card, Checkbox, Grid, TextField, Box, styled, useTheme } from "@mui/material";
// // import { LoadingButton } from "@mui/lab";
// // import { Formik } from "formik";
// // import * as Yup from "yup";

// // import useAuth from "app/hooks/useAuth";
// // import { Paragraph } from "app/components/Typography";

// // const FlexBox = styled(Box)(() => ({
// //   display: "flex",
// // }));

// // const ContentBox = styled("div")(() => ({
// //   height: "100%",
// //   padding: "32px",
// //   position: "relative",
// //   background: "rgba(0, 0, 0, 0.01)",
// // }));

// // const StyledRoot = styled("div")(() => ({
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "center",
// //   backgroundColor: "#1A2038",
// //   minHeight: "100% !important",
// //   "& .card": {
// //     maxWidth: 800,
// //     minHeight: 400,
// //     margin: "1rem",
// //     display: "flex",
// //     borderRadius: 12,
// //     alignItems: "center",
// //   },
// //   ".img-wrapper": {
// //     height: "100%",
// //     minWidth: 320,
// //     display: "flex",
// //     padding: "2rem",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// // }));

// // // initial login credentials
// // const initialValues = {
// //   email: "jason@ui-lib.com",
// //   password: "dummyPass",
// //   remember: true,
// // };

// // const validationSchema = Yup.object().shape({
// //   password: Yup.string().min(6, "Password must be 6 character length").required("Password is required!"),
// //   email: Yup.string().email("Invalid Email address").required("Email is required!"),
// // });





// // export default function JwtLogin() {
// //   const theme = useTheme();
// //   const navigate = useNavigate();
// //   const [loading, setLoading] = useState(false);

// //   const { login } = useAuth();

// //   const handleFormSubmit = async (values) => {
// //     setLoading(true);
// //     try {
// //       await login(values.email, values.password);
// //       navigate("/");
// //     } catch (e) {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <StyledRoot>
// //       <Card className="card">
// //         <Grid container>
// //           <Grid item sm={6} xs={12}>
// //             <div className="img-wrapper">
// //               <img src="/assets/images/illustrations/dreamer.svg" width="100%" alt="Illustration" />
// //             </div>
// //           </Grid>

// //           <Grid item sm={6} xs={12}>
// //             <ContentBox>
// //               <img  style={{objectFit:"cover",overflow:"hidden",width:"full",height:"60px"}} src='/assets/images/rudraksh-logo-1 (3).png' alt="Logo" />
// //               <Formik
// //                 onSubmit={handleFormSubmit}
// //                 initialValues={initialValues}
// //                 validationSchema={validationSchema}>
// //                 {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
// //                   <form onSubmit={handleSubmit}>
// //                     <TextField
// //                       fullWidth
// //                       size="small"
// //                       type="email"
// //                       name="email"
// //                       label="Email"
// //                       variant="outlined"
// //                       onBlur={handleBlur}
// //                       value={values.email}
// //                       onChange={handleChange}
// //                       helperText={touched.email && errors.email}
// //                       error={Boolean(errors.email && touched.email)}
// //                       sx={{ mb: 3 }}
// //                     />

// //                     <TextField
// //                       fullWidth
// //                       size="small"
// //                       name="password"
// //                       type="password"
// //                       label="Password"
// //                       variant="outlined"
// //                       onBlur={handleBlur}
// //                       value={values.password}
// //                       onChange={handleChange}
// //                       helperText={touched.password && errors.password}
// //                       error={Boolean(errors.password && touched.password)}
// //                       sx={{ mb: 1.5 }}
// //                     />

// //                     <FlexBox justifyContent="space-between">
// //                       <FlexBox gap={1}>
// //                         <Checkbox
// //                           size="small"
// //                           name="remember"
// //                           onChange={handleChange}
// //                           checked={values.remember}
// //                           sx={{ padding: 0 }}
// //                         />
// //                         <Paragraph>Remember Me</Paragraph>
// //                       </FlexBox>

// //                       <NavLink
// //                         to="/session/forgot-password"
// //                         style={{ color: theme.palette.primary.main }}>
// //                         Forgot password?
// //                       </NavLink>
// //                     </FlexBox>

// //                     <LoadingButton
// //                       type="submit"
// //                       color="primary"
// //                       loading={loading}
// //                       variant="contained"
// //                       sx={{ my: 2 }}>
// //                       Login
// //                     </LoadingButton>

// //                     <Paragraph>
// //                       Don't have an account?
// //                       <NavLink
// //                         to="/session/signup"
// //                         style={{ color: theme.palette.primary.main, marginLeft: 5 }}>
// //                         Register
// //                       </NavLink>
// //                     </Paragraph>
// //                   </form>
// //                 )}
// //               </Formik>
// //             </ContentBox>
// //           </Grid>
// //         </Grid>
// //       </Card>
// //     </StyledRoot>
// //   );
// // }

// // import { useState } from "react";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import {
// //   Card,
// //   Checkbox,
// //   Grid,
// //   TextField,
// //   Box,
// //   styled,
// //   useTheme,
// // } from "@mui/material";
// // import { LoadingButton } from "@mui/lab";
// // import { Formik } from "formik";
// // import * as Yup from "yup";

// // import useAuth from "app/hooks/useAuth";
// // import { Paragraph } from "app/components/Typography";

// // const FlexBox = styled(Box)(() => ({
// //   display: "flex",
// //   justifyContent: "center", // Center content horizontally
// //   alignItems: "center", // Center content vertically
// // }));

// // const ContentBox = styled("div")(() => ({
// //   height: "100%",
// //   padding: "32px",
// //   position: "relative",
// //   background: "rgba(0, 0, 0, 0.01)",
// //   textAlign: "center", // Center text in this box
// // }));

// // const StyledRoot = styled("div")(() => ({
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "center",
// //   backgroundColor: "#1A2038",
// //   minHeight: "100vh", // Full height of the viewport
// //   "& .card": {
// //     maxWidth: 800,
// //     minHeight: 400,
// //     margin: "1rem",
// //     display: "flex",
// //     borderRadius: 12,
// //     flexDirection: "column", // Stack child elements vertically
// //     alignItems: "center", // Center items inside the card
// //     padding: "2rem", // Add padding for aesthetics
// //   },
// //   ".img-wrapper": {
// //     height: "100%",
// //     minWidth: 320,
// //     display: "flex",
// //     padding: "2rem",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// // }));

// // // Initial login credentials
// // const initialValues = {
// //   email: "jason@ui-lib.com",
// //   password: "dummyPass",
// //   remember: true,
// // };

// // const validationSchema = Yup.object().shape({
// //   password: Yup.string()
// //     .min(6, "Password must be 6 character length")
// //     .required("Password is required!"),
// //   email: Yup.string()
// //     .email("Invalid Email address")
// //     .required("Email is required!"),
// // });

// // export default function JwtLogin() {
// //   const theme = useTheme();
// //   const navigate = useNavigate();
// //   const [loading, setLoading] = useState(false);

// //   const { login } = useAuth();

// //   const handleFormSubmit = async (values) => {
// //     setLoading(true);
// //     try {
// //       await login(values.email, values.password);
// //       navigate("/");
// //     } catch (e) {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <StyledRoot>
// //       <Card className="card">
// //         <Grid container>
// //           <Grid item sm={6} xs={12}>
// //             <div className="img-wrapper">
// //               <img
// //                 src="/assets/images/illustrations/dreamer.svg"
// //                 width="100%"
// //                 alt="Illustration"
// //               />
// //             </div>
// //           </Grid>

// //           <Grid item sm={6} xs={12}>
// //             <ContentBox>
// //               <img
// //                 style={{
// //                   objectFit: "cover",
// //                   overflow: "hidden",
// //                   width: "100%",
// //                   height: "60px",
// //                 }}
// //                 src="/assets/images/rudraksh-logo-1 (3).png"
// //                 alt="Logo"
// //               />
// //               <Formik
// //                 onSubmit={handleFormSubmit}
// //                 initialValues={initialValues}
// //                 validationSchema={validationSchema}
// //               >
// //                 {({
// //                   values,
// //                   errors,
// //                   touched,
// //                   handleChange,
// //                   handleBlur,
// //                   handleSubmit,
// //                 }) => (
// //                   <form onSubmit={handleSubmit}>
// //                     <TextField
// //                       fullWidth
// //                       size="small"
// //                       type="email"
// //                       name="email"
// //                       label="Email"
// //                       variant="outlined"
// //                       onBlur={handleBlur}
// //                       value={values.email}
// //                       onChange={handleChange}
// //                       helperText={touched.email && errors.email}
// //                       error={Boolean(errors.email && touched.email)}
// //                       sx={{ mb: 3 }}
// //                     />

// //                     <TextField
// //                       fullWidth
// //                       size="small"
// //                       name="password"
// //                       type="password"
// //                       label="Password"
// //                       variant="outlined"
// //                       onBlur={handleBlur}
// //                       value={values.password}
// //                       onChange={handleChange}
// //                       helperText={touched.password && errors.password}
// //                       error={Boolean(errors.password && touched.password)}
// //                       sx={{ mb: 1.5 }}
// //                     />
// //                     {/* 
// //                     <FlexBox justifyContent="space-between" sx={{ width: "100%", mb: 2 }}>
// //                       <FlexBox gap={1}>
// //                         <Checkbox
// //                           size="small"
// //                           name="remember"
// //                           onChange={handleChange}
// //                           checked={values.remember}
// //                           sx={{ padding: 0 }}
// //                         />
// //                         <Paragraph>Remember Me</Paragraph>
// //                       </FlexBox>

// //                       <NavLink
// //                         to="/session/forgot-password"
// //                         style={{ color: theme.palette.primary.main }}>
// //                         Forgot password?
// //                       </NavLink>
// //                     </FlexBox> */}

// //                     <LoadingButton
// //                       type="submit"
// //                       color="primary"
// //                       loading={loading}
// //                       variant="contained"
// //                       sx={{
// //                         my: 2,
// //                         width: "280px", // Adjust the width as needed
// //                         height: "50px", // Adjust the height as needed
// //                         fontSize: "16px", // Adjust the font size if needed
// //                         padding: "10px 20px", // Adjust padding for more spacing
// //                         backgroundColor: theme.palette.primary.main,
// //                         "&:hover": {
// //                           backgroundColor: theme.palette.primary.dark,
// //                         },
// //                       }}
// //                     >
// //                       Login
// //                     </LoadingButton>

// //                     {/* <Paragraph>
// //                       Don't have an account?
// //                       <NavLink
// //                         to="/session/signup"
// //                         style={{ color: theme.palette.primary.main, marginLeft: 5 }}>
// //                         Register
// //                       </NavLink>
// //                     </Paragraph> */}
// //                   </form>
// //                 )}
// //               </Formik>
// //             </ContentBox>
// //           </Grid>
// //         </Grid>
// //       </Card>
// //     </StyledRoot>
// //   );
// // }



// import { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import {
//   Card,
//   Grid,
//   TextField,
//   Box,
//   styled,
//   useTheme,
// } from "@mui/material";
// import { LoadingButton } from "@mui/lab";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import useAuth from "app/hooks/useAuth";

// const FlexBox = styled(Box)(() => ({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// }));

// const ContentBox = styled("div")(() => ({
//   height: "100%",
//   padding: "32px",
//   position: "relative",
//   background: "rgba(0, 0, 0, 0.01)",
//   textAlign: "center",
// }));

// const StyledRoot = styled("div")(() => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   backgroundColor: "#1A2038",
//   minHeight: "100vh",
//   "& .card": {
//     maxWidth: 800,
//     minHeight: 400,
//     margin: "1rem",
//     display: "flex",
//     borderRadius: 12,
//     flexDirection: "column",
//     alignItems: "center",
//     padding: "2rem",
//   },
//   ".img-wrapper": {
//     height: "100%",
//     minWidth: 320,
//     display: "flex",
//     padding: "2rem",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// }));

// // Initial login credentials
// const initialValues = {
//   email: "jason@ui-lib.com",
//   password: "dummyPass",
//   remember: true,
// };

// const validationSchema = Yup.object().shape({
//   password: Yup.string()
//     .min(6, "Password must be 6 character length")
//     .required("Password is required!"),
//   email: Yup.string()
//     .email("Invalid Email address")
//     .required("Email is required!"),
// });

// export default function JwtLogin() {
//   const theme = useTheme();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [showImage, setShowImage] = useState(false);

//   const { login } = useAuth();

//   const handleFormSubmit = async (values) => {
//     setLoading(true);
//     try {
//       await login(values.email, values.password);
//       navigate("/");
//     } catch (e) {
//       setLoading(false);
//     }
//   };

//   const ImageWrapper = styled("div")(() => ({
//     height: "100%",
//     minWidth: 320,
//     display: "flex",
//     padding: "2rem",
//     alignItems: "center",
//     justifyContent: "center",
//     border: "5px solid #3f51b5", // Border color
//     borderRadius: "8px", // Rounded corners
//     transition: "transform 0.5s ease", // Animation effect
//     "&:hover": {
//       transform: "scale(1.05)", // Scale effect on hover
//     },
//   }));
  
//   const ImageStyled = styled("img")(() => ({
//     width: "100%",
//     transition: "opacity 0.5s ease",
//     opacity: 0, // Start with opacity 0
//   }));
  

//   return (
//     <StyledRoot>
//       <Card className="card">
//         <Grid container>
//           {/* <Grid item sm={6} xs={12}>
//             <div className="img-wrapper">
//               <img
//                 src="/assets/images/illustrations/dreamer.svg"
//                 width="100%" 
//                 alt="Illustration"
//               />
//             </div>
//           </Grid> */}
//           <Grid item sm={6} xs={12}>
//             <ImageWrapper>
//               <ImageStyled
//                 src="/assets/images/illustrations/dreamer.svg"
//                 alt="Illustration"
//                 style={{ opacity: showImage ? 1 : 0 }} // Fade in effect
//               />
//             </ImageWrapper>
//           </Grid>

//           <Grid item sm={6} xs={12}>
//             <ContentBox>
//               <img
//                 style={{
//                   marginBottom:"10%",
//                   objectFit: "cover",
//                   overflow: "hidden",
//                   width: "100%",
//                   height: "60px",
//                 }}
//                 src="/assets/images/rudraksh-logo-1 (3).png"
//                 alt="Logo"
//               />
//               <Formik
//                 onSubmit={handleFormSubmit}
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//               >
//                 {({
//                   values,
//                   errors,
//                   touched,
//                   handleChange,
//                   handleBlur,
//                   handleSubmit,
//                 }) => (
//                   <form onSubmit={handleSubmit}>
//                     {/* Email Field */}
//                     <TextField
//                       fullWidth
//                       size="medium" // Increased size
//                       type="email"
//                       name="email"
//                       label="Email"
//                       variant="outlined"
//                       onBlur={handleBlur}
//                       value={values.email}
//                       onChange={handleChange}
//                       helperText={touched.email && errors.email}
//                       error={Boolean(errors.email && touched.email)}
//                       sx={{
//                         mb: 3,
//                         fontSize: "18px", // Larger font size
//                       }}
//                     />

//                     {/* Password Field */}
//                     <TextField
//                       fullWidth
//                       size="medium" // Increased size
//                       name="password"
//                       type="password"
//                       label="Password"
//                       variant="outlined"
//                       onBlur={handleBlur}
//                       value={values.password}
//                       onChange={handleChange}
//                       helperText={touched.password && errors.password}
//                       error={Boolean(errors.password && touched.password)}
//                       sx={{
//                         mb: 1.5,
//                         fontSize: "18px", // Larger font size
//                       }}
//                     />

//                     {/* Login Button */}
//                     <LoadingButton
//                       type="submit"
//                       color="primary"
//                       loading={loading}
//                       variant="contained"
//                       sx={{
//                         my: 2,
//                         width: "300px", // Larger width
//                         height: "55px", // Larger height
//                         fontSize: "18px", // Larger font
//                         padding: "12px 24px",
//                         backgroundColor: theme.palette.primary.main,
//                         "&:hover": {
//                           backgroundColor: theme.palette.primary.dark,
//                         },
//                       }}
//                     >
//                       Login
//                     </LoadingButton>
//                   </form>
//                 )}
//               </Formik>
//             </ContentBox>
//           </Grid>
//         </Grid>
//       </Card>
//     </StyledRoot>
//   );
// }


// import { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import {
//   Card,
//   Grid,
//   TextField,
//   Box,
//   styled,
//   useTheme,
// } from "@mui/material";
// import { LoadingButton } from "@mui/lab";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import useAuth from "app/hooks/useAuth";

// // Styled components
// const FlexBox = styled(Box)(() => ({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// }));

// const ContentBox = styled("div")(() => ({
//   height: "100%",
//   padding: "32px",
//   position: "relative",
//   background: "rgba(0, 0, 0, 0.01)",
//   textAlign: "center",
// }));

// const StyledRoot = styled("div")(() => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   backgroundColor: "#1A2038",
//   minHeight: "100vh",
//   "& .card": {
//     maxWidth: 800,
//     minHeight: 400,
//     margin: "1rem",
//     display: "flex",
//     borderRadius: 12,
//     flexDirection: "column",
//     alignItems: "center",
//     padding: "2rem",
//   },
// }));

// // Image wrapper with border and animation
// const ImageWrapper = styled("div")(() => ({
//   height: "100%",
//   minWidth: 320,
//   display: "flex",
//   padding: "2rem",
//   alignItems: "center",
//   justifyContent: "center",
//   border: "5px solid #3f51b5", // Border color
//   borderRadius: "8px", // Rounded corners
//   transition: "transform 0.5s ease", // Animation effect
//   "&:hover": {
//     transform: "scale(1.05)", // Scale effect on hover
//   },
// }));

// const ImageStyled = styled("img")(() => ({
//   width: "100%",
//   transition: "opacity 0.5s ease",
//   opacity: 0, // Start with opacity 0
// }));

// // Initial login credentials
// const initialValues = {
//   email: "jason@ui-lib.com",
//   password: "dummyPass",
//   remember: true,
// };

// const validationSchema = Yup.object().shape({
//   password: Yup.string()
//     .min(6, "Password must be 6 character length")
//     .required("Password is required!"),
//   email: Yup.string()
//     .email("Invalid Email address")
//     .required("Email is required!"),
// });

// export default function JwtLogin() {
//   const theme = useTheme();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [showImage, setShowImage] = useState(false); // State for image visibility

//   const { login } = useAuth();

//   const handleFormSubmit = async (values) => {
//     setLoading(true);
//     try {
//       await login(values.email, values.password);
//       navigate("/");
//     } catch (e) {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Show the image after the component mounts
//     setShowImage(true);
//   }, []);

//   return (
//     <StyledRoot>
//       <Card className="card">
//         <Grid container>
//           <Grid item sm={6} xs={12}>
//             <ImageWrapper>
//               <ImageStyled
//                 src="/assets/images/illustrations/dreamer.svg"
//                 alt="Illustration"
//                 style={{ opacity: showImage ? 1 : 0 }} // Fade in effect
//               />
//             </ImageWrapper>
//           </Grid>

//           <Grid item sm={6} xs={12}>
//             <ContentBox>
//               <img
//                 style={{
//                   objectFit: "cover",
//                   overflow: "hidden",
//                   width: "100%",
//                   height: "60px",
//                 }}
//                 src="/assets/images/rudraksh-logo-1 (3).png"
//                 alt="Logo"
//               />
//               <Formik
//                 onSubmit={handleFormSubmit}
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//               >
//                 {({
//                   values,
//                   errors,
//                   touched,
//                   handleChange,
//                   handleBlur,
//                   handleSubmit,
//                 }) => (
//                   <form onSubmit={handleSubmit}>
//                     {/* Email Field */}
//                     <TextField
//                       fullWidth
//                       size="medium" // Increased size
//                       type="email"
//                       name="email"
//                       label="Email"
//                       variant="outlined"
//                       onBlur={handleBlur}
//                       value={values.email}
//                       onChange={handleChange}
//                       helperText={touched.email && errors.email}
//                       error={Boolean(errors.email && touched.email)}
//                       sx={{
//                         mb: 3,
//                         fontSize: "18px", // Larger font size
//                       }}
//                     />

//                     {/* Password Field */}
//                     <TextField
//                       fullWidth
//                       size="medium" // Increased size
//                       name="password"
//                       type="password"
//                       label="Password"
//                       variant="outlined"
//                       onBlur={handleBlur}
//                       value={values.password}
//                       onChange={handleChange}
//                       helperText={touched.password && errors.password}
//                       error={Boolean(errors.password && touched.password)}
//                       sx={{
//                         mb: 1.5,
//                         fontSize: "18px", // Larger font size
//                       }}
//                     />

//                     {/* Login Button */}
//                     <LoadingButton
//                       type="submit"
//                       color="primary"
//                       loading={loading}
//                       variant="contained"
//                       sx={{
//                         my: 2,
//                         width: "300px", // Larger width
//                         height: "55px", // Larger height
//                         fontSize: "18px", // Larger font
//                         padding: "12px 24px",
//                         backgroundColor: theme.palette.primary.main,
//                         "&:hover": {
//                           backgroundColor: theme.palette.primary.dark,
//                         },
//                       }}
//                     >
//                       Login
//                     </LoadingButton>
//                   </form>
//                 )}
//               </Formik>
//             </ContentBox>
//           </Grid>
//         </Grid>
//       </Card>
//     </StyledRoot>
//   );
// }


// import { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import {
//   Card,
//   Grid,
//   TextField,
//   Box,
//   styled,
//   useTheme,
// } from "@mui/material";
// import { LoadingButton } from "@mui/lab";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import useAuth from "app/hooks/useAuth";

// // Styled components
// const FlexBox = styled(Box)(() => ({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// }));

// const ContentBox = styled("div")(() => ({
//   height: "100%",
//   padding: "32px",
//   position: "relative",
//   background: "rgba(255, 255, 255, 0.1)", // Light background for contrast
//   textAlign: "center",
//   borderRadius: "12px", // Rounded corners for the content box
//   boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
// }));

// const StyledRoot = styled("div")(() => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   backgroundColor: "#1A2038",
//   minHeight: "100vh",
//   "& .card": {
//     maxWidth: 800,
//     minHeight: 400,
//     margin: "1rem",
//     display: "flex",
//     borderRadius: 12,
//     flexDirection: "column",
//     alignItems: "center",
//     padding: "2rem",
//   },
// }));

// // Image wrapper with border and animation
// const ImageWrapper = styled("div")(() => ({
//   height: "100%",
//   minWidth: 320,
//   display: "flex",
//   padding: "2rem",
//   alignItems: "center",
//   justifyContent: "center",
//   border: "5px solid #3f51b5", // Border color
//   borderRadius: "8px", // Rounded corners
//   transition: "transform 0.5s ease, box-shadow 0.5s ease", // Animation effect
//   "&:hover": {
//     transform: "scale(1.05)", // Scale effect on hover
//     boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)", // Shadow effect on hover
//   },
// }));

// const ImageStyled = styled("img")(() => ({
//   width: "100%",
//   height: "auto",
//   transition: "opacity 0.5s ease",
//   opacity: 0, // Start with opacity 0
// }));

// // Initial login credentials
// const initialValues = {
//   email: "jason@ui-lib.com",
//   password: "dummyPass",
//   remember: true,
// };

// const validationSchema = Yup.object().shape({
//   password: Yup.string()
//     .min(6, "Password must be 6 character length")
//     .required("Password is required!"),
//   email: Yup.string()
//     .email("Invalid Email address")
//     .required("Email is required!"),
// });

// export default function JwtLogin() {
//   const theme = useTheme();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [showImage, setShowImage] = useState(false); // State for image visibility

//   const { login } = useAuth();

//   const handleFormSubmit = async (values) => {
//     setLoading(true);
//     try {
//       await login(values.email, values.password);
//       navigate("/");
//     } catch (e) {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Show the image after the component mounts
//     setShowImage(true);
//   }, []);

//   return (
//     <StyledRoot>
//       <Card className="card">
//         <Grid container spacing={2}> {/* Added spacing for better layout */}
//           <Grid item sm={6} xs={12}>
//             <ImageWrapper>
//               <ImageStyled
//                 src="/assets/images/illustrations/dreamer.svg"
//                 alt="Illustration"
//                 style={{ opacity: showImage ? 1 : 0 }} // Fade in effect
//               />
//             </ImageWrapper>
//           </Grid>

//           <Grid item sm={6} xs={12}>
//             <ContentBox>
//               <img
//                 style={{
//                   objectFit: "cover",
//                   overflow: "hidden",
//                   width: "100%",
//                   height: "60px",
//                 }}
//                 src="/assets/images/rudraksh-logo-1 (3).png"
//                 alt="Logo"
//               />
//               <Formik
//                 onSubmit={handleFormSubmit}
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//               >
//                 {({
//                   values,
//                   errors,
//                   touched,
//                   handleChange,
//                   handleBlur,
//                   handleSubmit,
//                 }) => (
//                   <form onSubmit={handleSubmit}>
//                     {/* Email Field */}
//                     <TextField
//                       fullWidth
//                       size="medium" // Increased size
//                       type="email"
//                       name="email"
//                       label="Email"
//                       variant="outlined"
//                       onBlur={handleBlur}
//                       value={values.email}
//                       onChange={handleChange}
//                       helperText={touched.email && errors.email}
//                       error={Boolean(errors.email && touched.email)}
//                       sx={{
//                         mb: 3,
//                         fontSize: "18px", // Larger font size
//                       }}
//                     />

//                     {/* Password Field */}
//                     <TextField
//                       fullWidth
//                       size="medium" // Increased size
//                       name="password"
//                       type="password"
//                       label="Password"
//                       variant="outlined"
//                       onBlur={handleBlur}
//                       value={values.password}
//                       onChange={handleChange}
//                       helperText={touched.password && errors.password}
//                       error={Boolean(errors.password && touched.password)}
//                       sx={{
//                         mb: 1.5,
//                         fontSize: "18px", // Larger font size
//                       }}
//                     />

//                     {/* Login Button */}
//                     <LoadingButton
//                       type="submit"
//                       color="primary"
//                       loading={loading}
//                       variant="contained"
//                       sx={{
//                         my: 2,
//                         width: "300px", // Larger width
//                         height: "55px", // Larger height
//                         fontSize: "18px", // Larger font
//                         padding: "12px 24px",
//                         backgroundColor: theme.palette.primary.main,
//                         "&:hover": {
//                           backgroundColor: theme.palette.primary.dark,
//                         },
//                       }}
//                     >
//                       Login
//                     </LoadingButton>
//                   </form>
//                 )}
//               </Formik>
//             </ContentBox>
//           </Grid>
//         </Grid>
//       </Card>
//     </StyledRoot>
//   );
// }



import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Card,
  Grid,
  TextField,
  Box,
  styled,
  useTheme,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Formik } from "formik";
import * as Yup from "yup";
import useAuth from "app/hooks/useAuth";

// Styled components
const FlexBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const ContentBox = styled("div")(() => ({
  height: "100%",
  padding: "32px",
  position: "relative",
  background: "rgba(255, 255, 255, 0.1)", // Light background for contrast
  textAlign: "center",
  borderRadius: "12px", // Rounded corners for the content box
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
}));

const StyledRoot = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#1A2038",
  minHeight: "100vh",
  "& .card": {
    maxWidth: 800,
    minHeight: 400,
    margin: "1rem",
    display: "flex",
    borderRadius: 12,
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
  },
}));

// Image wrapper with attractive border and animation
const ImageWrapper = styled("div")(() => ({
  height: "100%",
  minWidth: 320,
  display: "flex",
  padding: "2rem",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px", // Rounded corners
  background: "linear-gradient(135deg, #3f51b5, #2196f3)", // Gradient background for border
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", // Shadow for depth
  position: "relative", // Needed for the pseudo-element
  "&:hover": {
    boxShadow: "0 16px 30px rgba(0, 0, 0, 0.3)", // Increase shadow on hover
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: "5px solid #fff", // White border inside
    borderRadius: "8px", // Same rounding as the wrapper
    zIndex: 1,
    opacity: 0.5, // Slight transparency
  },
}));

const ImageStyled = styled("img")(() => ({
  width: "100%",
  height: "auto",
  transition: "opacity 0.5s ease",
  opacity: 0, // Start with opacity 0
  borderRadius: "8px", // Rounded corners
  zIndex: 0, // Place image behind the pseudo-element
}));

// Initial login credentials
const initialValues = {
  email: "jason@ui-lib.com",
  password: "dummyPass",
  remember: true,
};

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be 6 character length")
    .required("Password is required!"),
  email: Yup.string()
    .email("Invalid Email address")
    .required("Email is required!"),
});

export default function JwtLogin() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showImage, setShowImage] = useState(false); // State for image visibility

  const { login } = useAuth();

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      await login(values.email, values.password);
      navigate("/");
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Show the image after the component mounts
    setShowImage(true);
  }, []);

  return (
    <StyledRoot>
      <Card className="card">
        <Grid container spacing={2}> {/* Added spacing for better layout */}
          <Grid item sm={6} xs={12}>
            <ImageWrapper>
              <ImageStyled
                src="/assets/images/illustrations/dreamer.svg"
                alt="Illustration"
                style={{ opacity: showImage ? 1 : 0 }} // Fade in effect
              />
            </ImageWrapper>
          </Grid>

          <Grid item sm={6} xs={12}>
            <ContentBox>
              <img
                style={{
                  objectFit: "cover",
                  overflow: "hidden",
                  width: "100%",
                  height: "60px",
                  marginBottom:"20px"
                }}
                src="/assets/images/rudraksh-logo-1 (3).png"
                alt="Logo"
              />
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit}>
                    {/* Email Field */}
                    <TextField
                      fullWidth
                      size="medium" // Increased size
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                      sx={{
                        mb: 3,
                        fontSize: "18px", // Larger font size
                      }}
                    />

                    {/* Password Field */}
                    <TextField
                      fullWidth
                      size="medium" // Increased size
                      name="password"
                      type="password"
                      label="Password"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{
                        mb: 1.5,
                        fontSize: "18px", // Larger font size
                      }}
                    />

                    {/* Login Button */}
                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{
                        my: 2,
                        width: "300px", // Larger width
                        height: "55px", // Larger height
                        fontSize: "18px", // Larger font
                        padding: "12px 24px",
                        backgroundColor: theme.palette.primary.main,
                        "&:hover": {
                          backgroundColor: theme.palette.primary.dark,
                        },
                      }}
                    >
                      Login
                    </LoadingButton>
                  </form>
                )}
              </Formik>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
    </StyledRoot>
  );
}
