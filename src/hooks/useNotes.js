import { useSelector } from 'react-redux';
import { useActions } from './useActions';
import {
    changeActiveNote,
    addNewNote,
    deleteNote,
} from '../redux/actions/notes';

const useNotes = () => {
    const notes = useSelector((state) => state.notes);

    const actions = useActions({ changeActiveNote, addNewNote, deleteNote });

    const activeNote = notes.notes.find((note) => note.id === notes.activeNote);

    return { notes, activeNote, ...actions };
};

export default useNotes;
