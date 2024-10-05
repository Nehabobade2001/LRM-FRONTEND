
import React from 'react';
import { Container, Box, Typography, Button, Paper, Grid, Stack } from '@mui/material';
import BackupIcon from '@mui/icons-material/Backup';
import RestoreIcon from '@mui/icons-material/Restore';
import SecurityIcon from '@mui/icons-material/Security';

const  DataSecure = () => {
  const handleBackup = () => {
    // Logic to trigger backup
    console.log('Backup triggered');
  };

  const handleRestore = () => {
    // Logic to restore from backup
    console.log('Restore initiated');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          <SecurityIcon fontSize="large" /> Data Security & Backup
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Ensure your data is backed up regularly and securely.
        </Typography>
        
        {/* Backup Info Section */}
        <Grid container spacing={4} sx={{ my: 4 }}>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Last Backup</Typography>
              <Typography>October 4th, 2024</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Backup Status</Typography>
              <Typography color="green">Up to Date</Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Backup Controls */}
        <Box textAlign="center" sx={{ mt: 4 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              startIcon={<BackupIcon />}
              onClick={handleBackup}
              sx={{ px: 4 }}
            >
              Backup Now
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<RestoreIcon />}
              onClick={handleRestore}
              sx={{ px: 4 }}
            >
              Restore Backup
            </Button>
            <Button
              variant="outlined"
              color="info"
              sx={{ px: 4 }}
            >
              View Backup Logs
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default DataSecure;
