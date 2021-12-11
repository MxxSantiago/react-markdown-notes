import useNotes from '../../hooks/useNotes';

import { IconButton, Tooltip } from '@chakra-ui/react';

import { CgTrash } from 'react-icons/cg';

const DeleteNoteButton = () => {
    let { notes, deleteNote } = useNotes();

    return (
        <>
            {notes.notes.length > 1 ? (
                <Tooltip label="Delete note">
                    <IconButton
                        border="none"
                        borderRadius="0"
                        colorScheme="red"
                        icon={<CgTrash />}
                        onClick={() => deleteNote(notes.activeNote)}
                        variant="outline"
                        _focus={'box-shadow: none'}
                    />
                </Tooltip>
            ) : null}
        </>
    );
};

export default DeleteNoteButton;
