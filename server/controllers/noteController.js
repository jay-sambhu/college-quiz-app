const noteService = require('../services/noteService');
const { validationResult } = require('express-validator');

/**
 * Create a new note
 */
exports.createNote = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, content, isPublic } = req.body;
    const userId = req.user.userId;

    const note = await noteService.create({
      title,
      content,
      userId,
      isPublic
    });

    res.status(201).json(note);
  } catch (error) {
    console.error('Error creating note:', error);
    res.status(500).json({ message: 'Error creating note', error: error.message });
  }
};

/**
 * Update an existing note
 */
exports.updateNote = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const noteId = Number(req.params.id);
    const { title, content, isPublic } = req.body;
    const userId = req.user.userId;

    // Check if note exists and belongs to the user
    const existingNote = await noteService.findById(noteId);
    if (!existingNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    if (existingNote.userId !== userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'You do not have permission to update this note' });
    }

    const updatedNote = await noteService.update(noteId, {
      title,
      content,
      isPublic
    });

    res.json(updatedNote);
  } catch (error) {
    console.error('Error updating note:', error);
    res.status(500).json({ message: 'Error updating note', error: error.message });
  }
};

/**
 * Delete a note
 */
exports.deleteNote = async (req, res) => {
  try {
    const noteId = Number(req.params.id);
    const userId = req.user.userId;

    // Check if note exists and belongs to the user
    const existingNote = await noteService.findById(noteId);
    if (!existingNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    if (existingNote.userId !== userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'You do not have permission to delete this note' });
    }

    await noteService.delete(noteId);
    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error('Error deleting note:', error);
    res.status(500).json({ message: 'Error deleting note', error: error.message });
  }
};

/**
 * Get a note by ID
 */
exports.getNoteById = async (req, res) => {
  try {
    const noteId = Number(req.params.id);
    const userId = req.user.userId;

    const note = await noteService.findById(noteId);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    // Check if user has access to the note
    const hasAccess = 
      note.isPublic || 
      note.userId === userId || 
      req.user.role === 'admin' ||
      note.accesses.some(access => access.studentId === userId);

    if (!hasAccess) {
      return res.status(403).json({ message: 'You do not have permission to view this note' });
    }

    res.json(note);
  } catch (error) {
    console.error('Error fetching note:', error);
    res.status(500).json({ message: 'Error fetching note', error: error.message });
  }
};

/**
 * Get all notes by a user
 */
exports.getNotesByUser = async (req, res) => {
  try {
    const userId = req.user.userId;
    const notes = await noteService.findByUser(userId);
    res.json(notes);
  } catch (error) {
    console.error('Error fetching notes:', error);
    res.status(500).json({ message: 'Error fetching notes', error: error.message });
  }
};

/**
 * Get all notes (admin only)
 */
exports.getAllNotes = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }
    
    const notes = await noteService.findAll();
    res.json(notes);
  } catch (error) {
    console.error('Error fetching all notes:', error);
    res.status(500).json({ message: 'Error fetching notes', error: error.message });
  }
};

/**
 * Share a note with a student
 */
exports.shareNote = async (req, res) => {
  try {
    const noteId = Number(req.params.id);
    const { studentId } = req.body;
    const userId = req.user.userId;

    // Check if note exists and belongs to the user
    const note = await noteService.findById(noteId);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    if (note.userId !== userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'You do not have permission to share this note' });
    }

    await noteService.shareWithStudent(noteId, studentId);
    res.json({ message: 'Note shared successfully' });
  } catch (error) {
    console.error('Error sharing note:', error);
    res.status(500).json({ message: 'Error sharing note', error: error.message });
  }
};

/**
 * Unshare a note with a student
 */
exports.unshareNote = async (req, res) => {
  try {
    const noteId = Number(req.params.id);
    const { studentId } = req.body;
    const userId = req.user.userId;

    // Check if note exists and belongs to the user
    const note = await noteService.findById(noteId);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    if (note.userId !== userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'You do not have permission to unshare this note' });
    }

    await noteService.unshareWithStudent(noteId, studentId);
    res.json({ message: 'Note unshared successfully' });
  } catch (error) {
    console.error('Error unsharing note:', error);
    res.status(500).json({ message: 'Error unsharing note', error: error.message });
  }
}; 