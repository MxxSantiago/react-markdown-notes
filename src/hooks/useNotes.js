import { useSelector } from 'react-redux';
import { useActions } from './useActions';
import {
    changeActiveNote,
    addNewNote,
    deleteNote,
    saveNoteContent,
} from '../redux/actions/notes';

const useNotes = () => {
    const notes = useSelector((state) => state.notes);

    const actions = useActions({
        changeActiveNote,
        addNewNote,
        deleteNote,
        saveNoteContent,
    });

    const activeNote = notes.notes.find((note) => note.id === notes.activeNote);

    return { notes, activeNote, ...actions };
};

export default useNotes;
