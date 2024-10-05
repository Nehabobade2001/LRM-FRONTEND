
import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Grid, InputLabel, TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UploadDoc = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      const files = data[key];
      for (let i = 0; i < files.length; i++) {
        formData.append(key, files[i]);
      }
    });

    
    formData.append('userId', 'yourUserId'); 
    formData.append('userName', 'yourUserName'); 

    try {
      const response = await fetch('http://localhost:8000/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      const result = await response.json();
      
      if (response.ok) {
        console.log(result.message); 
        navigate('/view-documents');
      } else {
        console.error('Error:', result.message);
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Upload Documents
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            {[
              "registry_papers",
              "adhaar_card_farmer",
              "agreement_papers",
              "khasra_book",
            ].map((label, index) => (
              <Grid item lg={6} md={6} sm={12} xs={12} key={index}>
                <InputLabel>{label.replace(/_/g, ' ').toUpperCase()} (optional)</InputLabel>
                <TextField
                  type="file"
                  fullWidth
                  inputProps={{ multiple: true }}
                  {...register(label)}
                  error={!!errors[label]}
                  helperText={errors[label] ? 'This field is required' : ''}
                  sx={{ mb: 2 }}
                />
              </Grid>
            ))}
          </Grid>
          <Button type="submit" variant="contained" color="primary">
            Upload Documents
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default UploadDoc









// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { Box, Grid, InputLabel, TextField, Button, Typography, Paper } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const  UploadDoc = () => {
//   const { register, handleSubmit } = useForm();
//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     const formData = new FormData();

//     // Append each file to FormData
//     Object.keys(data).forEach((key) => {
//       const files = data[key];
//       for (let i = 0; i < files.length; i++) {
//         formData.append(key, files[i]);
//       }
//     });

//     // Add userId and userName to FormData
//     formData.append('userId', 'yourUserId'); // Replace with actual user ID
//     formData.append('userName', 'yourUserName'); // Replace with actual user name

//     try {
//       const response = await fetch('http://localhost:8000/api/upload', {
//         method: 'POST',
//         body: formData,
//       });
//       const result = await response.json();
//       console.log(result.message); // Handle success

//       // Navigate to the view page after successful upload
//       navigate('/view-documents');
//     } catch (error) {
//       console.error('Error uploading files:', error);
//     }
//   };

//   return (
//     <Box sx={{ p: 3 }}>
//       <Paper elevation={3} sx={{ padding: 3 }}>
//         <Typography variant="h4" gutterBottom>
//           Upload Documents
//         </Typography>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Grid container spacing={3}>
//             {[
//               "registry_papers",
//               "adhaar_card_farmer",
//               "agreement_papers",
//               "khasra_book",
//             ].map((label, index) => (
//               <Grid item lg={6} md={6} sm={12} xs={12} key={index}>
//                 <InputLabel>{label.replace(/_/g, ' ').toUpperCase()} (optional)</InputLabel>
//                 <TextField
//                   type="file"
//                   fullWidth
//                   inputProps={{ multiple: true }}
//                   {...register(label)}
//                   sx={{ mb: 2 }}
//                 />
//               </Grid>
//             ))}
//           </Grid>
//           <Button type="submit" variant="contained" color="primary">
//             Upload Documents
//           </Button>
//         </form>
//       </Paper>
//     </Box>
//   );
// };

// export default UploadDoc







