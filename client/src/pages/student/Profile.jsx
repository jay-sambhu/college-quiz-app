import { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import useApi from '../../hooks/useApi';
import { getProfile, getLoginHistory } from '../../services/api';

const Profile = () => {
  const { execute: fetchProfile, data: profileRes, loading: loadingProfile } = useApi(getProfile);
  const { execute: fetchHistory, data: historyRes, loading: loadingHistory } = useApi(getLoginHistory);

  useEffect(() => {
    fetchProfile();
    fetchHistory();
  }, [fetchProfile, fetchHistory]);

  const loading = loadingProfile || loadingHistory;
  const profile = profileRes?.data;
  const history = historyRes?.data || [];

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6">Username: {profile.username}</Typography>
            <Typography variant="body1">Email: {profile.email}</Typography>
            <Typography variant="body2">Role: {profile.role}</Typography>
          </CardContent>
        </Card>
        <Typography variant="h5" gutterBottom>
          Login History
        </Typography>
        <List>
          {history.map((entry) => (
            <ListItem key={entry.id || entry.date}>
              <ListItemText primary={new Date(entry.date).toLocaleString()} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Profile; 