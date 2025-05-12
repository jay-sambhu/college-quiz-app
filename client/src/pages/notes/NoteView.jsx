import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Paper,
  Button,
  CircularProgress,
  IconButton,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';
import { getTeacherNote, getStudentNote, deleteNote } from '../../services/api';

const NoteView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        // Select the appropriate API function based on user role
        const getNoteFunc = user.role === 'teacher' ? getTeacherNote : getStudentNote;
        const noteData = await getNoteFunc(id);
        
        if (noteData.userId !== user.id) {
          navigate('/notes');
          return;
        }
        setNote(noteData);
      } catch (error) {
        console.error('Error fetching note:', error);
        navigate('/notes');
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id, user.id, user.role, navigate]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        await deleteNote(id);
        navigate('/notes');
      } catch (error) {
        console.error('Error deleting note:', error);
      }
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!note) {
    return null;
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h4">{note.title}</Typography>
            <Box>
              <IconButton
                color="primary"
                onClick={() => navigate(`/notes/${id}/edit`)}
              >
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
          <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-wrap' }}>
            {note.content}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Created: {new Date(note.created_at).toLocaleString()}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default NoteView; 