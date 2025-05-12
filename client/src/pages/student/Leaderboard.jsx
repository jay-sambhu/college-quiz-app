import { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';
import useApi from '../../hooks/useApi';
import { getLeaderboard } from '../../services/api';

const Leaderboard = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const {
    execute: fetchLeaderboard,
    data: leaderboardRes,
    loading,
    error,
  } = useApi(getLeaderboard);
  const data = leaderboardRes?.data || [];

  useEffect(() => {
    fetchLeaderboard(month).catch(() => {});
  }, [month]);

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h4">Leaderboard</Typography>
        <FormControl sx={{ minWidth: 120, mt: 2 }}>
          <InputLabel>Month</InputLabel>
          <Select
            value={month}
            label="Month"
            onChange={(e) => setMonth(e.target.value)}
          >
            {[...Array(12).keys()].map((m) => (
              <MenuItem key={m + 1} value={m + 1}>
                {new Date(0, m).toLocaleString('default', { month: 'long' })}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          Failed to load leaderboard.
        </Alert>
      )}
      {!loading && !error && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Student</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((entry, idx) => (
              <TableRow key={entry.userId || idx}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{entry.username}</TableCell>
                <TableCell>{entry.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Container>
  );
};

export default Leaderboard; 