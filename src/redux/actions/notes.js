import types from '../types/types';

export const changeActiveNote = (id) => ({
    type: types.notesActiveNote,
    payload: id,
});

export const addNewNote = (note) => ({
    type: types.notesAddNewNote,
    payload: note,
});

export const deleteNote = (id) => ({
    type: types.notesDeleteNote,
    payload: id,
});
