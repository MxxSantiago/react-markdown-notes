import types from '../types/types';

const initialState = {
    notes: [
        {
            content: '# Note title',
            id: 111,
            tags: [
                {
                    title: 'Examples',
                    color: 'blue',
                },
            ],
            title: 'Example note',
        },
    ],
    activeNote: 111,
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
        default:
            return state;
    }
};
