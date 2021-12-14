import { initialNote } from '../../initial-note';

import types from '../types/types';

const initialState = {
    notes: [initialNote],
    activeNote: 928734,
};

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.notesActiveNote:
            return {
                ...state,
                activeNote: action.payload,
            };
        case types.notesAddNewNote:
            return {
                ...state,
                notes: [...state.notes, action.payload],
            };
        case types.notesDeleteNote:
            let newActiveNote = state.notes[0].id;

            if (action.payload === newActiveNote) {
                newActiveNote = state.notes[1].id;
            }

            return {
                notes: state.notes.filter((note) => note.id !== action.payload),
                activeNote: newActiveNote,
            };
        case types.notesSaveNoteContent:
            const activeNoteIndex = state.notes.findIndex(
                (note) => note.id === state.activeNote
            );

            return Object.assign({}, state, {
                ...state,
                notes: [
                    ...state.notes.slice(0, activeNoteIndex),
                    Object.assign(
                        {},
                        state.notes[activeNoteIndex],
                        action.payload
                    ),
                    ...state.notes.slice(activeNoteIndex + 1),
                ],
            });
        default:
            return state;
    }
};
